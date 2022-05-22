import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopicsScreen from '../screens/topics/TopicsScreen';
import LessonsScreen from '../screens/lessons/LessonsScreen';
import PracticeModesScreen from '../screens/practiceModes/PracticeModesScreen';

export type RootStackParamList = {
  Lessons: undefined;
  Topics: undefined;
  PracticeModes: undefined;
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
