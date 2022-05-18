import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import ReviewModes from '../screens/reviewModes/ReviewModes';
import StatsScreen from '../screens/stats/StatsScreen';
import LessonsStackNavigator from './LessonsStackNavigator';

const Tab = createMaterialBottomTabNavigator();

const MainBottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="LessonsNav" component={LessonsStackNavigator} />
      <Tab.Screen name="Review" component={ReviewModes} />
      <Tab.Screen name="Stats" component={StatsScreen} />
    </Tab.Navigator>
  );
};

export default MainBottomTabNavigator;
