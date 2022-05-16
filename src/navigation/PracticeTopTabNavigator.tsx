import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PhrasesScreen from '../screens/phrases/PhrasesScreen';
import WordsScreen from '../screens/words/WordsScreen';

const Tab = createMaterialTopTabNavigator();

const PracticeTopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Words" component={WordsScreen} />
      <Tab.Screen name="Phrases" component={PhrasesScreen} />
    </Tab.Navigator>
  );
};

export default PracticeTopTabNavigator;
