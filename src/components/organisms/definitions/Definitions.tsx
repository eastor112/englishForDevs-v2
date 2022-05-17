import {List} from 'react-native-paper';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import SoundNoSound from '../../molecules/soundNoSound/SoundNoSound';
import ViewNoView from '../../molecules/viewNoView/ViewNoView';

const Definitions = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Section title="Technical definition">
      <List.Accordion
        title="A commit is an operation that records changes to one or more files in your
          branch."
        titleNumberOfLines={4}
        titleStyle={styles.definitionTitle}
        left={props => <ViewNoView {...props} />}
        right={() => <View />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item
          title="Listen"
          description="Repeat after the speaker"
          left={() => <SoundNoSound />}
        />
        <List.Item
          title="Una confirmación es una operación que registra cambios a uno o más archivos de una rama"
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
