import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {ITopic} from './topicsSlice.types';
import firestore from '@react-native-firebase/firestore';

interface ITopicsSliceState {
  topics: ITopic[];
  activeTopic: ITopic | null;
  isLoading: boolean;
}

const initialState: ITopicsSliceState = {
  topics: [],
  activeTopic: null,
  isLoading: false,
};

export const fetchAllTopics = createAsyncThunk(
  'topics/fetchAllTopics',
  async (lessonId: string) => {
    const topicsCollectionRef = firestore()
      .collection(`lessons/${lessonId}/topics`)
      .orderBy('topicNumber', 'asc');

    const topicsArray = await topicsCollectionRef.get();

    const topicsArrayModified = topicsArray.docs.map(doc => {
      const topic = doc.data();
      topic.id = doc.id;
      return topic as ITopic;
    });

    return topicsArrayModified;
  },
);

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    setActiveTopic: (state, action: PayloadAction<ITopic>) => {
      state.activeTopic = action.payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchAllTopics.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(fetchAllTopics.fulfilled, (state, {payload}) => {
      state.topics = payload;
      state.isLoading = false;
    });
  },
});

export const {setActiveTopic} = topicsSlice.actions;
export default topicsSlice.reducer;
