export interface IAuthState {
  isAuthenticated?: boolean;
  isLoading?: boolean;
  user?: IUser | null;
  userData?: IUserData | null;
  error?: string | null;
}

export interface IUser {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string | null;
}

export type IUserData = {
  wordsResponses?: WordResponse[];
  phraseResponses?: PhraseResponse[];
  lessonsCompleted?: LessonsCompleted[];
  topicsCompleted?: TopicsCompleted[];
};

export type WordResponse = {
  topicId: string;
  lessonId: string;
  wordId: string;
  response: 'know' | 'dontKnow' | 'notAttempted';
  date: string;
};

export type PhraseResponse = {
  topicId: string;
  lessonId: string;
  phraseId: string;
  response: string;
  date: string;
};

export type LessonsCompleted = {
  lessonId: string;
  date: string;
};

export type TopicsCompleted = {
  topicId: string;
  date: string;
};
