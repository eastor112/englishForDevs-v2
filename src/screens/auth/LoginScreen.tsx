import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  StyledViewContainer,
  StyledTextInputPaper,
  StyledButtonLoginPaper,
  StyledTextLoginPaper,
  StyledLoginGradient,
} from '../../components/atoms';
import {TextInput, useTheme} from 'react-native-paper';
import {StyledRedirectMessage} from '../../components/molecules';
import StyledGoogleButtonPaper from '../../components/molecules/StyledGoogleButtonPaper';
import StyledSeparator from '../../components/molecules/StyledSeparator';
import StyledBrandApp from '../../components/molecules/StyledBrandApp';
import {useState} from 'react';

interface Props extends NativeStackScreenProps<any, any> {}

const LoginScreen = ({navigation}: Props) => {
  const {colors} = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledLoginGradient
      colors={[colors.primary, colors.background]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <StyledBrandApp />

      <StyledViewContainer>
        <StyledTextLoginPaper>LOG IN</StyledTextLoginPaper>

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
        <StyledTextInputPaper
          style={{
            backgroundColor: colors.surface,
          }}
          mode="flat"
          label="Password"
          secureTextEntry={!showPassword}
          left={
            <TextInput.Icon
              name="lock"
              size={22}
              color={colors.text}
              disabled
            />
          }
          right={
            !showPassword ? (
              <TextInput.Icon
                name="eye"
                size={22}
                color={colors.text}
                onPress={() => setShowPassword(!showPassword)}
              />
            ) : (
              <TextInput.Icon
                name="eye-off"
                size={22}
                color={colors.text}
                onPress={() => setShowPassword(!showPassword)}
              />
            )
          }
        />

        <StyledButtonLoginPaper
          mode="contained"
          dark={true}
          onPress={() => {
            navigation.navigate('MainMenu');
          }}>
          Log in
        </StyledButtonLoginPaper>
        <StyledRedirectMessage
          message="Don't have an account?"
          pageName="Signup"
          labelLink="Sign up"
          navigateFn={navigation.navigate}
        />

        <StyledSeparator />

        <StyledGoogleButtonPaper
          socialMediaName="Google"
          imageName="google.png"
        />
      </StyledViewContainer>
    </StyledLoginGradient>
  );
};

export default LoginScreen;
