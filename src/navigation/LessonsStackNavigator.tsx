import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopicsScreen from '../screens/topics/TopicsScreen';
import LessonsScreen from '../screens/lessons/LessonsScreen';
import {ILesson} from '../screens/lessons/types';
import PracticeModesScreen from '../screens/practiceModes/PracticeModesScreen';

export type RootStackParamList = {
  Lessons: undefined;
  Topics: {lesson: ILesson};
  PracticeModes: {lessonId: string; topicId: string};
  WordsPractice: undefined;
  PhrasesPractice: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const LessonsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Lessons" component={LessonsScreen} />
      <Stack.Screen name="Topics" component={TopicsScreen} />
      <Stack.Screen name="PracticeModes" component={PracticeModesScreen} />
    </Stack.Navigator>
  );
};

export default LessonsStackNavigator;
