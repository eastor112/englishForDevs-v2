import {Text} from 'react-native-paper';
import React from 'react';

import styled from 'styled-components/native';
import SoundNoSound from '../../molecules/soundNoSound/SoundNoSound';

interface Props {
  isWord: boolean;
  content: string;
  pronuntiation?: string;
}

const MainWordOrPhrase = ({isWord = true, content, pronuntiation}: Props) => {
  return (
    <WordOrPhraseContainer>
      <ViewWords>
        <WordOrPhrase>{content}</WordOrPhrase>
        {isWord && <Pronunciation>[ {pronuntiation} ]</Pronunciation>}
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
