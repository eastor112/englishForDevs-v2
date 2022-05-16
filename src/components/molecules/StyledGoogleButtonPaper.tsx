import styled from 'styled-components/native';
import React from 'react';
import {Button} from 'react-native-paper';

interface Props {
  socialMediaName: string;
  imageName: string;
}

const StyledGoogleButtonPaper = ({socialMediaName}: Props) => {
  return (
    <StyledButton
      mode="contained"
      icon={() => (
        <StyledImage source={require('../../assets/images/google.png')} />
      )}>
      <StyledText>Login with {socialMediaName}</StyledText>
    </StyledButton>
  );
};

export default StyledGoogleButtonPaper;

const StyledButton = styled(Button)`
  background-color: white;
  padding: 5px 0px;
  width: 100%;
`;

const StyledImage = styled.Image`
  width: 22px;
  height: 22px;
`;

const StyledText = styled.Text`
  color: black;
`;
