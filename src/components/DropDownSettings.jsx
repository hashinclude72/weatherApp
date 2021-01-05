import React, { useState } from 'react';

import styled from 'styled-components/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSelector, useDispatch } from 'react-redux';

export default () => {
  const {
    units: myUnits,
    timeFormat: myTimeFormat,
    theme: myTheme,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [units, setUnits] = useState(myUnits);
  const [timeFormat, setTimeFormat] = useState(myTimeFormat);
  const [theme, setTheme] = useState(myTheme);

  const allClose = {
    units: false,
    time: false,
    theme: false,
  };

  const tempOptions = [
    { label: 'Metric', value: 'metric' },
    { label: 'Imperial', value: 'imperial' },
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
          <SettingText>Units</SettingText>
        </SettingHeader>
        <StyledDropDownPicker
          zIndex={5000}
          items={tempOptions}
          defaultValue={units}
          onChangeItem={(item) => {
            dispatch({
              type: 'units',
              payload: item.value,
            });
            setUnits(item.value);
          }}
          isVisible={visible.units}
          onOpen={() => changeVisibility('units')}
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
          onChangeItem={(item) => {
            dispatch({
              type: 'timeFormat',
              payload: item.value,
            });
            setTimeFormat(item.value);
          }}
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
          onChangeItem={(item) => {
            dispatch({
              type: 'theme',
              payload: item.value,
            });
            setTheme(item.value);
          }}
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
  height: ${RFValue(40)}px;
  margin-bottom: ${RFValue(5)}px;
  border-radius: 30px;
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
  font-size: ${RFValue(17)}px;
`;

const StyledDropDownPicker = styled(DropDownPicker).attrs((props) => ({
  arrowColor: props.theme.colors.icon,
  arrowSize: RFValue(15),
  containerStyle: {
    flex: 1,
  },
  itemStyle: { justifyContent: 'center' },
  dropDownStyle: {
    right: 0,
    marginTop: RFValue(-35),
    width: RFValue(75),
    borderBottomLeftRadius: RFValue(10),
    borderBottomRightRadius: RFValue(10),
    borderTopLeftRadius: RFValue(10),
    borderTopRightRadius: RFValue(10),
    borderColor: props.theme.colors.borderAlt,
    backgroundColor: props.theme.colors.backgroundAlt,
  },
  labelStyle: {
    color: props.theme.colors.text,
    textAlign: 'right',
    fontSize: RFValue(13),
  },
  selectedLabelStyle: {
    color: props.theme.colors.primary,
    flex: 1,
  },
  activeLabelStyle: { color: props.theme.colors.primary },
}))`
  border-color: ${({ theme }) => theme.colors.backgroundAlt};
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border: 1px ${({ theme }) => theme.colors.border};
  border-radius: 30px;
  border-bottom-left-radius: ${RFValue(10)}px;
  border-bottom-right-radius: ${RFValue(10)}px;
  border-top-left-radius: ${RFValue(10)}px;
  border-top-right-radius: ${RFValue(10)}px;
`;
