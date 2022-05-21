export interface IAuthState {
  isAuthenticated?: boolean;
  isLoading?: boolean;
  user?: IUser | null;
  error?: string | null;
}

export interface IUser {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string | null;
}
