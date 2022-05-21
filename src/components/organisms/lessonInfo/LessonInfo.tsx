import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import CircularProgress from 'react-native-circular-progress-indicator';
import {ILesson} from '../../../screens/lessons/types';

interface Props {
  lesson: ILesson;
  numberTopics: number;
}

const LessonInfo = ({lesson, numberTopics}: Props) => {
  return (
    <View style={styles.lessonContainer}>
      <View style={styles.infoLesson}>
        <Text
          style={
            styles.numberLesson
          }>{`>_ Lesson ${lesson.lessonNumber}`}</Text>
        <View style={styles.titleSection}>
          <Text style={styles.titleLesson}>{lesson.name}</Text>
        </View>
        <Text style={styles.description}>{lesson.description}</Text>
      </View>
      <View style={styles.progress}>
        <CircularProgress
          value={0}
          maxValue={numberTopics}
          radius={50}
          duration={2000}
          progressValueColor={'#00c2cc'}
          title={'Topics'}
          titleColor={'black'}
          titleStyle={styles.progressTitle}
          valueSuffix={`/${numberTopics}`}
        />
      </View>
    </View>
  );
};

export default LessonInfo;

const styles = StyleSheet.create({
  lessonContainer: {
    height: 120,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    elevation: 15,
  },
  infoLesson: {
    backgroundColor: 'white',
    width: '70%',
    padding: 15,
  },
  titleSection: {
    flexDirection: 'row',
  },
  titleLesson: {
    fontSize: 20,
  },
  description: {
    fontSize: 12,
    marginTop: 6,
  },
  numberLesson: {
    fontWeight: 'bold',
  },
  progress: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBottom: {
    height: 300,
    backgroundColor: 'yellow',
  },
  progressTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 0,
    paddingTop: 0,
  },
});
