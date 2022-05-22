import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ILesson} from './lessonsSlice.types';
import firestore from '@react-native-firebase/firestore';

interface ILessonsState {
  lessons: ILesson[];
  activeLesson: ILesson | null;
  isLoading: boolean;
}

const initialState: ILessonsState = {
  lessons: [],
  activeLesson: null,
  isLoading: false,
};

export const fetchAllLessons = createAsyncThunk(
  'lessons/fetchAllLessons',
  async () => {
    const lessonsCollectionRef = firestore()
      .collection('lessons')
      .orderBy('lessonNumber', 'asc');

    const lessonsArray = await lessonsCollectionRef.get();

    const lessonsArrayModified = lessonsArray.docs.map(doc => {
      const lesson = doc.data();
      lesson.id = doc.id;
      return lesson as ILesson;
    });

    return lessonsArrayModified;
  },
);

const lessonsSlice = createSlice({
  name: 'lessons',
  initialState: initialState,
  reducers: {
    setActiveLesson: (state, action: PayloadAction<ILesson>) => {
      state.activeLesson = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAllLessons.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllLessons.fulfilled, (state, action) => {
      state.lessons = action.payload;
      state.isLoading = false;
    });
  },
});

export const {setActiveLesson} = lessonsSlice.actions;
export default lessonsSlice.reducer;
