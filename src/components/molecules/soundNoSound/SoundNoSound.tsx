import {View} from 'react-native';
import {IconButton} from 'react-native-paper';
import React, {useState} from 'react';

const SoundNoSound = () => {
  const [sound, setSound] = useState(false);

  return (
    <View>
      {sound ? (
        <IconButton
          icon="volume-off"
          size={30}
          onPress={() => {
            setSound(!sound);
          }}
        />
      ) : (
        <IconButton
          icon="volume-high"
          size={30}
          onPress={() => {
            setSound(!sound);
          }}
        />
      )}
    </View>
  );
};

export default SoundNoSound;
