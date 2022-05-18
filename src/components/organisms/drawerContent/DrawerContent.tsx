import React from 'react';
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
} from 'react-native-paper';

const DrawerContent = (props: DrawerContentComponentProps) => {
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
});
