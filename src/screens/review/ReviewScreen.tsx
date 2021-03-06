/* eslint-disable @typescript-eslint/no-unused-vars */
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Modal, Portal, Text, Provider, Button} from 'react-native-paper';
import styled from 'styled-components/native';
import InfoWordOrPhrase from '../../components/molecules/infoWordOrPhrase/InfoWordOrPhrase';
import Definitions from '../../components/organisms/definitions/Definitions';
import MainWordOrPhrase from '../../components/organisms/mainWordOrPhrase/MainWordOrPhrase';
import WordsTranslation from '../../components/organisms/wordsTranslation/WordsTranslation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/LessonsStackNavigator';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../redux/store';
import {
  IWord,
  ITranslation,
  IDefinition,
} from '../../redux/slices/words/wordsSlice.types';
import {arrayObjectsOrder} from '../../utils/orderByOrderField';
import {setIsReviewing} from '../../redux/slices/words/wordsSlice';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FinishModalTopic from '../../components/organisms/finishTopicModal/FinishModalTopic';
import {countKnowOrDontknow} from '../../utils/countKnowOrUnknow';
import Animated, {FadeIn} from 'react-native-reanimated';
import {useTheme} from '@react-navigation/native';
import {customDarkTheme, customDefaultTheme} from '../../Index';

interface Props
  extends MaterialTopTabNavigationProp<any, any>,
    NativeStackScreenProps<RootStackParamList, any> {}

const ReviewScreen = ({navigation}: Props) => {
  const {dark} = useTheme();

  const {
    phrases,
    words,
    isReviewing,
    reviewIndex: index,
    wordsResponses,
  } = useSelector((state: RootState) => state.review);
  const {activeLesson} = useSelector((state: RootState) => state.lessons);
  const {activeTopic} = useSelector((state: RootState) => state.topics);

  const dispatch = useAppDispatch();

  const [data, setData] = useState<IWord | null>(null);
  const [wordId, setWordId] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setData(words[index]);
    return () => {};
  }, [index, phrases, words]);

  const handlePrev = () => {
    // dispatch(prevIndex());
  };

  const handleNext = () => {
    // dispatch(nextIndex());
  };

  const handleIKnow = () => {
    // const date = new Date();
    // if (wordId) {
    //   dispatch(
    //     addWordResponse({
    //       topicId: activeLesson!.id,
    //       lessonId: activeTopic!.id,
    //       wordId: wordId,
    //       date: date.toISOString(),
    //       response: 'know',
    //     }),
    //   );
    // }
    // if (!isReviewing) {
    //   dispatch(nextIndex());
    // }
  };

  const handleIDontKnow = () => {
    // const date = new Date();
    // if (wordId) {
    //   dispatch(
    //     addWordResponse({
    //       topicId: activeLesson!.id,
    //       lessonId: activeTopic!.id,
    //       wordId: wordId,
    //       date: date.toISOString(),
    //       response: 'dontKnow',
    //     }),
    //   );
    // }
    // if (!isReviewing) {
    //   dispatch(nextIndex());
    // }
  };

  return (
    <Provider theme={dark ? customDarkTheme : customDefaultTheme}>
      <Animated.View
        style={styles.screenContainer}
        entering={FadeIn.duration(1000)}>
        <View style={styles.actions}>
          {isReviewing && index > 0 ? (
            <TouchableOpacity style={styles.buttons} onPress={handlePrev}>
              <Icon name="arrow-left-thick" color={'#00c2cc'} size={20} />
              <Text>Back</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.placeHolder} />
          )}

          <View style={styles.stepsContainer}>
            <Text style={styles.index}>{index + 1}</Text>
            <Text style={styles.total}>/{words.length}</Text>
          </View>

          {isReviewing && index < words.length - 1 ? (
            <TouchableOpacity style={styles.buttons} onPress={handleNext}>
              <Text>Next</Text>
              <Icon name="arrow-right-thick" color={'#00c2cc'} size={20} />
            </TouchableOpacity>
          ) : (
            <View style={styles.placeHolder} />
          )}
        </View>

        <ViewContainer style={styles.viewContainer}>
          <View>
            {activeLesson && (
              <InfoWordOrPhrase type={'word'} lesson={activeLesson?.name} />
            )}

            <ViewTopContainer>
              {data && (
                <MainWordOrPhrase
                  isWord={true}
                  content={data.word}
                  pronuntiation={data.pronuntiation}
                />
              )}
            </ViewTopContainer>
          </View>
          <ViewScrollContainer>
            {data && (
              <>
                <WordsTranslation
                  data={arrayObjectsOrder(data.translations) as ITranslation[]}
                />
              </>
            )}
            {data &&
              data.definitions.map(definition => (
                <Definitions
                  key={definition.order}
                  data={definition as IDefinition}
                />
              ))}
          </ViewScrollContainer>

          <ViewButtonsContainer>
            <StyledTouchableLeft
              onPress={handleIKnow}
              style={
                wordsResponses.find(wr => wr.wordId === wordId)?.response ===
                  'know' && styles.buttonSelected
              }>
              <Text>I already know</Text>
              <Text>this word</Text>
            </StyledTouchableLeft>

            <StyledTouchableRight
              onPress={handleIDontKnow}
              style={
                wordsResponses.find(wr => wr.wordId === wordId)?.response ===
                  'dontKnow' && styles.buttonSelected
              }>
              <Text>I want to review</Text>
              <Text>this word</Text>
            </StyledTouchableRight>
          </ViewButtonsContainer>
        </ViewContainer>

        {isReviewing && (
          <Button
            icon="content-save-outline"
            style={styles.floatButton}
            uppercase={false}
            mode="outlined"
            onPress={() => {}}>
            Finish
          </Button>
        )}

        <Portal>
          <Modal
            visible={isModalVisible}
            dismissable={false}
            contentContainerStyle={
              dark ? styles.modalContainerDark : styles.modalContainer
            }>
            <FinishModalTopic
              isWord={true}
              navigate={navigation.navigate}
              stats={countKnowOrDontknow(wordsResponses)}
              setIsReviewing={setIsReviewing}
              setIsModalVisible={setIsModalVisible}
            />
          </Modal>
        </Portal>
      </Animated.View>
    </Provider>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  actions: {
    marginVertical: 2,
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  buttons: {
    flexDirection: 'row',
    width: 60,
    activeOpacity: 0.9,
  },
  stepsContainer: {
    width: 36,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00c2cc',
  },
  index: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  placeHolder: {
    width: 60,
  },
  viewContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
  },
  buttonSelected: {
    backgroundColor: '#00c2cc33',
  },
  floatButton: {
    position: 'absolute',
    top: 48,
    right: 15,
    width: 120,
    padding: 2,
    borderRadius: 0,
    borderTopRightRadius: 10,
    backgroundColor: '#00c2cc33',
  },
  modalContainer: {
    backgroundColor: '#eee',
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  modalContainerDark: {
    backgroundColor: '#444444',
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
  },
});

const ViewContainer = styled.View`
  margin: 0px 15px 10px;
  flex: 1;
  justify-content: space-between;
  border-radius: 10px;
`;

const ViewScrollContainer = styled.ScrollView`
  width: 100%;
  height: 400px;
`;

const ViewTopContainer = styled.View`
  padding: 15px;
`;

const ViewButtonsContainer = styled.View`
  flex-direction: row;
`;

const StyledTouchableRight = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 10px;
  padding: 5px 0px;
  border: 1px solid #ddd;
`;

const StyledTouchableLeft = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 10px;
  padding: 5px 0px;
  border: 1px solid #ddd;
`;
