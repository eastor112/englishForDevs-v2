import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import styled from 'styled-components/native';
import InfoWordOrPhrase from '../../components/molecules/infoWordOrPhrase/InfoWordOrPhrase';
import Definitions from '../../components/organisms/definitions/Definitions';
import MainWordOrPhrase from '../../components/organisms/mainWordOrPhrase/MainWordOrPhrase';
import WordsTranslation from '../../components/organisms/wordsTranslation/WordsTranslation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/LessonsStackNavigator';

interface Props
  extends MaterialTopTabNavigationProp<any, any>,
    NativeStackScreenProps<RootStackParamList, any> {}

const WordsScreen = ({}: Props) => {
  return (
    <ViewContainer style={styles.viewContainer}>
      <View>
        <InfoWordOrPhrase />

        <ViewTopContainer>
          <MainWordOrPhrase
            isWord={true}
            content="Commit"
            pronuntiation="kəˈmit"
          />

          <ViewScrollContainer>
            <WordsTranslation />
            <Definitions />
          </ViewScrollContainer>
        </ViewTopContainer>
      </View>

      <ViewButtonsContainer>
        <StyledTouchableLeft>
          <Text>I already know</Text>
          <Text>this word</Text>
        </StyledTouchableLeft>

        <StyledTouchableRight>
          <Text>I want to review</Text>
          <Text>this word</Text>
        </StyledTouchableRight>
      </ViewButtonsContainer>
    </ViewContainer>
  );
};

export default WordsScreen;

const styles = StyleSheet.create({
  viewContainer: {
    borderLeftWidth: 1,
    borderRadius: 10,
    borderRightWidth: 1,
    borderColor: 'gray',
  },
});

const ViewContainer = styled.View`
  margin: 10px 15px;
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
