import React from 'react';
import AppBar from '../../components/organisms/appBar/AppBar';
import styled from 'styled-components/native';
import {Button, Text} from 'react-native-paper';
import {DrawerScreenProps} from '@react-navigation/drawer';

const PracticeModesScreen = ({navigation}: DrawerScreenProps<any, any>) => {
  return (
    <>
      <AppBar />
      <ViewContainer>
        <TextInstruction>Select how you want practice</TextInstruction>
        <ModesContainer>
          <ViewModeContainer>
            <ImageForCard
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
            <Button
              mode="contained"
              onPress={() => navigation.navigate('WordsPracticeStack')}>
              <Text> SELECT THIS MODE</Text>
            </Button>
          </ViewModeContainer>

          <ViewModeContainer>
            <ImageForCard
              source={{
                uri: 'https://contenthub-static.grammarly.com/blog/wp-content/uploads/2021/04/types-of-sentences.jpeg',
              }}
            />
            <TextMode>Mode 2</TextMode>
            <TextNameMode>Phrases</TextNameMode>
            <TextDescriptionMode>
              Practice complete sentences related to the selected topic.
            </TextDescriptionMode>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('PhrasesPracticeStack')}>
              <Text> SELECT THIS MODE</Text>
            </Button>
          </ViewModeContainer>
        </ModesContainer>
      </ViewContainer>
    </>
  );
};

export default PracticeModesScreen;

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
  elevation: 10;
  margin: 10px;
  margin-bottom: 10px;
  padding: 15px 25px;
  background-color: white;
  flex: 1;
`;

const ImageForCard = styled.Image`
  width: 100%;
  height: 100px;
  resize-mode: stretch;
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
