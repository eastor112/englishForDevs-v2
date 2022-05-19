import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native-paper';

interface Props {
  message: string;
  pageName: string;
  labelLink: string;
  navigateFn: (pageName: string) => void;
}

const StyledRedirectMessage = ({
  message,
  pageName,
  labelLink,
  navigateFn,
}: Props) => {
  const StyledTextAsLinkPaper = styled(Text)`
    color: red;
    margin-left: 5px;
    font-weight: 500;
    text-decoration: underline;
  `;
  return (
    <Container>
      <Text>{message}</Text>
      <StyledTextAsLinkPaper
        onPress={() => {
          navigateFn(pageName);
        }}>
        {labelLink}
      </StyledTextAsLinkPaper>
    </Container>
  );
};

export default StyledRedirectMessage;

const Container = styled.View`
  flex-direction: row;
`;
