import React from 'react';
import {useTheme} from 'react-native-paper';
import styled from 'styled-components/native';

interface Props {
  children: React.ReactNode;
}

const StyledTextLoginPaper = ({children}: Props) => {
  const {colors} = useTheme();

  const Title = styled.Text`
    margin-bottom: 15px;
    padding: 5px;
    font-size: 24px;
    font-weight: bold;
    align-self: center;
    color: ${colors.text};
  `;
  return <Title>{children}</Title>;
};

export default StyledTextLoginPaper;
