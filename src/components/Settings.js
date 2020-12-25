import React, { useState } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';

const GITHUB = 'https://github.com/hashinclude72/weatherApp';
const TWITTER = 'https://twitter.com/hashinclude72';
const INSTAGRAM = 'https://www.instagram.com/hashinclude72/';
const MAIL = 'mailto:hashinclude72@gmail.com?subject=Weather app&body=';

export default () => {
  const [tempUnit, setTempUnit] = useState('c');
  const [timeFormat, setTimeFormat] = useState('24');
  const [tempVisible, setTempVisible] = useState(false);
  const [timeVisible, setTimeVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.unitContainer}>
        <View style={styles.unit}>
          <Text style={styles.text}>Temperature unit</Text>
        </View>
        <View>
          <DropDownPicker
            zIndex={5000}
            items={[
              {
                label: '⁰C',
                value: 'c',
              },
              {
                label: '⁰F',
                value: 'f',
              },
            ]}
            defaultValue={tempUnit}
            onChangeItem={(item) => setTempUnit(item.value)}
            placeholder="unit"
            arrowColor="white"
            containerStyle={styles.dropContainerStyle}
            style={styles.dropStyle}
            itemStyle={styles.dropItemStyle}
            dropDownStyle={styles.dropDownStyle}
            labelStyle={styles.labelStyle}
            selectedLabelStyle={styles.selectedLabelStyle}
            activeLabelStyle={styles.activeLabelStyle}
            isVisible={tempVisible}
            onOpen={() => {
              setTempVisible(true);
              setTimeVisible(false);
            }}
            onClose={() => setTempVisible(false)}
          />
        </View>
      </View>
      <View style={styles.unitContainer}>
        <View style={styles.unit}>
          <Text style={styles.text}>Time format</Text>
        </View>
        <View>
          <DropDownPicker
            zIndex={4000}
            items={[
              {
                label: '24 Hrs',
                value: '24',
              },
              {
                label: '12 Hrs',
                value: '12',
              },
            ]}
            defaultValue={timeFormat}
            onChangeItem={(item) => setTimeFormat(item.value)}
            placeholder="format"
            arrowColor="white"
            containerStyle={styles.dropContainerStyle}
            style={styles.dropStyle}
            itemStyle={styles.dropItemStyle}
            dropDownStyle={styles.dropDownStyle}
            labelStyle={styles.labelStyle}
            selectedLabelStyle={styles.selectedLabelStyle}
            activeLabelStyle={styles.activeLabelStyle}
            isVisible={timeVisible}
            onOpen={() => {
              setTimeVisible(true);
              setTempVisible(false);
            }}
            onClose={() => setTimeVisible(true)}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={[styles.text, styles.footerText]}>hashinclude72</Text>
        <View style={styles.footerIcons}>
          <AntDesign
            name="github"
            size={RFValue(30)}
            color="white"
            onPress={() => {
              Linking.openURL(GITHUB).catch((err) => {
                console.error('Failed opening page because: ', err);
              });
            }}
          />
          <AntDesign
            name="twitter"
            size={RFValue(30)}
            color="white"
            onPress={() => {
              Linking.openURL(TWITTER).catch((err) => {
                console.error('Failed opening page because: ', err);
              });
            }}
          />
          <AntDesign
            name="instagram"
            size={RFValue(30)}
            color="white"
            onPress={() => {
              Linking.openURL(INSTAGRAM).catch((err) => {
                console.error('Failed opening page because: ', err);
              });
            }}
          />
          <AntDesign
            name="mail"
            size={RFValue(30)}
            color="white"
            onPress={() => {
              Linking.openURL(MAIL).catch((err) => {
                console.error('Failed opening page because: ', err);
              });
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: RFValue(10),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#000',
  },
  unitContainer: {
    height: RFValue(45),
    borderRadius: RFValue(7),
    marginBottom: RFValue(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  unit: {
    height: '100%',
    borderRadius: RFValue(7),
    paddingHorizontal: RFValue(10),
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1c1c1c',
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  text: {
    padding: 5,
    color: '#d1d1d1',
    justifyContent: 'center',
    fontSize: RFValue(18),
  },
  dropContainerStyle: {
    height: '100%',
    width: RFValue(100),
    flex: 5,
  },
  dropStyle: {
    backgroundColor: '#1c1c1c',
    borderColor: '#1c1c1c',
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  dropItemStyle: {
    justifyContent: 'center',
  },
  dropDownStyle: {
    width: RFValue(70),
    backgroundColor: '#3c3c3c',
    borderColor: '#3c3c3c',
    right: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  labelStyle: {
    color: 'white',
  },
  placeholderStyle: { color: 'white' },
  selectedLabelStyle: {
    color: '#03a7ff',
  },
  activeLabelStyle: { color: '#03a7ff' },
  footer: {
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    flexGrow: 1,
    marginBottom: RFValue(30),
  },
  footerText: {
    alignSelf: 'center',
    fontSize: RFValue(20),
    padding: 20,
  },
  footerIcons: {
    paddingHorizontal: RFValue(60),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
