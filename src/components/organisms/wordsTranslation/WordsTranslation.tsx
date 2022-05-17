import {View, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import React from 'react';
import ViewNoView from '../../molecules/viewNoView/ViewNoView';

const Translation = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);
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
        <List.Item
          title="Cometer"
          titleNumberOfLines={1}
          titleStyle={styles.definitionTitle}
          description="commit, make, foul"
          left={props => <List.Icon {...props} icon="translate" />}
        />
        <List.Item
          title="Confirmación"
          titleNumberOfLines={1}
          titleStyle={styles.definitionTitle}
          description="Do, make, ask, be, cause, commit"
          left={props => <List.Icon {...props} icon="translate" />}
        />
      </List.Accordion>
    </List.Section>
  );
};

export default Translation;

const styles = StyleSheet.create({
  definitionTitle: {
    fontSize: 14,
  },
});
