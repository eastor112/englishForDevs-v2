import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IAuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: IUser | null;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  photo: string;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export const login = createAsyncThunk('auth/login', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user = await response.json();

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    photo: 'https://picsum.photos/id/2/200/300',
  };
});

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    });
  },
});

export const {setUser} = authSlice.actions;
export default authSlice.reducer;
