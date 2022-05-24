import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {IWordResponse} from './wordsSlice.types';

interface IWordsSliceState {
  wordsRefs: FirebaseFirestoreTypes.DocumentReference[];
  index: number;
  isLoading: boolean;
  wordsResponses: IWordResponse[];
  isCompleted: boolean;
  isReviewing: boolean;
}

const initialState: IWordsSliceState = {
  wordsRefs: [],
  index: 0,
  isLoading: false,
  wordsResponses: [],
  isCompleted: false,
  isReviewing: false,
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    setWordsRefs: (
      state,
      action: PayloadAction<FirebaseFirestoreTypes.DocumentReference[]>,
    ) => {
      state.wordsRefs = action.payload;
    },
    nextIndex: state => {
      if (state.index < state.wordsRefs.length - 1) {
        state.index = state.index + 1;
      }
    },
    prevIndex: state => {
      if (state.index > 0) {
        state.index = state.index - 1;
      }
    },
    addWordResponse: (state, action: PayloadAction<IWordResponse>) => {
      const existsWordResponse = state.wordsResponses.find(
        wordResponse => wordResponse.wordId === action.payload.wordId,
      );

      if (existsWordResponse) {
        existsWordResponse.date = action.payload.date;
        existsWordResponse.response = action.payload.response;
      } else {
        state.wordsResponses.push(action.payload);
      }

      if (state.wordsResponses.length === state.wordsRefs.length) {
        state.isCompleted = true;
      }
    },
    setIsReviewing: (state, action: PayloadAction<boolean>) => {
      state.isReviewing = action.payload;
    },
    resetWordsState: () => initialState,
  },
});

export const {
  setWordsRefs,
  nextIndex,
  prevIndex,
  addWordResponse,
  setIsReviewing,
  resetWordsState,
} = wordsSlice.actions;

export default wordsSlice.reducer;
