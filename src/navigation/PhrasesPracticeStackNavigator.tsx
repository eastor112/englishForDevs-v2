import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PhrasesScreen from '../screens/phrases/PhrasesScreen';

const Stack = createNativeStackNavigator();

const PhrasesPracticeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="PhrasesPractice" component={PhrasesScreen} />
    </Stack.Navigator>
  );
};

export default PhrasesPracticeStackNavigator;
