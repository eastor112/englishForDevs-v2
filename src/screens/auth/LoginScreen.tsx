import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, TextInput, useTheme, Portal, Modal} from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup';
import {IUserLogin} from './auth.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  StyledRedirectMessage,
  StyledGoogleButtonPaper,
  StyledSeparator,
  StyledBrandApp,
} from '../../components/molecules';
import {
  StyledViewContainer,
  StyledTextInputPaper,
  StyledButtonLoginPaper,
  StyledTextLoginPaper,
  StyledLoginGradient,
} from '../../components/atoms';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../redux/store';
import {
  loginWithEmailandPassword,
  loginWithGoogle,
} from '../../redux/slices/authSlice';
import {clearError} from '../../redux/slices/authSlice';
import AuthErrorModal from '../../components/organisms/authErrorModal/AuthErrorModal';

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

const LoginScreen = ({navigation}: Props) => {
  const {colors} = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const dispatch = useAppDispatch();
  const {error: errorRedux} = useSelector((state: RootState) => state.auth);

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    dispatch(clearError());
    setShowModal(false);
  };

  useEffect(() => {
    if (errorRedux) {
      openModal();
    }
  }, [errorRedux, dispatch]);

  const handleLogin = async (values: IUserLogin) => {
    dispatch(loginWithEmailandPassword(values));
  };

  const handleGoogleLogin = async () => {
    dispatch(loginWithGoogle());
  };

  return (
    <StyledLoginGradient
      colors={[colors.primary, colors.background]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <StyledBrandApp />

      <StyledViewContainer>
        <StyledTextLoginPaper>LOG IN</StyledTextLoginPaper>

        <Portal>
          <Modal
            visible={showModal}
            onDismiss={closeModal}
            contentContainerStyle={styles.containerStyle}>
            <AuthErrorModal error={errorRedux as string} />
          </Modal>
        </Portal>

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
          onPress={handleGoogleLogin}
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
  containerStyle: {
    backgroundColor: 'white',
    padding: 15,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
});
