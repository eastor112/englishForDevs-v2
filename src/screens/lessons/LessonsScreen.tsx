import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AppBar from '../../components/organisms/appBar/AppBar';
import {ScrollView} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
import LessonItem from '../../components/organisms/lessonItem/LessonItem';

interface Props extends NativeStackScreenProps<any, any> {}

const windowHeight = Dimensions.get('window').height;

const LessonsScreen = ({navigation}: Props) => {
  return (
    <View style={styles.scrollContainer}>
      <AppBar />

      <ScrollView style={styles.mainContainer}>
        <View style={styles.containerTop}>
          <Image
            style={styles.image}
            source={require('../../assets/images/objetives.jpg')}
          />
        </View>

        <LessonItem navigate={navigation.navigate} />

        <LessonItem navigate={navigation.navigate} />
      </ScrollView>
    </View>
  );
};

export default LessonsScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    height: windowHeight,
    paddingBottom: 50,
  },
  mainContainer: {},
  containerTop: {
    height: 200,
  },
  image: {
    width: '99%',
    height: '99%',
  },
  containerBottom: {
    height: 300,
  },
});
