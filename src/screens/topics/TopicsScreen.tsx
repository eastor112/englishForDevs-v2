import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Dimensions} from 'react-native';
import AppBar from '../../components/organisms/appBar/AppBar';
import LessonInfo from '../../components/organisms/lessonInfo/LessonInfo';
import TopicCard from '../../components/organisms/topicCard/TopicCard';

interface Props extends NativeStackScreenProps<any, any> {}

const windowHeight = Dimensions.get('window').height;

const TopicsScreen = ({navigation}: Props) => {
  return (
    <View>
      <AppBar />

      <LessonInfo />
      <ScrollView style={styles.scrollContainer}>
        <TopicCard navigate={navigation.navigate} />
        <TopicCard navigate={navigation.navigate} />
        <TopicCard navigate={navigation.navigate} />
        <TopicCard navigate={navigation.navigate} />
        <TopicCard navigate={navigation.navigate} />
        <View style={styles.offset} />
      </ScrollView>
    </View>
  );
};

export default TopicsScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    height: windowHeight,
  },
  offset: {
    height: 80,
  },
});
