import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import ReviewModes from '../screens/reviewModes/ReviewModes';
import StatsScreen from '../screens/stats/StatsScreen';
import LessonsStackNavigator from './LessonsStackNavigator';

const Tab = createMaterialBottomTabNavigator();

const MainBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="LessonsNav"
      activeColor="#f0edf6"
      inactiveColor="#3e2465">
      <Tab.Screen
        name="LessonsNav"
        component={LessonsStackNavigator}
        options={{title: 'Lessons', tabBarIcon: 'book'}}
      />
      <Tab.Screen
        name="Review"
        component={ReviewModes}
        options={{title: 'Review modes', tabBarIcon: 'book-clock'}}
      />
      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{title: 'User stats', tabBarIcon: 'chart-histogram'}}
      />
    </Tab.Navigator>
  );
};

export default MainBottomTabNavigator;
