import React from 'react';
import {Button, Text} from 'react-native-paper';
import {DrawerScreenProps} from '@react-navigation/drawer';
import AppBar from '../../components/organisms/appBar/AppBar';
import styled from 'styled-components/native';

const ReviewModes = ({navigation}: DrawerScreenProps<any, any>) => {
  return (
    <>
      <AppBar />
      <ViewContainer>
        <TextInstruction>Select how you want practice</TextInstruction>
        <ModesContainer>
          <ViewModeContainer>
            <TextMode>Mode 1</TextMode>
            <TextNameMode>Only priorized</TextNameMode>
            <TextDescriptionMode>
              All words and phrases that you marked in diferents topics for
              review will be shown.
            </TextDescriptionMode>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Practice')}>
              <Text> Start practice</Text>
            </Button>
          </ViewModeContainer>

          <ViewModeContainer>
            <TextMode>Mode 2</TextMode>
            <TextNameMode>Priorized and already learned</TextNameMode>
            <TextDescriptionMode>
              All words and phrases that you view in diferents topics will be
              shown.
            </TextDescriptionMode>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Practice')}>
              <Text> Start practice</Text>
            </Button>
          </ViewModeContainer>

          <ViewModeContainer>
            <TextMode>Mode 3</TextMode>
            <TextNameMode>All words and phrases</TextNameMode>
            <TextDescriptionMode>
              All words and phrases will be shown, even if you haven't done the
              lesson yet.
            </TextDescriptionMode>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Practice')}>
              <Text> Start practice</Text>
            </Button>
          </ViewModeContainer>
        </ModesContainer>
      </ViewContainer>
    </>
  );
};

export default ReviewModes;

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
  font-size: 15px;
  margin-bottom: 20px;
`;
