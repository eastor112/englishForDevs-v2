import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AppBar from '../../components/organisms/appBar/AppBar';
import {ScrollView} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
import LessonItem from '../../components/organisms/lessonItem/LessonItem';
import {RootStackParamList} from '../../navigation/LessonsStackNavigator';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../redux/store';
import {fetchAllLessons} from '../../redux/slices/lessons/lessonsSlice';
import {ILesson} from '../../redux/slices/lessons/lessonsSlice.types';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Lessons'> {}

const windowHeight = Dimensions.get('window').height;

const LessonsScreen = ({navigation}: Props) => {
  const {lessons} = useSelector((state: RootState) => state.lessons);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllLessons());
  }, [dispatch]);

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

        {lessons.length > 0 &&
          lessons.map((lesson: ILesson, index, arr) => {
            return (
              <LessonItem
                key={lesson.id}
                lesson={lesson}
                navigate={navigation.navigate}
                last={index === arr.length - 1}
              />
            );
          })}
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
