import React from 'react';
import ReactECharts from 'echarts-for-react';

const DailyTimeTicksPlot = () => {

  // Define the chart options
  const options = {
    title: {
      text: 'Daily Time Ticks for December 2020'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: Array.from({length: 31}, (_, i) => `${i+1}`).map(day => `Dec ${day}`),
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: 'Time Ticks',
      type: 'line',
      data: Array.from({length: 31}, () => Math.floor(Math.random() * 60)),
      markLine: {
        data: [{
          type: 'average',
          name: 'Average'
        }]
      }
    }]
  };

  // Render the chart using echarts-react
  return (
    <ReactECharts
      option={options}
      style={{ height: '400px', width: '700px', backgroundColor: '#fff' }}
    />
  );
};

export default DailyTimeTicksPlot;
