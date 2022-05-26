import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {IUserData} from '../../../redux/slices/auth/authSlice.types';
import {
  phrasesKnownLastSevenDays,
  wordsKnownLastSevenDays,
} from '../../../utils/lastSevenDays';

interface Props {
  userData: IUserData;
}

const LearnedWordsChart = ({userData}: Props) => {
  const {dark, colors} = useTheme();

  const wordsDataset = wordsKnownLastSevenDays(userData?.wordsResponses);
  const phrasesDataset = phrasesKnownLastSevenDays(userData?.phraseResponses);

  const chartConfig = {
    backgroundColor: '#0f0',
    backgroundGradientFrom: dark ? '#33333399' : '#fff',
    backgroundGradientTo: dark ? '#22222299' : '#fff',
    decimalPlaces: 0,
    color: (opacity = 2) => `rgba(0, 200, 180, ${opacity})`,
    labelColor: () => `${colors.text}`,
    style: {
      borderRadius: 10,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#00eaff66',
    },
  };

  return (
    <View>
      <Text>Learned by day</Text>
      <LineChart
        data={{
          labels: wordsDataset.labels.map(
            label => `${label.split('/')[1]}/${label.split('/')[0]}`,
          ),
          datasets: [
            {
              data: [...wordsDataset.dataset],
              color: () => '#c60000',
              strokeWidth: 2,
            },
            {
              data: [...phrasesDataset.dataset],
              color: () => '#0900b5',
              strokeWidth: 2,
            },
          ],
          legend: ['Learned words', 'Learned phrases'],
        }}
        width={Dimensions.get('window').width - 40}
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1}
        chartConfig={chartConfig}
        style={styles.grpah}
      />
    </View>
  );
};

export default LearnedWordsChart;

const styles = StyleSheet.create({
  grpah: {
    marginVertical: 8,
    borderRadius: 16,
  },
});
