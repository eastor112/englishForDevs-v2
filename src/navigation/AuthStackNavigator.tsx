import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import MainDrawerNavigator from './MainDrawerNavigator';
import SignupScreen from '../screens/auth/SignupScreen';
import {RootState, useAppDispatch} from '../redux/store';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import {setUser} from '../redux/slices/authSlice';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  const dispatch = useAppDispatch();
  const {user: userRedux} = useSelector((state: RootState) => state.auth);
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user: any) {
    if (user) {
      dispatch(
        setUser({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          photoURL: user.photoURL,
        }),
      );
    }

    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <Stack.Navigator
      initialRouteName={userRedux ? 'MainMenu' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="MainMenu" component={MainDrawerNavigator} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
