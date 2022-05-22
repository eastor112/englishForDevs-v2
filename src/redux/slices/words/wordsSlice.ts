import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {IWord} from './wordsSlice.types';

interface IWordsSliceState {
  wordsRefs: FirebaseFirestoreTypes.DocumentReference[];
  words: IWord[];
  activeWord: IWord | null;
  index: number;
  isLoading: boolean;
}

const initialState: IWordsSliceState = {
  wordsRefs: [],
  words: [],
  activeWord: null,
  index: 0,
  isLoading: false,
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
      state.index = state.index + 1;
    },
  },
});

export const {setWordsRefs} = wordsSlice.actions;
export default wordsSlice.reducer;
