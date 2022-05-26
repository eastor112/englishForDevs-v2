import {StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import React from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';

const StatisticsNumbers = () => {
  const {dark} = useTheme();

  const {userData} = useSelector((state: RootState) => state.auth);

  userData;

  return (
    <View>
      <Title>These stats are the result of your effort:</Title>

      <ViewStatsContainer>
        <ViewStatContainer dark={dark} style={styles.viewStatContainer}>
          <NumberStat>{userData?.wordsResponses.length}</NumberStat>
          <SpanText>Practiced words</SpanText>
        </ViewStatContainer>

        <ViewStatContainer dark={dark} style={styles.viewStatContainer}>
          <NumberStat>
            {
              userData?.wordsResponses.filter(wr => wr.response === 'know')
                .length
            }
          </NumberStat>
          <SpanText>Learned words</SpanText>
        </ViewStatContainer>

        <ViewStatContainer dark={dark} style={styles.viewStatContainer}>
          <NumberStat>{userData?.phraseResponses.length}</NumberStat>
          <SpanText>Practiced phrases</SpanText>
        </ViewStatContainer>

        <ViewStatContainer dark={dark} style={styles.viewStatContainer}>
          <NumberStat>
            {
              userData?.phraseResponses.filter(pr => pr.response === 'know')
                .length
            }
          </NumberStat>
          <SpanText>Learned phrases</SpanText>
        </ViewStatContainer>
      </ViewStatsContainer>
    </View>
  );
};

export default StatisticsNumbers;

const styles = StyleSheet.create({
  viewStatContainer: {
    elevation: 5,
  },
});

const Title = styled(Text)`
  font-weight: bold;
  margin-bottom: 5px;
`;

const ViewStatsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const ViewStatContainer = styled.View<{dark: boolean}>`
  margin: 5px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  width: 46%;
  background-color: ${({dark}) => (dark ? '#66666666' : '#eee')};
  border-radius: 10px;
  padding: 10px;
`;

const SpanText = styled(Text)`
  font-size: 14px;
  margin-right: 10px;
`;

const NumberStat = styled(Text)`
  font-size: 24px;
`;
