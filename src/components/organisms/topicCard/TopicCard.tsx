import {View, StyleSheet, Image} from 'react-native';
import {Text, Button} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {ITopic} from '../../../screens/topics/TopicsScreen';
import DifficultyStars from '../../molecules/difficultyStars/DifficultyStars';
import storage from '@react-native-firebase/storage';

interface Props {
  topic: ITopic;
  navigate: (screenName: string) => void;
}

const TopicCard = ({topic, navigate}: Props) => {
  const [img, setImg] = useState<string>('');

  useEffect(() => {
    if (topic.image) {
      storage()
        .ref(topic.image)
        .getDownloadURL()
        .then(url => {
          setImg(url);
        });
    }
  }, [topic.image]);

  return (
    <View style={styles.topicContainer}>
      <View style={styles.topicImageContainer}>
        {img !== '' && (
          <Image
            source={{
              uri: img,
            }}
            style={styles.topicImage}
          />
        )}
      </View>
      <View style={styles.topicInfo}>
        <Text style={styles.numberTopic}>Topic {topic.topicNumber}:</Text>
        <Text style={styles.titleTopic}>{topic.title}</Text>
        <Text>Duration: {topic.duration} minutes</Text>
        <Text>
          Dificult:
          <DifficultyStars difficulty={topic.difficulty} />
        </Text>

        <Button
          mode="contained"
          onPress={() => navigate('Practice')}
          style={styles.button}>
          start practice
        </Button>
      </View>
    </View>
  );
};

export default TopicCard;

const styles = StyleSheet.create({
  topicContainer: {
    marginHorizontal: 20,
    marginTop: 15,
    padding: 15,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
  },
  topicInfo: {
    flex: 2,
    justifyContent: 'center',
  },
  topicImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  topicImage: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
  numberTopic: {
    fontWeight: 'bold',
  },
  titleTopic: {
    fontSize: 16,
  },
  button: {
    marginTop: 10,
  },
});
