import {Text} from 'react-native-paper';
import React from 'react';
import LearnedWordsChart from '../../components/organisms/learnedWordsChart/LearnedWordsChart';
import AppBar from '../../components/organisms/appBar/AppBar';
import styled from 'styled-components/native';
import StatisticsNumbers from '../../components/organisms/statisticsNumbers/StatisticsNumbers';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import {formatDisplayUserName} from '../../utils/displayUserName';
import {DrawerScreenProps} from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> {}

const StatsScreen = ({navigation}: Props) => {
  const {user, userData} = useSelector((state: RootState) => state.auth);

  return (
    <>
      <AppBar navigation={navigation} title="Stats" />
      <ViewContainer>
        <GreetText>Hello {formatDisplayUserName(user?.displayName)}!</GreetText>
        <InfoText>Here you can check your progress. Remember:</InfoText>

        <ViewMotivationalPhrase>
          <PhraseText>
            "Discipline will sooner or later defeat intelligence."
          </PhraseText>
          <AuthorText>- Yokoi Kenji</AuthorText>
        </ViewMotivationalPhrase>

        <StatisticsNumbers />
        {userData && <LearnedWordsChart userData={userData} />}
      </ViewContainer>
    </>
  );
};

export default StatsScreen;

const ViewContainer = styled.ScrollView`
  flex: 1;
  padding: 10px 20px;
`;

const GreetText = styled(Text)`
  font-size: 24px;
  margin-top: 10px;
`;

const InfoText = styled(Text)`
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const ViewMotivationalPhrase = styled.View`
  background-color: #00c2cc33;
  padding: 15px 15px;
  border: 1px solid #00c2cc44;
  margin-bottom: 15px;
`;

const PhraseText = styled(Text)`
  font-size: 14px;
  text-align: center;
`;

const AuthorText = styled(Text)`
  font-size: 12px;
  font-weight: 300;
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
`;
