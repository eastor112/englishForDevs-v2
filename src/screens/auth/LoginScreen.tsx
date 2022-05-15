import React from 'react';
import {Button} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

interface Props extends StackScreenProps<any, any> {}

const LoginScreen = ({navigation}: Props) => {
  return (
    <LinearGradient
      colors={['purple', 'white']}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate('MainMenu');
        }}>
        Login
      </Button>
    </LinearGradient>
  );
};

export default LoginScreen;
