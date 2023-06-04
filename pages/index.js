import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic';

// Dynamically import ChartComponent with SSR disabled
const ChartComponent = dynamic(
  () => import('../components/Chart'),
  { ssr: false }
);

export default function Home() {
  const [data, setData] = useState(null);
  const [fetchInterval, setFetchInterval] = useState(15); // Set default interval to 15 seconds
  const [isFetching, setIsFetching] = useState(true);
  const [chartType, setChartType] = useState('line');
  const intervalId = useRef(null);

  useEffect(() => {
    const apiKey = Cookies.get('apiKey');
    const channelId = Cookies.get('channelId');

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${apiKey}&results=5`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (apiKey && channelId && isFetching) {
      fetchData();
      intervalId.current = setInterval(fetchData, fetchInterval * 1000);
    }

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [fetchInterval, isFetching]);

  const toggleFetching = () => {
    if (isFetching && intervalId.current) {
      clearInterval(intervalId.current);
    }
    setIsFetching(!isFetching);
  };
  
  return (
    <div className="flex flex-col justify-center items-center m-4">
      
      {data ? (
        <div>
            <h2>Data from ThingSpeak:</h2>
              {data && Object.keys(data.channel)
                .filter(key => key.startsWith('field'))
                .map((fieldKey, i) => (
                 <ChartComponent key={i} type={chartType} data={data} fieldKey={fieldKey} />
              ))}
                
      <select value={fetchInterval} onChange={(e) => {
        //console.log('fetchInterval onChange called with value:', e.target.value);
        setFetchInterval(Number(e.target.value));
      }} className="mb-4">
        <option value={5}>5 seconds</option>
        <option value={10}>10 seconds</option>
        <option value={15}>15 seconds</option>
        <option value={30}>30 seconds</option>
        <option value={60}>60 seconds</option>
      </select>
      
      <select value={chartType} onChange={(e) => {
        //console.log('chartType onChange called with value:', e.target.value);
        setChartType(e.target.value);
      }} className="mb-4">
        <option value="line">Line</option>
        <option value="bar">Bar</option>
      </select>
          
      <button onClick={toggleFetching} className="mb-4 p-2 bg-blue-500 text-white rounded">
        {isFetching ? 'Stop' : 'Start'}
      </button>
        </div>
      ) : (
        <h2>Please enter your API key and Channel ID in the sidebar to view data</h2>
      )}
    </div>
  )
}