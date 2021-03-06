import React, { useContext } from 'react';
import { Linking } from 'react-native';

import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ThemeContext } from 'styled-components';

const GITHUB = 'https://github.com/hashinclude72/weatherApp';
const TWITTER = 'https://twitter.com/hashinclude72';
const INSTAGRAM = 'https://www.instagram.com/hashinclude72/';
const MAIL = 'mailto:hashinclude72@gmail.com?subject=Weather app&body=';

export default () => {
  const themeContext = useContext(ThemeContext);
  return (
    <Footer>
      <FooterText>hashinclude72</FooterText>
      <FooterIcons>
        <AntDesign
          name="github"
          size={RFValue(25)}
          color={themeContext.colors.icon}
          onPress={() => {
            Linking.openURL(GITHUB).catch((err) => {
              console.error('Failed opening page because: ', err);
            });
          }}
        />
        <AntDesign
          name="twitter"
          size={RFValue(25)}
          color={themeContext.colors.icon}
          onPress={() => {
            Linking.openURL(TWITTER).catch((err) => {
              console.error('Failed opening page because: ', err);
            });
          }}
        />
        <AntDesign
          name="instagram"
          size={RFValue(25)}
          color={themeContext.colors.icon}
          onPress={() => {
            Linking.openURL(INSTAGRAM).catch((err) => {
              console.error('Failed opening page because: ', err);
            });
          }}
        />
        <AntDesign
          name="mail"
          size={RFValue(25)}
          color={themeContext.colors.icon}
          onPress={() => {
            Linking.openURL(MAIL).catch((err) => {
              console.error('Failed opening page because: ', err);
            });
          }}
        />
      </FooterIcons>
    </Footer>
  );
};

const Footer = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
  align-items: stretch;
  margin-bottom: ${RFValue(20)}px;
`;

const FooterText = styled.Text`
  justify-content: center;
  align-self: center;
  margin-bottom: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(17)}px;
`;

const FooterIcons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-horizontal: 90px;
`;
