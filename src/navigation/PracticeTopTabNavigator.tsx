import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PhrasesScreen from '../screens/phrases/PhrasesScreen';
import WordsScreen from '../screens/words/WordsScreen';
import {RootStackParamList} from './LessonsStackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const Tab = createMaterialTopTabNavigator();

interface Props extends NativeStackScreenProps<RootStackParamList, any> {}

const PracticeTopTabNavigator = ({}: Props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Words" component={WordsScreen} />
      <Tab.Screen name="Phrases" component={PhrasesScreen} />
    </Tab.Navigator>
  );
};

export default PracticeTopTabNavigator;
