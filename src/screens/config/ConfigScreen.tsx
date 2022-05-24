import React, {useState} from 'react';
import {Text, Switch, Button} from 'react-native-paper';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import DatePicker from 'react-native-date-picker';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../redux/store';
import {setDarkTheme} from '../../redux/slices/settings/settingsSlice';

function formatAMPM(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';

  const hoursStr = hours % 12 ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;

  const strTime = hoursStr + ':' + minutesStr + ' ' + ampm;
  return strTime;
}

const ConfigScreen = () => {
  const {darkTheme} = useSelector((state: RootState) => state.settings);
  const dispatch = useAppDispatch();

  const [activeNotifications, setActiveNotifications] = useState(true);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onToggleSwitch = () => {
    dispatch(setDarkTheme(!darkTheme));
  };

  console.log(darkTheme);

  return (
    <ViewContainer>
      <ViewTitle>
        <IonicIcon name="settings-outline" size={24} color="grey" />
        <TextTitle>Settings</TextTitle>
      </ViewTitle>
      <ViewSettingsContainer>
        <SettingContainer>
          <SettingName>Dark Theme</SettingName>
          <Switch
            value={darkTheme}
            onValueChange={onToggleSwitch}
            color="#00c2cc"
          />
        </SettingContainer>

        <SettingContainer>
          <SettingName>Notifications</SettingName>
          <Switch
            value={activeNotifications}
            onValueChange={() => setActiveNotifications(!activeNotifications)}
            color={'#00c2cc'}
          />
        </SettingContainer>

        <SettingContainer>
          <View>
            <SettingName>Time to study</SettingName>
            <Button onPress={() => setOpen(true)} mode="contained">
              <Text>Set</Text>
            </Button>
          </View>
          <Text>{formatAMPM(date)}</Text>
        </SettingContainer>
      </ViewSettingsContainer>

      <DatePicker
        modal
        mode="time"
        style={styles.datePicker}
        open={open}
        date={date}
        onDateChange={dateProp => setDate(dateProp)}
        onConfirm={dateppp => {
          setOpen(false);
          setDate(dateppp);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </ViewContainer>
  );
};

export default ConfigScreen;

const styles = StyleSheet.create({
  datePicker: {
    width: 200,
  },
});

const ViewContainer = styled.View`
  padding: 20px;
`;

const ViewTitle = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
`;

const TextTitle = styled(Text)`
  font-size: 24px;
  margin-left: 5px;
`;

const ViewSettingsContainer = styled.View`
  padding: 0px 20px;
`;

const SettingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const SettingName = styled(Text)`
  font-size: 16px;
`;
