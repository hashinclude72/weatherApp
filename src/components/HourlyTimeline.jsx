import React, { useEffect, useMemo } from 'react';

import styled from 'styled-components/native';
import { LineChart } from 'react-native-chart-kit';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSelector } from 'react-redux';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen';

import { round, weatherIcons } from '../utils';

export default () => {
  const timeFormat = useSelector((state) => state.timeFormat);
  const hourly = useSelector((state) => state.forecast.hourly);
  const COLOR = 'blue';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const timeString = (sec) => {
    if (timeFormat === '24') return moment(sec * 1000).format('HH:mm');
    return moment(sec * 1000).format('h A');
  };

  const chartData = {
    labels: hourly.map((item, index) =>
      index === 24 ? 'Tomorrow' : timeString(item.dt)
    ),
    datasets: [
      {
        data: hourly.map((item) => round(item.temp)),
      },
    ],
    legend: [],
  };

  const colors = {
    blue: {
      backgroundColor: '#005aae',
      backgroundGradientFrom: '#006ace',
      backgroundGradientTo: '#40a1fc',
    },
    orange: {
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      fillShadowGradient: '#000',
    },
  };

  const config = {
    decimalPlaces: 0,
    fillShadowGradientOpacity: 0.12,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {},
    propsForDots: {
      r: '4',
      strokeWidth: '2',
    },
    propsForLabels: { fontSize: RFValue(9) },
    propsForVerticalLabels: { fontWeight: 'bold', fontSize: RFValue(8) },
  };

  const chartConfig = (color) => ({
    ...config,
    ...colors[color || COLOR],
    propsForDots: {
      ...config.propsForDots,
      stroke: colors[color || COLOR].backgroundGradientTo,
    },
  });

  const renderDotContent = ({ x, y, index, indexData }) => (
    <DotView key={index} x={x} y={y}>
      <DotText>{indexData}&deg;</DotText>
      <MaterialCommunityIcons
        name={weatherIcons[hourly[index].weather[0].icon].icon}
        size={RFValue(13)}
        color="white"
      />
    </DotView>
  );

  return useMemo(() => {
    console.log('render hourly timeline');
    return (
      <Container>
        {/* <HeadingText>Hourly forecast</HeadingText> */}
        <ScrollView
          key={Math.random()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <LineChart
            key={1}
            data={chartData}
            width={RFValue(2000)}
            height={RFValue(170)}
            yAxisSuffix="&deg;"
            yAxisInterval={6}
            segments={4}
            xLabelsOffset={RFValue(15) - 23}
            yLabelsOffset={20}
            chartConfig={chartConfig('orange')}
            //   bezier
            style={{}}
            // withHorizontalLines={false}
            withInnerLines={false}
            withOuterLines={false}
            //   withHorizontalLabels={false}
            fromZero
            renderDotContent={renderDotContent}
            getDotProps={(value, index) => ({
              r: index === 24 ? '6' : '4',
              strokeWidth: '2',
              stroke: colors['orange'].backgroundGradientTo,
            })}
          />
        </ScrollView>
      </Container>
    );
  }, [hourly]);
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

const DotView = styled.View`
  height: ${RFValue(45)}px;
  justify-content: space-between;
  position: absolute;
  top: ${({ y }) => y + RFValue(4)}px;
  left: ${({ x }) => x - RFValue(6)}px;
`;

const DotText = styled.Text`
  padding-left: 2px;
  color: white;
  font-size: ${RFValue(10)}px;
  font-weight: bold;
`;
