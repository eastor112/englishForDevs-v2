import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LessonInfo = () => {
  return (
    <View style={styles.lessonContainer}>
      <View style={styles.infoLesson}>
        <Text style={styles.numberLesson}>{'>_ Lesson 1'}</Text>
        <View style={styles.titleSection}>
          <Icon name="github" size={30} color="#00c2cc" />
          <Text style={styles.titleLesson}>Git and Github</Text>
        </View>
        <Text>Practice talking about repositories and collaborative work</Text>
      </View>
      <View style={styles.progress}>
        <CircularProgress
          value={1}
          maxValue={5}
          radius={50}
          duration={2000}
          progressValueColor={'#00c2cc'}
          title={'Topics'}
          titleColor={'black'}
          titleStyle={styles.progressTitle}
          valueSuffix={'/5'}
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
