import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

const TopicsScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>LessonsScreen</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate('Practice');
        }}>
        Practice
      </Button>
    </View>
  );
};

export default TopicsScreen;
