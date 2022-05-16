import {View, StyleSheet, Image} from 'react-native';
import {Text, Button} from 'react-native-paper';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  navigate: (screenName: string) => void;
}

const TopicCard = ({navigate}: Props) => {
  return (
    <View style={styles.topicContainer}>
      <View style={styles.topicImageContainer}>
        <Image
          source={{
            uri: 'https://miro.medium.com/max/650/1*zzvdRmHGGXONZpuQ2FeqsQ.png',
          }}
          style={styles.topicImage}
        />
      </View>
      <View style={styles.topicInfo}>
        <Text style={styles.numberTopic}>Topic 1:</Text>
        <Text style={styles.titleTopic}>Let's talk about git</Text>
        <Text>Duration: 15 minutes</Text>
        <Text>
          Dificult:
          <Icon name="star" size={15} color="#00BFFF" />
          <Icon name="star" size={15} color="#00BFFF" />
          <Icon name="star" size={15} color="#00BFFF" />
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
    padding: 5,
  },
  topicImage: {
    width: 100,
    height: 100,
  },
  numberTopic: {
    fontWeight: 'bold',
  },
  titleTopic: {
    fontSize: 20,
  },
  button: {
    marginTop: 10,
  },
});
