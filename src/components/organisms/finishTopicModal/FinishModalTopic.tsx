import {StyleSheet, View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppDispatch, RootState} from '../../../redux/store';
import {ActionCreatorWithPayload} from '@reduxjs/toolkit';
import {
  updateUserPhraseResponses,
  updateUserWordsResponses,
} from '../../../redux/slices/auth/authSlice';
import {useSelector} from 'react-redux';

interface Props {
  isWord: boolean;
  navigate: any;
  setIsModalVisible: (bool: boolean) => void;
  setIsReviewing: ActionCreatorWithPayload<boolean, string>;
  stats: {
    know: number;
    dontKnow: number;
    knowPercent: number;
    dontKnowPercent: number;
  };
}

const FinishModalTopic = ({
  isWord,
  stats,
  setIsModalVisible,
  setIsReviewing,
  navigate,
}: Props) => {
  const dispatch = useAppDispatch();
  const {wordsResponses} = useSelector((state: RootState) => state.words);
  const {phrasesResponses} = useSelector((state: RootState) => state.phrases);

  const handleGoTopics = () => {
    if (isWord) {
      dispatch(updateUserWordsResponses(wordsResponses));
    } else {
      dispatch(updateUserPhraseResponses(phrasesResponses));
    }
    setIsModalVisible(false);
    navigate('Topics');
  };

  const handleSetReview = () => {
    dispatch(setIsReviewing(true));
    setIsModalVisible(false);
  };

  return (
    <View>
      <View style={styles.congrats}>
        <Icon name="star" size={10} color="#f7f722" />
        <Icon name="star" size={16} color="#f7f722" />
        <Text style={styles.title}>CONGRATULATIONS!</Text>
        <Icon name="star" size={16} color="#f7f722" />
        <Icon name="star" size={10} color="#f7f722" />
      </View>

      <View style={styles.descriptionContainer}>
        <Text>You finished this lesson. This is the report:</Text>
        <View style={styles.stats}>
          <Text>
            {isWord ? '- Known words:' : '- Known phrases'} {'      '}
            {stats.know} ({stats.knowPercent.toFixed(2)}
            %)
          </Text>
          <Text>
            {isWord ? '- Unknown words:' : '- Unknown phrases:'}
            {'  '}
            {stats.dontKnow} ({stats.dontKnowPercent.toFixed(2)}
            %)
          </Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          style={styles.buttons}
          mode="contained"
          uppercase={false}
          onPress={handleSetReview}>
          Stay here and review
        </Button>
        <Button
          style={styles.buttons}
          mode="contained"
          uppercase={false}
          onPress={handleGoTopics}>
          Go to topics
        </Button>
      </View>
    </View>
  );
};

export default FinishModalTopic;

const styles = StyleSheet.create({
  congrats: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  descriptionContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    marginHorizontal: 6,
  },
  stats: {
    marginTop: 10,
    marginLeft: 10,
  },
  buttonsContainer: {
    marginTop: 20,
  },
  buttons: {
    marginVertical: 4,
  },
});
