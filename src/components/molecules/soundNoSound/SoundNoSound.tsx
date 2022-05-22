import {View} from 'react-native';
import {IconButton} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import Tts from 'react-native-tts';

interface Props {
  text: string;
}
Tts.setDefaultLanguage('en-IE');
Tts.setDefaultVoice('en-us-x-tpf-local');

const SoundNoSound = ({text}: Props) => {
  const [sound, setSound] = useState(false);

  useEffect(() => {
    Tts.addEventListener('tts-start', () => setSound(true));
    Tts.addEventListener('tts-finish', () => setSound(false));
    Tts.addEventListener('tts-cancel', () => setSound(false));

    return () => {
      Tts.removeEventListener('tts-start', () => console.log('start'));
      Tts.removeEventListener('tts-finish', () => console.log('finish'));
      Tts.removeEventListener('tts-cancel', () => console.log('cancel'));
    };
  }, [text]);

  const handleSound = () => {
    setSound(!sound);
    if (sound) {
      Tts.stop();
    } else {
      Tts.getInitStatus().then(() => {
        Tts.speak(text);
      });
    }
  };

  return (
    <View>
      {sound ? (
        <IconButton icon="stop" color="red" size={30} onPress={handleSound} />
      ) : (
        <IconButton icon="volume-high" size={30} onPress={handleSound} />
      )}
    </View>
  );
};

export default SoundNoSound;
