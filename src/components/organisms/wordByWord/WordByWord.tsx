import {StyleSheet, View} from 'react-native';
import {List} from 'react-native-paper';

import React from 'react';
import ViewNoView from '../../molecules/viewNoView/ViewNoView';
import SoundNoSound from '../../molecules/soundNoSound/SoundNoSound';

const WordByWord = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Section>
      <List.Accordion
        title="Word by Word"
        titleNumberOfLines={4}
        titleStyle={styles.definitionTitle}
        left={props => <ViewNoView {...props} />}
        right={() => <View />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item
          title="commit"
          titleNumberOfLines={1}
          titleStyle={styles.definitionTitle}
          description="confirmar, hacer, causar, cometer"
          left={() => <SoundNoSound />}
        />
        <List.Item
          title="feature"
          titleNumberOfLines={1}
          titleStyle={styles.definitionTitle}
          description="característica, función, propiedad"
          left={() => <SoundNoSound />}
        />
      </List.Accordion>
    </List.Section>
  );
};

export default WordByWord;

const styles = StyleSheet.create({
  definitionTitle: {
    fontSize: 14,
  },
});
