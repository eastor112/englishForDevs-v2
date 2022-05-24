import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ISettingsState {
  darkTheme: boolean;
  notifications?: boolean;
  timeToStudy?: string;
}

const initialState: ISettingsState = {
  darkTheme: false,
  notifications: true,
  timeToStudy: '00:00',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setDarkTheme: (state, action: PayloadAction<boolean>) => {
      state.darkTheme = action.payload;
    },
  },
});

export const {setDarkTheme} = settingsSlice.actions;
export default settingsSlice.reducer;
