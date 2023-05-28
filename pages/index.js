import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import ChartComponent from '../components/Chart';

export default function Home() {
  const [data, setData] = useState(null);
  const [fetchInterval, setFetchInterval] = useState(15) // Renamed from setInterval
  const [chartType, setChartType] = useState('line')
  const isFetching = useRef(true) // Changed from useState to useRef
  const intervalId = useRef(null);

  useEffect(() => {
    const apiKey = Cookies.get('apiKey')
    const channelId = Cookies.get('channelId')

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${apiKey}&results=2`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (apiKey && channelId && isFetching.current) {
      fetchData()
      intervalId.current = setInterval(fetchData, fetchInterval * 1000)
    }

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current)
      }
    }
  }, [fetchInterval])

  const toggleFetching = () => {
    isFetching.current = !isFetching.current;
    if (!isFetching.current && intervalId.current) {
      clearInterval(intervalId.current);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <select value={fetchInterval} onChange={(e) => setFetchInterval(Number(e.target.value))} className="mb-4">
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
              {data && Object.keys(data.channel)
                .filter(key => key.startsWith('field'))
                .map((fieldKey, i) => (
                 <ChartComponent key={i} type={chartType} data={data} fieldKey={fieldKey} />
              ))}
            <button onClick={toggleFetching} className="mb-4 p-2 bg-blue-500 text-white rounded">
              {isFetching.current ? 'Stop' : 'Start'}
            </button>
        </div>
      ) : (
        <h2>Please enter your API key and Channel ID in the sidebar to view data</h2>
      )}
    </div>
  )
}