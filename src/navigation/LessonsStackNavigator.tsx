import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopicsScreen from '../screens/topics/TopicsScreen';
import LessonsScreen from '../screens/lessons/LessonsScreen';
import PracticeTopTabNavigator from './PracticeTopTabNavigator';

const Stack = createNativeStackNavigator();

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
