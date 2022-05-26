import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export interface IPhrase {
  phrase: string;
  translation: IPhraseTranslation;
  words: FirebaseFirestoreTypes.DocumentReference[];
}

export interface IPhraseTranslation {
  spanish: string;
}

export interface IPhraseResponse {
  lessonId: string;
  topicId: string;
  phraseId: string;
  response: 'know' | 'dontKnow';
  date: string;
}
