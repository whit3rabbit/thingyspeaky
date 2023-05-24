import { Line, Bar, Pie } from 'react-chartjs-2'

function Chart({ type, data }) {
  const chartData = {
    labels: data.feeds.map(feed => feed.created_at),
    datasets: [
      {
        label: 'Field 1',
        data: data.feeds.map(feed => feed.field1),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  }

  switch (type) {
    case 'line':
      return <Line data={chartData} />
    case 'bar':
      return <Bar data={chartData} />
    case 'pie':
      return <Pie data={chartData} />
    default:
      return null
  }
}

export default Chart
