import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';
import {BarChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {useTheme} from 'react-native-paper';

const LearnedWordsChart = () => {
  const {dark, colors} = useTheme();

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
      stroke: '#f00',
    },
  };

  return (
    <View>
      <Text>Learned words by day</Text>
      <BarChart
        data={{
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', ''],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                0,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 40} // from react-native
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
