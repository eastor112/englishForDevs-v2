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
import {signOut} from '../../../redux/slices/auth/authSlice';
import {useSelector} from 'react-redux';
import {formatDisplayUserName} from '../../../utils/displayUserName';

const DrawerContent = (props: DrawerContentComponentProps) => {
  const dispatch = useAppDispatch();
  const {isAuthenticated, user} = useSelector((state: RootState) => state.auth);

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
    <DrawerContentScrollView {...props} style={styles.drawerContainer}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                user?.photoURL ||
                'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
            }}
            size={140}
          />
          <Title style={styles.title}>
            {formatDisplayUserName(user?.displayName)}
          </Title>
          <Caption style={styles.caption}>{user?.email}</Caption>
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
  drawerContainer: {
    borderRightWidth: 1,
    borderRightColor: '#333',
  },
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
