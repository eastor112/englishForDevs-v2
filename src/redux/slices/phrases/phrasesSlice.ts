import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {IPhraseResponse} from './phrasesSlice.types';

interface IPhrasesSliceState {
  phrasesRefs: FirebaseFirestoreTypes.DocumentReference[];
  phraseIndex: number;
  isLoading: boolean;
  phrasesResponses: IPhraseResponse[];
  isCompleted: boolean;
  isReviewing: boolean;
}

const initialState: IPhrasesSliceState = {
  phrasesRefs: [],
  phraseIndex: 0,
  isLoading: false,
  phrasesResponses: [],
  isCompleted: false,
  isReviewing: false,
};

const phrasesSlice = createSlice({
  name: 'phrases',
  initialState,
  reducers: {
    setPhrasesRefs: (
      state,
      action: PayloadAction<FirebaseFirestoreTypes.DocumentReference[]>,
    ) => {
      state.phrasesRefs = action.payload;
    },

    nextPhraseIndex: state => {
      if (state.phraseIndex < state.phrasesRefs.length - 1) {
        state.phraseIndex = state.phraseIndex + 1;
      }
    },
    prevPhraseIndex: state => {
      if (state.phraseIndex > 0) {
        state.phraseIndex = state.phraseIndex - 1;
      }
    },
    addPhraseResponse: (state, action: PayloadAction<IPhraseResponse>) => {
      const existsPhraseResponse = state.phrasesResponses.find(
        phraseResponse => phraseResponse.phraseId === action.payload.phraseId,
      );

      if (existsPhraseResponse) {
        existsPhraseResponse.date = action.payload.date;
        existsPhraseResponse.response = action.payload.response;
      } else {
        state.phrasesResponses.push(action.payload);
      }

      if (state.phrasesResponses.length === state.phrasesRefs.length) {
        state.isCompleted = true;
      }
    },

    setIsPhrasesReviewing: (state, action: PayloadAction<boolean>) => {
      state.isReviewing = action.payload;
    },

    resetPhrasesState: () => initialState,
  },
});

export const {
  setPhrasesRefs,
  nextPhraseIndex,
  prevPhraseIndex,
  addPhraseResponse,
  setIsPhrasesReviewing,
  resetPhrasesState,
} = phrasesSlice.actions;
export default phrasesSlice.reducer;
