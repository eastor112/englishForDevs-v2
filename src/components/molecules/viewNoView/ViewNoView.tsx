import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IconButton} from 'react-native-paper';

interface Props {
  color: string;
}

const ViewNoView = ({color}: Props) => {
  const [view, setView] = useState(true);

  useEffect(() => {
    setView(!view);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);

  return (
    <View>
      {view ? (
        <IconButton icon="eye" size={25} color={color} />
      ) : (
        <IconButton icon="eye-off" size={25} color={color} />
      )}
    </View>
  );
};

export default ViewNoView;
