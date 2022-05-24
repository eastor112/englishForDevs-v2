import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native-paper';

interface Props {
  type: string;
  lesson: string;
}

const InfoWordOrPhrase = ({type, lesson}: Props) => {
  return (
    <ViewInfoContainer>
      <TypeWord>New {type}</TypeWord>

      <LessonWordContainer>
        <LessonWord>Lesson:</LessonWord>
        <LessonName>{lesson}</LessonName>
      </LessonWordContainer>
    </ViewInfoContainer>
  );
};

export default InfoWordOrPhrase;

const ViewInfoContainer = styled.View`
  padding: 5px 20px;
  border: 1px solid #e1e1e1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const TypeWord = styled(Text)`
  font-size: 12px;
`;

const LessonWordContainer = styled.View`
  font-size: 12px;
  flex-direction: row;
  align-items: center;
`;

const LessonWord = styled(Text)`
  font-size: 10px;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
`;

const LessonName = styled(Text)`
  font-weight: bold;
  font-size: 10px;
  padding-left: 5px;
`;
