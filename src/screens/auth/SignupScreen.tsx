import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TextInput, useTheme} from 'react-native-paper';
import {
  StyledButtonLoginPaper,
  StyledLoginGradient,
  StyledTextInputPaper,
  StyledTextLoginPaper,
  StyledViewContainer,
} from '../../components/atoms';
import {StyledRedirectMessage} from '../../components/molecules';
import StyledBrandApp from '../../components/molecules/StyledBrandApp';

interface Props extends NativeStackScreenProps<any, any> {}

const SignupScreen = ({navigation}: Props) => {
  const {colors} = useTheme();

  return (
    <StyledLoginGradient
      colors={[colors.primary, colors.background]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <StyledBrandApp />

      <StyledViewContainer>
        <StyledTextLoginPaper>SIGN UP</StyledTextLoginPaper>

        <StyledTextInputPaper
          style={{
            backgroundColor: colors.surface,
          }}
          mode="flat"
          label="Email"
          left={
            <TextInput.Icon
              name="email"
              size={22}
              color={colors.text}
              disabled
            />
          }
        />
        <TextInput
          style={{
            backgroundColor: colors.surface,
          }}
          mode="flat"
          label="Password"
          secureTextEntry
          left={
            <TextInput.Icon
              name="lock"
              size={22}
              color={colors.text}
              disabled
            />
          }
          right={<TextInput.Icon name="eye" size={22} color={colors.text} />}
        />

        <StyledButtonLoginPaper
          mode="contained"
          dark={true}
          onPress={() => {
            navigation.navigate('MainMenu');
          }}>
          Sign up
        </StyledButtonLoginPaper>
        <StyledRedirectMessage
          message="Already have an account?"
          pageName="Login"
          labelLink="Log in"
          navigateFn={navigation.navigate}
        />
      </StyledViewContainer>
    </StyledLoginGradient>
  );
};

export default SignupScreen;
