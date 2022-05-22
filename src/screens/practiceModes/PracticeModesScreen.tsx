import React from 'react';
import AppBar from '../../components/organisms/appBar/AppBar';
import styled from 'styled-components/native';
import {Button, Text} from 'react-native-paper';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../redux/store';
import {StyleSheet} from 'react-native';
import {setWordsRefs} from '../../redux/slices/words/wordsSlice';

interface Props extends DrawerScreenProps<any, any> {}

const PracticeModesScreen = ({navigation}: Props) => {
  const {activeTopic} = useSelector((state: RootState) => state.topics);
  const dispatch = useAppDispatch();

  const handlerWordsModeSelected = () => {
    if (activeTopic) {
      dispatch(setWordsRefs(activeTopic.words));
    }
    navigation.navigate('WordsPracticeStack');
  };

  const handlerPhrasesModeSelected = () => {
    navigation.navigate('PhrasesPracticeStack');
  };

  // useEffect(() => {
  //   const getTopic = async () => {
  //     const topicRef = firestore()
  //       .collection(`lessons/${route.params!.lessonId}/topics`)
  //       .doc(route.params!.topicId);

  //     const topicObj = await topicRef.get();

  //     const topicData = topicObj.data();

  //     if (topicData) {
  //       topicData.id = topicObj.id;

  //       setTopic(topicData as ITopic);
  //     }
  //   };

  //   getTopic();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [route.params!.lessonId, route.params!.topicId]);

  return (
    <>
      <AppBar />
      <ViewContainer>
        <TextInstruction>Select how you want practice</TextInstruction>
        <ModesContainer>
          <ViewModeContainer style={styles.modeContainer}>
            <ImageForCard
              style={styles.imageForCard}
              source={{
                uri: 'https://www.2gb.com/wp-content/uploads/sites/2/2021/09/Words-With-Kel-Richards-600x350.jpg',
              }}
            />
            <TextMode>Mode 1</TextMode>
            <TextNameMode>Words</TextNameMode>
            <TextDescriptionMode>
              You will practice individual words related to the chosen topic.
              These words appear in the sentences.
            </TextDescriptionMode>
            <Button mode="contained" onPress={handlerWordsModeSelected}>
              <Text> SELECT THIS MODE</Text>
            </Button>
          </ViewModeContainer>

          <ViewModeContainer>
            <ImageForCard
              style={styles.imageForCard}
              source={{
                uri: 'https://contenthub-static.grammarly.com/blog/wp-content/uploads/2021/04/types-of-sentences.jpeg',
              }}
            />
            <TextMode>Mode 2</TextMode>
            <TextNameMode>Phrases</TextNameMode>
            <TextDescriptionMode>
              Practice complete sentences related to the selected topic.
            </TextDescriptionMode>
            <Button mode="contained" onPress={handlerPhrasesModeSelected}>
              <Text> SELECT THIS MODE</Text>
            </Button>
          </ViewModeContainer>
        </ModesContainer>
      </ViewContainer>
    </>
  );
};

export default PracticeModesScreen;

const styles = StyleSheet.create({
  modeContainer: {
    elevation: 10,
  },
  imageForCard: {
    resizeMode: 'stretch',
  },
});

const TextInstruction = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ViewContainer = styled.View`
  flex: 1;
  padding: 15px;
`;

const ModesContainer = styled.View`
  flex: 1;
`;

const ViewModeContainer = styled.View`
  border-radius: 10px;
  margin: 10px;
  margin-bottom: 10px;
  padding: 15px 25px;
  background-color: white;
  flex: 1;
`;

const ImageForCard = styled.Image`
  width: 100%;
  height: 100px;
`;

const TextMode = styled(Text)`
  font-weight: bold;
  font-size: 12px;
`;

const TextNameMode = styled(Text)`
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const TextDescriptionMode = styled(Text)`
  font-size: 12px;
  margin-bottom: 20px;
`;
