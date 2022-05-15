import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

const LessonsScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>LessonsScreen</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate('Topics');
        }}>
        Topics
      </Button>
    </View>
  );
};

export default LessonsScreen;
