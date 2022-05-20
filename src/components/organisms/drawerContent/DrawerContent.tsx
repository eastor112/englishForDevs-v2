import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {
  // useTheme,
  Avatar,
  Title,
  Caption,
  Drawer,
  Button,
} from 'react-native-paper';
import {RootState, useAppDispatch} from '../../../redux/store';
import {signOut} from '../../../redux/slices/authSlice';
import {useSelector} from 'react-redux';

const DrawerContent = (props: DrawerContentComponentProps) => {
  const dispatch = useAppDispatch();
  const {isAuthenticated} = useSelector((state: RootState) => state.auth);

  const logoutApp = () => {
    dispatch(signOut());
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      props.navigation.navigate('Login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQG7ZaXWzjFrqQ/profile-displayphoto-shrink_400_400/0/1650819123471?e=1658361600&v=beta&t=3d4p0yVTnEMjz6Vyw6s0dw0IsfMojlqfVJ5C6Kljis4',
            }}
            size={140}
          />
          <Title style={styles.title}>Emerson Asto</Title>
          <Caption style={styles.caption}>emerar.mct@gmail.com</Caption>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItemList {...props} />
        </Drawer.Section>
        <Button
          icon="logout"
          // compact
          uppercase={false}
          mode="outlined"
          style={styles.logoutButton}
          onPress={logoutApp}>
          Logout
        </Button>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingTop: 30,
    paddingLeft: 20,
    alignSelf: 'center',
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  drawerSection: {
    marginTop: 15,
  },
  logoutButton: {
    width: 180,
    marginHorizontal: 20,
    marginTop: 30,
    alignSelf: 'center',
  },
});
