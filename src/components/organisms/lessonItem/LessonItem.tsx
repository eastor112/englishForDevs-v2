import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import storage from '@react-native-firebase/storage';
import {ILesson} from '../../../screens/lessons/types';

interface Props {
  lesson: ILesson;
  last: boolean;
  navigate: (screenName: string, {}) => void;
}

const LessonItem = ({navigate, lesson, last}: Props) => {
  const [img, setImg] = useState<string>('');

  useEffect(() => {
    storage()
      .ref(lesson.image)
      .getDownloadURL()
      .then(url => {
        setImg(url);
      });
  }, [lesson.image]);

  return (
    <>
      <View style={styles.lessonNameContainer}>
        <Text>Lesson {lesson.lessonNumber}:</Text>
        <Text style={styles.lessonName}>{lesson.name}</Text>
      </View>

      <View style={styles.containerLesson}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigate('Topics', {lessonId: lesson.id})}>
          <View style={styles.subContainerLesson}>
            {img !== '' && (
              <Image
                style={styles.logoImage}
                source={{
                  uri: img,
                }}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
      {last ? (
        <View style={styles.whiteSpace} />
      ) : (
        <View style={styles.lessonSeparator}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      )}
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
  touchable: {
    width: 180,
    height: 180,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLesson: {
    width: 180,
    height: 180,
    backgroundColor: 'gray',
    borderRadius: 90,
    alignSelf: 'center',
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
    marginTop: 6,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
    margin: 6,
  },
  whiteSpace: {
    height: 30,
  },
});

export default LessonItem;
