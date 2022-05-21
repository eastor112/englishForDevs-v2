import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ISettingsState {
  darkTheme?: Boolean;
  notifications?: Boolean;
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
    setDarkTheme: (state, action: PayloadAction<Boolean>) => {
      state.darkTheme = action.payload;
    },
  },
});

export default settingsSlice.reducer;
