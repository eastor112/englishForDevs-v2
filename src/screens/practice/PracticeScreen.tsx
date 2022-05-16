import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, Text, useTheme} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props extends NativeStackScreenProps<any, any> {}

const PracticeScreen = ({}: Props) => {
  const {colors} = useTheme();

  return (
    <View>
      <Appbar>
        <Appbar.Header>
          <Appbar.Action icon="menu" onPress={() => {}} />
        </Appbar.Header>
        <View style={styles.logocontainer}>
          <Icon
            name="lightbulb-on-outline"
            size={30}
            color={colors.text}
            style={{}}
          />
          <View>
            <Text style={styles.title}>{'${eFD}'}</Text>
            <View style={styles.linksContainer}>
              <Text style={styles.links}>{'Lessons >'}</Text>
              <Text style={styles.links}>{'Topics >'}</Text>
              <Text style={styles.links}>{'Practice'}</Text>
            </View>
          </View>
        </View>
      </Appbar>
    </View>
  );
};

export default PracticeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },

  links: {
    fontSize: 12,
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
});
