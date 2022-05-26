import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import InfoWordOrPhrase from '../../components/molecules/infoWordOrPhrase/InfoWordOrPhrase';
import MainWordOrPhrase from '../../components/organisms/mainWordOrPhrase/MainWordOrPhrase';
import PhrasesTranslation from '../../components/organisms/phrasesTranslation/PhrasesTranslation';
import WordByWord from '../../components/organisms/wordByWord/WordByWord';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {RootStackParamList} from '../../navigation/LessonsStackNavigator';
import {RootState, useAppDispatch} from '../../redux/store';
import {useSelector} from 'react-redux';
import {IPhrase} from '../../redux/slices/phrases/phrasesSlice.types';
import Animated, {FadeIn} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Modal, Portal, Text, Provider, Button} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import FinishModalTopic from '../../components/organisms/finishTopicModal/FinishModalTopic';
import {countKnowOrDontknowPhrases} from '../../utils/countKnowOrUnknow';
import {
  addPhraseResponse,
  nextPhraseIndex,
  prevPhraseIndex,
  setIsPhrasesReviewing,
} from '../../redux/slices/phrases/phrasesSlice';
import {customDarkTheme, customDefaultTheme} from '../../Index';
import {updateUserPhraseResponses} from '../../redux/slices/auth/authSlice';

interface Props
  extends MaterialTopTabNavigationProp<any, any>,
    NativeStackScreenProps<RootStackParamList, any> {}

const PhrasesScreen = ({navigation}: Props) => {
  const {dark} = useTheme();

  const {phrasesRefs, phraseIndex, phrasesResponses, isCompleted, isReviewing} =
    useSelector((state: RootState) => state.phrases);
  const {activeLesson} = useSelector((state: RootState) => state.lessons);
  const {activeTopic} = useSelector((state: RootState) => state.topics);

  const dispatch = useAppDispatch();

  const [data, setData] = useState<IPhrase | null>(null);
  const [phraseId, setPhraseId] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (phrasesRefs.length > 0) {
      phrasesRefs[phraseIndex].get().then(doc => {
        setData(doc.data() as IPhrase);
        setPhraseId(doc.id);
      });
    }
    return () => {};
  }, [phrasesRefs, phraseIndex]);

  useEffect(() => {
    if (isCompleted) {
      setIsModalVisible(true);
    }
  }, [isCompleted]);

  const handlePrev = () => {
    dispatch(prevPhraseIndex());
  };
  const handleNext = () => {
    dispatch(nextPhraseIndex());
  };

  const handleIKnow = () => {
    const date = new Date();
    if (phraseId) {
      dispatch(
        addPhraseResponse({
          lessonId: activeLesson!.id,
          topicId: activeTopic!.id,
          phraseId: phraseId,
          date: date.toISOString(),
          response: 'know',
        }),
      );
    }
    if (!isReviewing) {
      dispatch(nextPhraseIndex());
    }
  };

  const handleIDontKnow = () => {
    const date = new Date();
    if (phraseId) {
      dispatch(
        addPhraseResponse({
          lessonId: activeLesson!.id,
          topicId: activeTopic!.id,
          phraseId: phraseId,
          date: date.toISOString(),
          response: 'dontKnow',
        }),
      );
    }
    if (!isReviewing) {
      dispatch(nextPhraseIndex());
    }
  };

  const handleSavePhrasesResponseAndGoTopicsScreen = () => {
    dispatch(updateUserPhraseResponses(phrasesResponses));
    navigation.navigate('Topics');
  };

  return (
    <Provider theme={dark ? customDarkTheme : customDefaultTheme}>
      <Animated.View
        style={styles.screenContainer}
        entering={FadeIn.duration(1000)}>
        <View style={styles.actions}>
          {isReviewing && phraseIndex > 0 ? (
            <TouchableOpacity style={styles.buttons} onPress={handlePrev}>
              <Icon name="arrow-left-thick" color={'#00c2cc'} size={20} />
              <Text>Back</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.placeHolder} />
          )}

          <View style={styles.stepsContainer}>
            <Text style={styles.index}>{phraseIndex + 1}</Text>
            <Text style={styles.total}>/{phrasesRefs.length}</Text>
          </View>

          {isReviewing && phraseIndex < phrasesRefs.length - 1 ? (
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
              <InfoWordOrPhrase type="Phrase" lesson={activeLesson?.name} />
            )}

            <ViewTopContainer>
              {data && (
                <MainWordOrPhrase isWord={false} content={data?.phrase} />
              )}
            </ViewTopContainer>
          </View>
          <ViewScrollContainer>
            {data && <PhrasesTranslation text={data?.translation.spanish} />}

            {data && <WordByWord wordsRef={data?.words} />}
          </ViewScrollContainer>

          <ViewButtonsContainer>
            <StyledTouchableLeft
              onPress={handleIKnow}
              style={
                phrasesResponses.find(wr => wr.phraseId === phraseId)
                  ?.response === 'know' && styles.buttonSelected
              }>
              <Text>This phrase </Text>
              <Text>is known</Text>
            </StyledTouchableLeft>

            <StyledTouchableRight
              onPress={handleIDontKnow}
              style={
                phrasesResponses.find(wr => wr.phraseId === phraseId)
                  ?.response === 'dontKnow' && styles.buttonSelected
              }>
              <Text>I want to review</Text>
              <Text>this phrase</Text>
            </StyledTouchableRight>
          </ViewButtonsContainer>
        </ViewContainer>

        {isReviewing && (
          <Button
            icon="content-save-outline"
            style={styles.floatButton}
            uppercase={false}
            mode="outlined"
            onPress={handleSavePhrasesResponseAndGoTopicsScreen}>
            Finish
          </Button>
        )}

        <Portal>
          <Modal
            visible={isModalVisible}
            dismissable={false}
            contentContainerStyle={styles.modalContainer}>
            <FinishModalTopic
              isWord={false}
              navigate={navigation.navigate}
              setIsReviewing={setIsPhrasesReviewing}
              stats={countKnowOrDontknowPhrases(phrasesResponses)}
              setIsModalVisible={setIsModalVisible}
            />
          </Modal>
        </Portal>
      </Animated.View>
    </Provider>
  );
};

export default PhrasesScreen;

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
    backgroundColor: 'white',
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
  },
});

const ViewContainer = styled.View`
  margin: 0px 10px 15px;
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
