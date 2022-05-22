import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Dimensions} from 'react-native';
import AppBar from '../../components/organisms/appBar/AppBar';
import LessonInfo from '../../components/organisms/lessonInfo/LessonInfo';
import TopicCard from '../../components/organisms/topicCard/TopicCard';
import {RootStackParamList} from '../../navigation/LessonsStackNavigator';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Topics'> {}

const windowHeight = Dimensions.get('window').height;

export interface ITopic {
  id: string;
  topicNumber: number;
  title: string;
  duration: number;
  difficulty: string;
  image: string;
  words: FirebaseFirestoreTypes.DocumentReference[];
  phrases: FirebaseFirestoreTypes.DocumentReference[];
  status: string;
  publish: boolean;
}

const TopicsScreen = ({navigation, route}: Props) => {
  const [topics, setTopics] = useState<ITopic[]>([]);

  const {lesson} = route.params;

  useEffect(() => {
    const getLessonTopics = async () => {
      const topicsCollectionRef = firestore()
        .collection(`lessons/${lesson.id}/topics`)
        .orderBy('topicNumber', 'asc');

      const topicsArray = await topicsCollectionRef.get();

      const topicsArray2 = topicsArray.docs.map(doc => {
        const topic = doc.data();
        topic.id = doc.id;
        return topic as ITopic;
      });

      setTopics(topicsArray2);
    };

    getLessonTopics();
  }, [lesson.id]);

  return (
    <View>
      <AppBar />

      <LessonInfo lesson={lesson} numberTopics={topics.length} />
      <ScrollView style={styles.scrollContainer}>
        {topics &&
          topics.map(topic => (
            <TopicCard
              key={topic.id}
              lessonId={lesson.id}
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
