import React from 'react';
import {Button, Text, useTheme} from 'react-native-paper';
import {DrawerScreenProps} from '@react-navigation/drawer';
import AppBar from '../../components/organisms/appBar/AppBar';
import styled from 'styled-components/native';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {useAppDispatch} from '../../redux/store';
import {setWordsAndPhrasesRefs} from '../../redux/slices/review/reviewSlice';

const ReviewModes = ({navigation}: DrawerScreenProps<any, any>) => {
  const {colors, dark} = useTheme();
  const dispatch = useAppDispatch();

  const handleSelectMode1 = () => {
    dispatch(setWordsAndPhrasesRefs());
    navigation.navigate('Practice');
  };

  const handleSelectMode2 = () => {
    dispatch(setWordsAndPhrasesRefs());

    navigation.navigate('Practice');
  };

  const handleSelectMode3 = () => {
    dispatch(setWordsAndPhrasesRefs());
    navigation.navigate('Practice');
  };

  return (
    <>
      <AppBar title="Review" />
      <ViewContainer>
        <TextInstruction>Select how you want practice</TextInstruction>
        <ModesContainer>
          <ViewModeContainer
            style={styles.viewModeContainer}
            color={colors.background}>
            <ImageBackground
              source={require('../../assets/images/mode-1.png')}
              resizeMode="stretch"
              borderRadius={10}
              style={styles.imageBackground}>
              <View style={dark ? styles.containeddark : styles.contained}>
                <TextMode>Mode 1</TextMode>
                <TextNameMode>Only priorized</TextNameMode>
                <TextDescriptionMode>
                  All words and phrases that you marked in diferents topics for
                  review will be shown.
                </TextDescriptionMode>
                <Button mode="contained" onPress={handleSelectMode1}>
                  <Text> Start practice</Text>
                </Button>
              </View>
            </ImageBackground>
          </ViewModeContainer>

          <ViewModeContainer
            style={styles.viewModeContainer}
            color={colors.background}>
            <ImageBackground
              source={require('../../assets/images/mode-2.png')}
              resizeMode="stretch"
              borderRadius={10}
              style={styles.imageBackground}>
              <View style={dark ? styles.containeddark : styles.contained}>
                <TextMode>Mode 2</TextMode>
                <TextNameMode>Priorized and already learned</TextNameMode>
                <TextDescriptionMode>
                  All words and phrases that you view in diferents topics will
                  be shown.
                </TextDescriptionMode>
                <Button mode="contained" onPress={handleSelectMode2}>
                  <Text> Start practice</Text>
                </Button>
              </View>
            </ImageBackground>
          </ViewModeContainer>

          <ViewModeContainer
            style={styles.viewModeContainer}
            color={colors.background}>
            <ImageBackground
              source={require('../../assets/images/mode-3.png')}
              resizeMode="stretch"
              borderRadius={10}
              style={styles.imageBackground}>
              <View style={dark ? styles.containeddark : styles.contained}>
                <TextMode>Mode 3</TextMode>
                <TextNameMode>All words and phrases</TextNameMode>
                <TextDescriptionMode>
                  All words and phrases will be shown, even if you haven't done
                  the lesson yet.
                </TextDescriptionMode>
                <Button mode="contained" onPress={handleSelectMode3}>
                  <Text> Start practice</Text>
                </Button>
              </View>
            </ImageBackground>
          </ViewModeContainer>
        </ModesContainer>
      </ViewContainer>
    </>
  );
};

export default ReviewModes;

const styles = StyleSheet.create({
  viewModeContainer: {
    elevation: 10,
  },
  imageBackground: {
    flex: 1,
  },
  contained: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFFFFF66',
    borderRadius: 10,
  },
  containeddark: {
    flex: 1,
    padding: 15,
    backgroundColor: '#66666666',
    borderRadius: 10,
  },
});

const TextInstruction = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ViewContainer = styled.View`
  flex: 1;
  padding: 15px;
`;

const ModesContainer = styled.View`
  flex: 1;
`;

const ViewModeContainer = styled.View<{color: string}>`
  border-radius: 10px;
  margin: 10px;
  margin-bottom: 10px;
  background-color: ${props => props.color};
  flex: 1;
`;

const TextMode = styled(Text)`
  font-weight: bold;
  font-size: 12px;
`;

const TextNameMode = styled(Text)`
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const TextDescriptionMode = styled(Text)`
  font-size: 15px;
  margin-bottom: 20px;
`;
