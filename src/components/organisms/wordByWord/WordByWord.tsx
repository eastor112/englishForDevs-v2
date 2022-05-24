import {StyleSheet, View} from 'react-native';
import {List} from 'react-native-paper';

import React, {useEffect, useState} from 'react';
import ViewNoView from '../../molecules/viewNoView/ViewNoView';
import SoundNoSound from '../../molecules/soundNoSound/SoundNoSound';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {IWord} from '../../../redux/slices/words/wordsSlice.types';

interface Props {
  wordsRef: FirebaseFirestoreTypes.DocumentReference[];
}

const WordByWord = ({wordsRef}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [words, setWords] = useState<IWord[]>([]);

  useEffect(() => {
    if (words.length > 0) {
      setWords([]);
    }

    wordsRef.forEach(wordRef => {
      wordRef.get().then(word => {
        setWords(last => [...last, word.data() as IWord]);
      });
    });

    setExpanded(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordsRef]);

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
        {words.map(w => (
          <List.Item
            key={w.word}
            title={w.word}
            titleNumberOfLines={1}
            titleStyle={styles.definitionTitle}
            description={w.translations[0].spanish}
            left={() => <SoundNoSound text={w.word} />}
          />
        ))}
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
