import React, { useState } from 'react';

import styled from 'styled-components/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue } from 'react-native-responsive-fontsize';

export default () => {
  const [tempUnit, setTempUnit] = useState('c');
  const [timeFormat, setTimeFormat] = useState('24');
  const [theme, setTheme] = useState('black');

  const allClose = {
    temp: false,
    time: false,
    theme: false,
  };

  const tempOptions = [
    { label: '⁰C', value: 'c' },
    { label: '⁰F', value: 'f' },
    { label: '⁰K', value: 'k' },
  ];

  const timeOptions = [
    { label: '12 Hour', value: '12' },
    { label: '24 Hour', value: '24' },
  ];

  const themeOptions = [
    { label: 'Black', value: 'black' },
    { label: 'Light', value: 'light' },
  ];

  const [visible, setVisible] = useState(allClose);

  function changeVisibility(type) {
    setVisible((prevState) => {
      return {
        ...allClose,
        [type]: !prevState[type],
      };
    });
  }

  return (
    <>
      <DropSetting>
        <SettingHeader>
          <SettingText>Temperature Unit</SettingText>
        </SettingHeader>
        <StyledDropDownPicker
          zIndex={5000}
          items={tempOptions}
          defaultValue={tempUnit}
          onChangeItem={(item) => setTempUnit(item.value)}
          isVisible={visible.temp}
          onOpen={() => changeVisibility('temp')}
          onClose={() => changeVisibility('close')}
        />
      </DropSetting>
      <DropSetting>
        <SettingHeader>
          <SettingText>Time Format</SettingText>
        </SettingHeader>
        <StyledDropDownPicker
          zIndex={4000}
          items={timeOptions}
          defaultValue={timeFormat}
          onChangeItem={(item) => setTimeFormat(item.value)}
          isVisible={visible.time}
          onOpen={() => changeVisibility('time')}
          onClose={() => changeVisibility('close')}
        />
      </DropSetting>
      <DropSetting>
        <SettingHeader>
          <SettingText>Theme</SettingText>
        </SettingHeader>
        <StyledDropDownPicker
          zIndex={3000}
          items={themeOptions}
          defaultValue={theme}
          onChangeItem={(item) => setTheme(item.value)}
          isVisible={visible.theme}
          onOpen={() => changeVisibility('theme')}
          onClose={() => changeVisibility('close')}
        />
      </DropSetting>
    </>
  );
};

const DropSetting = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${RFValue(45)}px;
  margin-bottom: ${RFValue(10)}px;
  border-radius: ${RFValue(7)}px;
`;

const SettingHeader = styled.View`
  z-index: 1000;
  position: absolute;
  justify-content: center;
  padding-horizontal: ${RFValue(10)}px;
`;

const SettingText = styled.Text`
  padding: 5px;
  color: ${({ theme }) => theme.colors.text};
  justify-content: center;
  font-size: ${RFValue(18)}px;
`;

const StyledDropDownPicker = styled(DropDownPicker).attrs((props) => ({
  arrowColor: props.theme.colors.text,
  containerStyle: {
    flex: 1,
  },
  itemStyle: { justifyContent: 'center' },
  dropDownStyle: {
    right: 0,
    top: 100,
    width: RFValue(75),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: props.theme.colors.border,
    backgroundColor: props.theme.colors.backgroundAlt,
  },
  labelStyle: { color: props.theme.colors.text, textAlign: 'right' },
  selectedLabelStyle: {
    color: props.theme.colors.primary,
    flex: 1,
  },
  activeLabelStyle: { color: props.theme.colors.primary },
}))`
  border-color: ${({ theme }) => theme.colors.backgroundAlt};
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`;
