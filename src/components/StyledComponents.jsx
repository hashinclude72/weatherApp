import React from 'react';

import styled from 'styled-components/native';
import TouchableScale from 'react-native-touchable-scale';

export const StyledTouchableScale = (props) => (
  <STouchableScale friction={5} tension={100} activeScale={0.9} {...props}>
    {props.children}
  </STouchableScale>
);

const STouchableScale = styled(TouchableScale)`
  flex: 1;
`;
