import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {IUserSignUp, IUserLogin} from '../../../screens/auth/auth.types';
import {IAuthState, IUser, IUserData} from './authSlice.types';
import {RootState} from '../../store';
import {IWordResponse} from '../words/wordsSlice.types';

GoogleSignin.configure({
  webClientId:
    '205392024757-86s953d4elbupalakt5ginic3elj152a.apps.googleusercontent.com',
});

const initialState: IAuthState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  userData: null,
  error: null,
};

export const signUpWithEmailandPassword = createAsyncThunk(
  'auth/signUpWithEmailandPassword',
  async ({displayName, email, password}: IUserSignUp) => {
    try {
      const {user} = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      await user.updateProfile({displayName});
      await user.sendEmailVerification();

      const usersCollection = firestore().collection('users').doc(user.uid);
      await usersCollection.set({
        lessonsCompleted: [],
        topicsCompleted: [],
        wordsResponses: [],
        phraseResponses: [],
      } as IUserData);

      return {
        user: {
          uid: user.uid,
          displayName: displayName,
          email: user.email as string,
          photoURL: 'https://picsum.photos/200/200',
        },
        userData: {
          wordsResponses: [],
          phraseResponses: [],
          lessonsCompleted: [],
          topicsCompleted: [],
        } as IUserData,
      } as IAuthState;
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        return {error: 'Email already in use'} as IAuthState;
      }
      return {
        error: error.message,
      } as IAuthState;
    }
  },
);

export const loginWithEmailandPassword = createAsyncThunk<
  IAuthState,
  IUserLogin
>('auth/login', async ({email, password}) => {
  try {
    if (email !== '' && password !== '') {
      const {user} = await auth().signInWithEmailAndPassword(email, password);

      await user.updateProfile({
        displayName: 'No Name',
        photoURL: 'https://picsum.photos/200/200',
      });

      const userDocument = firestore().collection('users').doc(user.uid);
      const userData = (await userDocument.get()).data();

      return {
        user: {
          uid: user.uid,
          displayName: 'No Name',
          email: user.email as string,
          photoURL: 'https://picsum.photos/200/200',
        },
        userData: userData as IUserData,
      } as IAuthState;
    } else {
      return {
        error: 'Email and password are required',
      } as IAuthState;
    }
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      return {
        error: 'Wrong password',
      } as IAuthState;
    } else if (error.code === 'auth/user-not-found') {
      return {
        error: 'User not found',
      } as IAuthState;
    } else {
      return {
        error: error.message,
      } as IAuthState;
    }
  }
});

export const loginWithGoogle = createAsyncThunk<IAuthState, void>(
  'auth/loginWithGoogle',
  async () => {
    try {
      const {idToken} = await GoogleSignin.signIn();

      const credential = auth.GoogleAuthProvider.credential(idToken);
      const {user} = await auth().signInWithCredential(credential);

      const userDocument = firestore().collection('users').doc(user.uid);
      let userData = (await userDocument.get()).data();

      if (!userData) {
        await userDocument.set({
          lessonsCompleted: [],
          topicsCompleted: [],
          wordsResponses: [],
          phraseResponses: [],
        } as IUserData);

        userData = (await userDocument.get()).data();
      }

      return {
        user: {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email as string,
          photoURL: user.photoURL,
        },
        userData: userData as IUserData,
      } as IAuthState;
    } catch (error) {
      return {
        error: error.message,
      } as IAuthState;
    }
  },
);

export const signOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    await auth().signOut();

    thunkAPI.dispatch(logout());
  } catch (error) {
    thunkAPI.dispatch(logout());
  }
});

export const updateUserWordsResponses = createAsyncThunk(
  'auth/updateUserWordsResponses',
  async (responses: IWordResponse[], {getState}) => {
    const {
      auth: {user, userData},
    } = getState() as RootState;

    if (userData?.wordsResponses) {
      const updatedWordsResponses = userData?.wordsResponses.map(wr => {
        const existWord = responses.find(r => r.wordId === wr.wordId);

        if (existWord) {
          return existWord;
        }

        return wr;
      });

      const newWordResponses = responses.filter(
        res =>
          !userData?.wordsResponses.some(
            (wr: IWordResponse) => wr.wordId === res.wordId,
          ),
      );

      const userDocument = firestore().collection('users').doc(user!.uid);

      await userDocument.update({
        wordsResponses: [...updatedWordsResponses, ...newWordResponses],
      });

      return {
        userData: {
          wordsResponses: [...updatedWordsResponses, ...newWordResponses],
        },
      } as IAuthState;
    }

    const userDocument = firestore().collection('users').doc(user!.uid);

    await userDocument.set({
      wordsResponses: responses,
    } as IUserData);

    return {
      userData: {
        wordsResponses: responses,
      },
    } as IAuthState;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    clearError: state => {
      state.error = null;
    },

    logout: state => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(signUpWithEmailandPassword.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(signUpWithEmailandPassword.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.isLoading = false;
        state.error = action.payload.error;
      } else {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.userData = action.payload.userData;
        state.isLoading = false;
        state.error = null;
      }
    });

    builder.addCase(loginWithEmailandPassword.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(loginWithEmailandPassword.fulfilled, (state, action) => {
      if (action.payload.user) {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.userData = action.payload.userData;
        state.error = null;
      } else {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload.error;
      }
    });

    builder.addCase(loginWithEmailandPassword.rejected, state => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    });

    builder.addCase(loginWithGoogle.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(loginWithGoogle.fulfilled, (state, action) => {
      if (action.payload.user) {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.userData = action.payload.userData;
        state.error = null;
      } else {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload.error;
      }
    });

    builder.addCase(loginWithGoogle.rejected, state => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    });

    builder.addCase(updateUserWordsResponses.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(updateUserWordsResponses.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = action.payload.userData;
    });
  },
});

export const {setUser, setError, clearError, logout} = authSlice.actions;
export default authSlice.reducer;
