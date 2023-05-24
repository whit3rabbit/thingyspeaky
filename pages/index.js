import { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import Chart from '../components/Chart'

export default function Home() {
  const [data, setData] = useState(null)
  const [interval, setInterval] = useState(5)
  const [isFetching, setIsFetching] = useState(true)
  const [chartType, setChartType] = useState('line')

  useEffect(() => {
    const apiKey = Cookies.get('apiKey')
    const channelId = Cookies.get('channelId')

    if (apiKey && channelId) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${apiKey}`)
          setData(response.data)
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }

      if (isFetching) {
        fetchData()

        const intervalId = setInterval(fetchData, interval * 1000)

        return () => clearInterval(intervalId)
      }
    }
  }, [interval, isFetching])

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <select value={interval} onChange={(e) => setInterval(Number(e.target.value))} className="mb-4">
        <option value={5}>5 seconds</option>
        <option value={10}>10 seconds</option>
        <option value={15}>15 seconds</option>
        <option value={30}>30 seconds</option>
        <option value={60}>60 seconds</option>
      </select>

      <select value={chartType} onChange={(e) => setChartType(e.target.value)} className="mb-4">
        <option value="line">Line</option>
        <option value="bar">Bar</option>
        <option value="pie">Pie</option>
      </select>
      
      {data ? (
        <div>
          <h2>Data from ThingSpeak:</h2>
          <Chart type={chartType} data={data} />
            <button onClick={() => setIsFetching(!isFetching)} className="mb-4 p-2 bg-blue-500 text-white rounded">
              {isFetching ? 'Stop' : 'Start'}
            </button>
        </div>
      
      ) : (
        <h2>Please enter your API key and Channel ID in the sidebar to view data</h2>
      )}
    </div>
  )
}
