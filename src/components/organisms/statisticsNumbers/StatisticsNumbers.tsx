import {View} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';
import styled from 'styled-components/native';

const StatisticsNumbers = () => {
  return (
    <View>
      <Title>These stats are the result of your effort:</Title>

      <ViewStatsContainer>
        <ViewStatContainer>
          <NumberStat>475</NumberStat>
          <SpanText>Practiced words</SpanText>
        </ViewStatContainer>

        <ViewStatContainer>
          <NumberStat>320</NumberStat>
          <SpanText>New learned words</SpanText>
        </ViewStatContainer>

        <ViewStatContainer>
          <NumberStat>120</NumberStat>
          <SpanText>Practiced phrases</SpanText>
        </ViewStatContainer>

        <ViewStatContainer>
          <NumberStat>15 w/d</NumberStat>
          <SpanText>Learning Rate</SpanText>
        </ViewStatContainer>
      </ViewStatsContainer>
    </View>
  );
};

export default StatisticsNumbers;

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

const ViewStatContainer = styled.View`
  margin: 5px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  width: 46%;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  elevation: 5;
`;

const SpanText = styled(Text)`
  font-size: 14px;
  margin-right: 10px;
`;

const NumberStat = styled(Text)`
  font-size: 24px;
`;
