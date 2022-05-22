import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export interface ITopic {
  id: string;
  topicNumber: number;
  title: string;
  duration: number;
  difficulty: string;
  image: string;
  words: FirebaseFirestoreTypes.DocumentReference[];
  phrases: FirebaseFirestoreTypes.DocumentReference[];
  status: string;
  publish: boolean;
}
