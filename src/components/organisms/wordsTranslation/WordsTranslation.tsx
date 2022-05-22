import {View, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import React, {useEffect} from 'react';
import ViewNoView from '../../molecules/viewNoView/ViewNoView';
import {ITranslation} from '../../../redux/slices/words/wordsSlice.types';

interface Props {
  data: ITranslation[];
}

const WordsTranslation = ({data}: Props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    setExpanded(false);
  }, [data]);

  return (
    <List.Section>
      <List.Accordion
        title="Translation"
        titleNumberOfLines={4}
        titleStyle={styles.definitionTitle}
        left={props => <ViewNoView {...props} />}
        right={() => <View />}
        expanded={expanded}
        onPress={handlePress}>
        {data?.map(translation => (
          <List.Item
            key={translation.order}
            title={translation.spanish}
            titleNumberOfLines={1}
            titleStyle={styles.definitionTitle}
            description={translation.synonyms}
            left={props => <List.Icon {...props} icon="translate" />}
          />
        ))}
      </List.Accordion>
    </List.Section>
  );
};

export default WordsTranslation;

const styles = StyleSheet.create({
  definitionTitle: {
    fontSize: 14,
  },
});
