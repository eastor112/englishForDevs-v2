import React from 'react';
import styled from 'styled-components/native';
import {Text, useTheme} from 'react-native-paper';

const StyledSeparator = () => {
  const {colors} = useTheme();

  const ViewContainer = styled.View`
    width: 100%;
    flex-direction: row;
    margin: 10px 0px 0px;
    align-items: center;
  `;

  const StyledText = styled(Text)`
    font-weight: 500;
    margin: 10px;
  `;

  const ViewSegment = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${colors.text};
    height: 1px;
    flex: 1;
  `;

  return (
    <ViewContainer>
      <ViewSegment />
      <StyledText>OR</StyledText>
      <ViewSegment />
    </ViewContainer>
  );
};

export default StyledSeparator;
