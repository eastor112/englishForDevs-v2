import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, TextInput, useTheme} from 'react-native-paper';
import {
  StyledButtonLoginPaper,
  StyledLoginGradient,
  StyledTextInputPaper,
  StyledTextLoginPaper,
  StyledViewContainer,
} from '../../components/atoms';
import {
  StyledRedirectMessage,
  StyledBrandApp,
} from '../../components/molecules';
import {Formik} from 'formik';
import {IUserSignUp} from './auth.types';
import * as yup from 'yup';
import {StyleSheet} from 'react-native';
import {useAppDispatch} from '../../redux/store';
import {signUpWithEmailandPassword} from '../../redux/slices/auth/authSlice';

interface Props extends NativeStackScreenProps<any, any> {}

const loginValidationSchema = yup.object().shape({
  displayName: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const SignupScreen = ({navigation}: Props) => {
  const {colors} = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useAppDispatch();

  const handleSignUp = async (values: IUserSignUp) => {
    dispatch(signUpWithEmailandPassword(values));
  };

  return (
    <StyledLoginGradient
      colors={[colors.primary, colors.background]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <StyledBrandApp />

      <StyledViewContainer>
        <StyledTextLoginPaper>SIGN UP</StyledTextLoginPaper>

        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{displayName: '', email: '', password: ''}}
          onSubmit={values => handleSignUp(values)}>
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
              {errors.displayName && touched.displayName && (
                <Text style={styles.errorText}>{errors.displayName}</Text>
              )}
              <StyledTextInputPaper
                style={{
                  backgroundColor: colors.surface,
                }}
                mode="flat"
                label="Name"
                onChangeText={handleChange('displayName')}
                onBlur={handleBlur('displayName')}
                value={values.displayName}
                left={
                  <TextInput.Icon
                    name="account"
                    size={22}
                    color={colors.text}
                    disabled
                  />
                }
              />
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
                Sing up
              </StyledButtonLoginPaper>
            </>
          )}
        </Formik>

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

const styles = StyleSheet.create({
  errorText: {
    fontSize: 10,
    color: 'red',
  },
});
