import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Dimensions} from 'react-native';
import AppBar from '../../components/organisms/appBar/AppBar';
import LessonInfo from '../../components/organisms/lessonInfo/LessonInfo';
import TopicCard from '../../components/organisms/topicCard/TopicCard';
import {RootStackParamList} from '../../navigation/LessonsStackNavigator';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../redux/store';
import {fetchAllTopics} from '../../redux/slices/topics/topicsSlice';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Topics'> {}

const windowHeight = Dimensions.get('window').height;

const TopicsScreen = ({navigation}: Props) => {
  const {activeLesson} = useSelector((state: RootState) => state.lessons);
  const {topics} = useSelector((state: RootState) => state.topics);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (activeLesson) {
      dispatch(fetchAllTopics(activeLesson.id));
    }
  }, [dispatch, activeLesson]);

  return (
    <View>
      <AppBar />

      <LessonInfo lesson={activeLesson} numberTopics={topics.length} />
      <ScrollView style={styles.scrollContainer}>
        {topics &&
          activeLesson &&
          topics.map(topic => (
            <TopicCard
              key={topic.id}
              topic={topic}
              navigate={navigation.navigate}
            />
          ))}
        <View style={styles.offset} />
      </ScrollView>
    </View>
  );
};

export default TopicsScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    height: windowHeight - 200,
  },
  offset: {
    height: 50,
  },
});
