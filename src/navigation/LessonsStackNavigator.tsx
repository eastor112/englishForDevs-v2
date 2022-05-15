import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopicsScreen from '../screens/topics/TopicsScreen';
import PracticeScreen from '../screens/practice/PracticeScreen';
import LessonsScreen from '../screens/lessons/LessonsScreen';

const Stack = createNativeStackNavigator();

const LessonsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lessons" component={LessonsScreen} />
      <Stack.Screen name="Topics" component={TopicsScreen} />
      <Stack.Screen name="Practice" component={PracticeScreen} />
    </Stack.Navigator>
  );
};

export default LessonsStackNavigator;
