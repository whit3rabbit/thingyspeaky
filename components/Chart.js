import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

function ChartComponent({ type, data }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!data || !data.feeds || !Array.isArray(data.feeds)) {
      return;
    }

    const colors = [
      { backgroundColor: 'rgb(75, 192, 192)', borderColor: 'rgba(75, 192, 192, 0.2)' },
      { backgroundColor: 'rgb(255, 99, 132)', borderColor: 'rgba(255, 99, 132, 0.2)' },
      { backgroundColor: 'rgb(255, 205, 86)', borderColor: 'rgba(255, 205, 86, 0.2)' },
    ]

    const datasets = Object.keys(data.channel)
      .filter(key => key.startsWith('field'))
      .map((fieldKey, i) => ({
        label: data.channel[fieldKey],
        data: data.feeds.map(feed => feed[fieldKey]),
        fill: false,
        ...colors[i % colors.length],
      }))

    const chartData = {
      labels: data.feeds.map(feed => feed.created_at),
      datasets,
    }

    const ctx = canvasRef.current.getContext('2d');

    // If a chart instance already exists, destroy it before creating a new one
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: type,
      data: chartData,
    });
  }, [data, type]);

  return <canvas ref={canvasRef}></canvas>
}

export default ChartComponent