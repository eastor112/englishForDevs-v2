import {View, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import React from 'react';
import ViewNoView from '../../molecules/viewNoView/ViewNoView';

const PhrasesTranslation = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion
        title="Translation"
        titleNumberOfLines={1}
        titleStyle={styles.definitionTitle}
        left={props => <ViewNoView {...props} />}
        right={() => <View />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item
          title="Hey! realiza el commit con las nuevas características en la rama de desarrollo!"
          titleNumberOfLines={4}
          titleStyle={styles.definitionTitle}
          description="Traducción"
          left={props => <List.Icon {...props} icon="translate" />}
        />
      </List.Accordion>
    </List.Section>
  );
};

export default PhrasesTranslation;

const styles = StyleSheet.create({
  definitionTitle: {
    fontSize: 14,
  },
});
