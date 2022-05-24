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
  phraseId: string;
  date: string;
  response: 'know' | 'dontKnow';
}
