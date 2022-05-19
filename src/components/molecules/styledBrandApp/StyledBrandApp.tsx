import {useTheme} from 'react-native-paper';
import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StyledBrandApp = () => {
  const {colors} = useTheme();

  const ViewContainer = styled.View`
    padding: 20px;
    margin-top: 5%;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 9999px;
    height: 140px;
    width: 140px;
    align-items: center;
    justify-content: center;
  `;

  const ViewLogo = styled.View`
    margin-bottom: 10px;
    align-items: center;
    width: 200px;
  `;

  const StyledText = styled.Text`
    margin-top: 5px;
    font-size: 24px;
    color: ${colors.text};
  `;

  return (
    <ViewContainer>
      <ViewLogo>
        <Icon name="lightbulb-on-outline" size={48} color={colors.text} />
        <StyledText>{'${englishForDevs}'}</StyledText>
      </ViewLogo>
    </ViewContainer>
  );
};

export default StyledBrandApp;
