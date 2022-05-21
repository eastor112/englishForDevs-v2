import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  difficulty: string;
}

const DifficultyStars = ({difficulty}: Props) => {
  return (
    <>
      {difficulty === 'easy' && <Icon name="star" size={15} color="#00BFFF" />}
      {difficulty === 'medium' && (
        <>
          <Icon name="star" size={15} color="#00BFFF" />
          <Icon name="star" size={15} color="#00BFFF" />
        </>
      )}
      {difficulty === 'hard' && (
        <>
          <Icon name="star" size={15} color="#00BFFF" />
          <Icon name="star" size={15} color="#00BFFF" />
          <Icon name="star" size={15} color="#00BFFF" />
        </>
      )}
    </>
  );
};

export default DifficultyStars;
