import {Text} from 'react-native-paper';
import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  error: string;
}

const AuthErrorModal = ({error}: Props) => {
  return (
    <ViewContainer>
      <Icon name="alert-circle-outline" size={50} color="red" />
      <Text>{error}</Text>
    </ViewContainer>
  );
};

export default AuthErrorModal;

const ViewContainer = styled.View`
  width: 100%;
  height: 100px;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
`;
