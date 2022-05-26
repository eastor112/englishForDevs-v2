import {List} from 'react-native-paper';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import SoundNoSound from '../../molecules/soundNoSound/SoundNoSound';
import ViewNoView from '../../molecules/viewNoView/ViewNoView';
import {IDefinition} from '../../../redux/slices/words/wordsSlice.types';

interface Props {
  data: IDefinition;
}

const Definitions = ({data}: Props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    setExpanded(false);
  }, [data]);

  return (
    <List.Section
      title={
        data.order === 1
          ? 'Technical definition'
          : data.order === 2
          ? 'Other definition'
          : ''
      }>
      <List.Accordion
        title={data.english}
        titleNumberOfLines={4}
        titleStyle={styles.definitionTitle}
        left={props => <ViewNoView {...props} />}
        right={() => <View />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item
          title="Listen"
          description="Repeat after the speaker"
          left={() => <SoundNoSound text={data.english} />}
        />
        <List.Item
          title={data.spanish}
          titleNumberOfLines={4}
          titleStyle={styles.definitionTitle}
          description="Traducción"
          left={props => <List.Icon {...props} icon="translate" />}
        />
      </List.Accordion>
    </List.Section>
  );
};

export default Definitions;

const styles = StyleSheet.create({
  definitionTitle: {
    fontSize: 14,
  },
});
