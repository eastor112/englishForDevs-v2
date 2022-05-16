import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const LessonItem = () => {
  return (
    <>
      <View style={styles.lessonNameContainer}>
        <Text>Lesson 1:</Text>
        <Text style={styles.lessonName}>Git and GitHub</Text>
      </View>
      <View style={styles.containerLesson}>
        <View style={styles.subContainerLesson}>
          <Image
            style={styles.logoImage}
            source={{
              uri: 'https://www.muycomputer.com/wp-content/uploads/2015/03/GitHub1.jpg',
            }}
          />
        </View>
      </View>

      <View style={styles.lessonSeparator}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  lessonNameContainer: {
    alignSelf: 'center',
    marginTop: 15,
  },
  lessonName: {
    alignSelf: 'center',
    fontSize: 25,
  },
  containerLesson: {
    width: 180,
    height: 180,
    backgroundColor: 'gray',
    alignSelf: 'center',
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  subContainerLesson: {
    width: 170,
    height: 170,
    borderRadius: 90,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  logoImage: {
    width: 170,
    height: 170,
    borderRadius: 90,
    resizeMode: 'contain',
  },
  lessonSeparator: {
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
    margin: 4,
  },
});

export default LessonItem;
