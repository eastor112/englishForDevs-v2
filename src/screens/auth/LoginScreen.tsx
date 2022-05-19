import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  StyledViewContainer,
  StyledTextInputPaper,
  StyledButtonLoginPaper,
  StyledTextLoginPaper,
  StyledLoginGradient,
} from '../../components/atoms';
import {Text, TextInput, useTheme} from 'react-native-paper';
import {StyledRedirectMessage} from '../../components/molecules';
import StyledGoogleButtonPaper from '../../components/molecules/StyledGoogleButtonPaper';
import StyledSeparator from '../../components/molecules/StyledSeparator';
import StyledBrandApp from '../../components/molecules/StyledBrandApp';
import {useState} from 'react';
import {Formik} from 'formik';

import auth from '@react-native-firebase/auth';
import {userLogin} from './auth.types';
import {StyleSheet} from 'react-native';
import * as yup from 'yup';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

interface Props extends NativeStackScreenProps<any, any> {}

GoogleSignin.configure({
  webClientId:
    '205392024757-86s953d4elbupalakt5ginic3elj152a.apps.googleusercontent.com',
});
async function onGoogleButtonPress() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential

  return auth().signInWithCredential(googleCredential);
}

const LoginScreen = ({navigation}: Props) => {
  const {colors} = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    auth().signOut();
  }, []);

  const handleLogin = async ({email, password}: userLogin) => {
    try {
      const user = await auth().signInWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledLoginGradient
      colors={[colors.primary, colors.background]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <StyledBrandApp />

      <StyledViewContainer>
        <StyledTextLoginPaper>LOG IN</StyledTextLoginPaper>

        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={values => handleLogin(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <StyledTextInputPaper
                style={{
                  backgroundColor: colors.surface,
                }}
                mode="flat"
                label="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                left={
                  <TextInput.Icon
                    name="email"
                    size={22}
                    color={colors.text}
                    disabled
                  />
                }
              />

              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <StyledTextInputPaper
                style={{
                  backgroundColor: colors.surface,
                }}
                mode="flat"
                label="Password"
                secureTextEntry={!showPassword}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
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
                onPress={handleSubmit}
                disabled={!isValid}>
                Log in
              </StyledButtonLoginPaper>
            </>
          )}
        </Formik>

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
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }
        />
      </StyledViewContainer>
    </StyledLoginGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  errorText: {
    fontSize: 10,
    color: 'red',
  },
});
