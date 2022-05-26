import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Appbar, Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  title: string;
}

const AppBar = ({title}: Props) => {
  const {colors} = useTheme();

  return (
    <Appbar>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => {}} />
      </Appbar.Header>
      <View style={styles.logocontainer}>
        <Icon name="lightbulb-on-outline" size={30} color={colors.text} />
        <View>
          <Text style={styles.title}>{'${eFD}'}</Text>
          <View style={styles.linksContainer}>
            <Text style={styles.links}>{title}</Text>
          </View>
        </View>
      </View>
    </Appbar>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },

  logocontainer: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  linksContainer: {
    flexDirection: 'row',
  },
  links: {
    fontSize: 12,
    marginLeft: 5,
  },
});
