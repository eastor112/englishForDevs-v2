import {StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import React from 'react';
import styled from 'styled-components/native';

const StatisticsNumbers = () => {
  const {dark} = useTheme();

  return (
    <View>
      <Title>These stats are the result of your effort:</Title>

      <ViewStatsContainer>
        <ViewStatContainer dark={dark} style={styles.viewStatContainer}>
          <NumberStat>475</NumberStat>
          <SpanText>Practiced words</SpanText>
        </ViewStatContainer>

        <ViewStatContainer dark={dark} style={styles.viewStatContainer}>
          <NumberStat>320</NumberStat>
          <SpanText>New learned words</SpanText>
        </ViewStatContainer>

        <ViewStatContainer dark={dark} style={styles.viewStatContainer}>
          <NumberStat>120</NumberStat>
          <SpanText>Practiced phrases</SpanText>
        </ViewStatContainer>

        <ViewStatContainer dark={dark} style={styles.viewStatContainer}>
          <NumberStat>15 w/d</NumberStat>
          <SpanText>Learning Rate</SpanText>
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
