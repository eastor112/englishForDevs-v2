import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {IUserLogin} from '../../screens/auth/auth.types';
import {IAuthState, IUser} from './authSlice.types';

GoogleSignin.configure({
  webClientId:
    '205392024757-86s953d4elbupalakt5ginic3elj152a.apps.googleusercontent.com',
});

const initialState: IAuthState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  error: null,
};

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

      return {
        user: {
          uid: user.uid,
          displayName: 'No Name',
          email: user.email as string,
          photoURL: 'https://picsum.photos/200/200',
        },
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

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(loginWithEmailandPassword.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loginWithEmailandPassword.fulfilled, (state, action) => {
      if (action.payload.user) {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.error = null;
      } else {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload.error;
      }
    });
  },
});

export const {setUser, setError, clearError} = authSlice.actions;
export default authSlice.reducer;
