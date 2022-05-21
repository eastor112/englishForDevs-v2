import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopicsScreen from '../screens/topics/TopicsScreen';
import LessonsScreen from '../screens/lessons/LessonsScreen';
import PracticeTopTabNavigator from './PracticeTopTabNavigator';
import {ILesson} from '../screens/lessons/types';

export type RootStackParamList = {
  Lessons: undefined;
  Topics: {lesson: ILesson};
  Practice: undefined;
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
      <Stack.Screen name="Practice" component={PracticeTopTabNavigator} />
    </Stack.Navigator>
  );
};

export default LessonsStackNavigator;
