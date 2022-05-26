import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';
import AppBar from '../../components/organisms/appBar/AppBar';
import LessonInfo from '../../components/organisms/lessonInfo/LessonInfo';
import TopicCard from '../../components/organisms/topicCard/TopicCard';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../redux/store';
import {fetchAllTopics} from '../../redux/slices/topics/topicsSlice';
import {resetWordsState} from '../../redux/slices/words/wordsSlice';
import {useIsFocused} from '@react-navigation/native';
import {resetPhrasesState} from '../../redux/slices/phrases/phrasesSlice';
import {DrawerScreenProps} from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any> {}

const windowHeight = Dimensions.get('window').height;

const TopicsScreen = ({navigation}: Props) => {
  const {activeLesson} = useSelector((state: RootState) => state.lessons);
  const {topics} = useSelector((state: RootState) => state.topics);
  const {wordsResponses} = useSelector((state: RootState) => state.words);
  const {phrasesResponses} = useSelector((state: RootState) => state.phrases);
  const isFocused = useIsFocused();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (activeLesson) {
      dispatch(fetchAllTopics(activeLesson.id));
    }
  }, [dispatch, activeLesson]);

  useEffect(() => {
    if (
      isFocused &&
      (wordsResponses.length > 0 || phrasesResponses.length > 0)
    ) {
      dispatch(resetWordsState());
      dispatch(resetPhrasesState());
    }
  }, [dispatch, isFocused, wordsResponses, phrasesResponses]);

  return (
    <View>
      <AppBar navigation={navigation} title="Lessons > Topics" />
      {activeLesson && (
        <LessonInfo lesson={activeLesson} numberTopics={topics.length} />
      )}
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
