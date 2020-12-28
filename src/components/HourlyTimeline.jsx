import React from 'react';
import { Dimensions } from 'react-native';

import styled from 'styled-components/native';
import { LineChart } from 'react-native-chart-kit';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Svg, Text as TextSVG } from 'react-native-svg';

import { round, weatherIcons, rootNavigation } from '../utils';

export default () => {
  const timeFormat = useSelector((state) => state.timeFormat);
  const hourly = useSelector((state) => state.forecast.hourly);

  const timeString = (sec) => {
    if (timeFormat === '24') return moment(sec * 1000).format('HH:mm');
    return moment(sec * 1000).format('hh:mm a');
  };
  const chartData = {
    labels: hourly.map((item) => timeString(item.dt)),
    datasets: [
      {
        data: hourly.map((item) => round(item.temp)),
        color: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
      },
    ],
    legend: [],
  };
  const chartConfig = {
    backgroundColor: '#005aae',
    backgroundGradientFrom: '#006ace',
    backgroundGradientTo: '#40a1fc',
    decimalPlaces: 2,
    color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {},
    propsForDots: {
      r: '4',
      strokeWidth: '2',
      stroke: '#40a1fc',
    },
    propsForLabels: { fontSize: RFValue(9) },
    propsForVerticalLabels: { fontWeight: 'bold', fontSize: RFValue(8) },
  };
  return (
    <Container>
      {/* <HeadingText>Hourly forecast</HeadingText> */}
      <ScrollView horizontal={true}>
        <LineChart
          data={chartData}
          width={4000}
          height={RFValue(150)}
          yAxisSuffix="&deg;"
          yAxisInterval={6}
          yLabelsOffset={20}
          chartConfig={chartConfig}
          //   bezier
          withHorizontalLines={false}
          withInnerLines={false}
          withOuterLines={false}
          withHorizontalLabels={false}
          fromZero
          renderDotContent={({ x, y, index, indexData }) => {
            return (
              <TextSVG
                key={index}
                x={x}
                y={y - 10}
                fill="white"
                fontSize={RFValue(9)}
                fontWeight="bold"
                textAnchor="middle"
              >
                {indexData}&deg;
              </TextSVG>
            );
          }}
          formatYLabel={(label) => round(label)}
          style={{}}
        />
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  margin: ${RFValue(10)}px;
  margin-top: 0px;
  border-radius: ${RFValue(10)}px;
  overflow: hidden;
`;

const ScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    justifyContent: 'space-between',
  },
}))``;

const HeadingText = styled.Text`
  z-index: 1000;
  position: absolute;
  color: white;
  font-size: ${RFValue(15)}px;
  padding: ${RFValue(10)}px;
  padding-top: ${RFValue(5)}px;
  font-weight: bold;
`;
