import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

function ChartComponent({ type, data, fieldKey }) {
  const chartRef = React.createRef();

  // Calculate min and max values from your data
  const dataValues = data.feeds.map(feed => {
    const value = Number(feed[fieldKey]);
    if (!isFinite(value)) {
      console.log('Invalid value for fieldKey:', fieldKey, 'in feed:', feed);
      return 0; // or any default value
    }
    return value;
  });

  //console.log('Data Values:', dataValues); // Log the data values

  let minValue = Math.min(...dataValues);
  let maxValue = Math.max(...dataValues);

  // Check if minValue and maxValue are valid numbers
  if (!isFinite(minValue)) {
    minValue = 0; // or any default minimum value
  }
  if (!isFinite(maxValue)) {
    maxValue = 1; // or any default maximum value
  }

  // Check if minValue and maxValue are the same
  if (minValue === maxValue) {
    // Subtract 1 from minValue and add 1 to maxValue
    minValue -= 1;
    maxValue += 1;
}

  useEffect(() => {
    //console.log('data:', data);
    //console.log('type:', type);
    //console.log('fieldKey:', fieldKey);
  
    if (!data || !data.feeds || !Array.isArray(data.feeds)) {
      console.log('Invalid data or feeds not an array');
      return;
    }
  
    if (data.feeds.length === 0) {
      console.log('No feeds to plot');
      return;
    }
  
    data.feeds.forEach((feed, index) => {
      if (!feed.hasOwnProperty(fieldKey)) {
        console.log(`Feed at index ${index} does not have property ${fieldKey}`);
      }
      if (isNaN(Date.parse(feed.created_at))) {
        console.log(`Feed at index ${index} has invalid created_at date: ${feed.created_at}`);
      }
    });

    let chart;

    try {
      const series = [{
        name: data.channel[fieldKey],
        data: data.feeds.map(feed => {
          const value = Number(feed[fieldKey]);
          if (!isFinite(value)) {
            console.log('Invalid value for fieldKey:', fieldKey, 'in feed:', feed);
            return 0; // or any default value
          }
          return value;
        }),
      }];

      //console.log('Series:', series); // Log the series data

      const options = {
        series: series,
        chart: {
          height: 350,
          type: type,
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: data.channel[fieldKey],
          align: 'left'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          },
        },
        markers: {
          size: 1
        },
        xaxis: {
          //categories: data.feeds.map(feed => new Date(feed.created_at).getTime()),
          categories: data.feeds.map(feed => new Date(feed.created_at).toLocaleString()),
        },
        yaxis: {
          title: {
            text: data.channel[fieldKey]
          },
          min: minValue,
          max: maxValue
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      };


      //console.log('Options:', options); // Log the chart options

      chart = new ApexCharts(chartRef.current, options);
      chart.render();
    } catch (error) {
      console.error('Error creating or rendering chart:', error);
      return;
    }

    // Cleanup function to destroy chart on unmount
    return () => {
      try {
        if (chart) {
          chart.destroy();
        }
      } catch (error) {
        console.error('Error destroying chart:', error);
      }
    };
  }, [data, type, fieldKey]);

  return <div ref={chartRef}></div>
}

export default ChartComponent;
