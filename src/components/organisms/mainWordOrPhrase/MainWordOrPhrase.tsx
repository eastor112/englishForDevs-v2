import {Text} from 'react-native-paper';
import React from 'react';

import styled from 'styled-components/native';
import SoundNoSound from '../../molecules/soundNoSound/SoundNoSound';

const MainWordOrPhrase = () => {
  const isWord = true;

  return (
    <WordOrPhraseContainer>
      <ViewWords>
        <WordOrPhrase>Commit</WordOrPhrase>
        {isWord && <Pronunciation>[ kəˈmit ]</Pronunciation>}
      </ViewWords>
      <SoundContainer>
        <SoundNoSound />
      </SoundContainer>
    </WordOrPhraseContainer>
  );
};

export default MainWordOrPhrase;

const WordOrPhraseContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Pronunciation = styled(Text)`
  margin-top: 5px;
  padding-bottom: 10px;
`;

const WordOrPhrase = styled(Text)`
  font-size: 24px;
`;

const ViewWords = styled.View`
  flex: 5;
`;

const SoundContainer = styled.View`
  align-items: center;
  flex: 1;
`;
