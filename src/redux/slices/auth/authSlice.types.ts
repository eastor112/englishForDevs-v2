import {IPhraseResponse} from '../phrases/phrasesSlice.types';
import {IWordResponse} from '../words/wordsSlice.types';

export interface IAuthState {
  isAuthenticated?: boolean;
  isLoading: boolean;
  user: IUser | null;
  userData: IUserData | null;
  error: string | null;
}

export interface IUser {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string | null;
}

export type IUserData = {
  wordsResponses: IWordResponse[];
  phraseResponses: IPhraseResponse[];
  lessonsCompleted: LessonsCompleted[];
  topicsCompleted: TopicsCompleted[];
};

export type LessonsCompleted = {
  lessonId: string;
  date: string;
};

export type TopicsCompleted = {
  topicId: string;
  date: string;
};
