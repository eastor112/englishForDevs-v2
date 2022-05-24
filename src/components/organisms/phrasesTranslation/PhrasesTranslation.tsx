import {View, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import React, {useEffect} from 'react';
import ViewNoView from '../../molecules/viewNoView/ViewNoView';

interface Props {
  text: string;
}

const PhrasesTranslation = ({text}: Props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    setExpanded(false);
  }, [text]);

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
          title={text}
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
