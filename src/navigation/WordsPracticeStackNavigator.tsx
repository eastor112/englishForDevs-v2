import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WordsScreen from '../screens/words/WordsScreen';

const Stack = createNativeStackNavigator();

const WordsPracticeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WordsPractice" component={WordsScreen} />
    </Stack.Navigator>
  );
};

export default WordsPracticeStackNavigator;
