import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import {IWord, IWordResponse} from '../words/wordsSlice.types';
import {IPhrase, IPhraseResponse} from '../phrases/phrasesSlice.types';

interface IReviewSliceState {
  words: IWord[];
  wordsResponses: IWordResponse[];
  phrases: IPhrase[];
  phrasesResponses: IPhraseResponse[];
  reviewIndex: number;
  isLoading: boolean;
  isCompleted: boolean;
  isReviewing: boolean;
}

export const setWordsAndPhrasesRefs = createAsyncThunk(
  'review/setWordAndPhraseRefs',
  async () => {
    const wordsRefs = firestore().collection('words');
    const words = await wordsRefs.limit(10).get();
    const wordsData: IWord[] = [];

    words.docs.forEach(doc => {
      wordsData.push(doc.data() as IWord);
    });

    const phrasesRefs = firestore().collection('phrases');
    const phrases = await phrasesRefs.limit(10).get();
    const phrasesData: IPhrase[] = [];

    phrases.docs.forEach(doc => {
      phrasesData.push(doc.data() as IPhrase);
    });

    return {wordsData, phrasesData};
  },
);

const initialState: IReviewSliceState = {
  words: [],
  wordsResponses: [],
  phrases: [],
  phrasesResponses: [],
  reviewIndex: 0,
  isLoading: false,
  isCompleted: false,
  isReviewing: false,
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setWordsAndPhrasesRefs.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(setWordsAndPhrasesRefs.fulfilled, (state, action) => {
      state.words = action.payload.wordsData;
      state.phrases = action.payload.phrasesData;
      state.isLoading = false;
    });
  },
});

export default reviewSlice.reducer;
