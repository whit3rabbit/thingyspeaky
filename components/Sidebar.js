import { useState } from 'react'
import Sidebar from 'react-sidebar'
import Cookies from 'js-cookie'
import { FiMenu } from 'react-icons/fi'

function SidebarComponent() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [apiKey, setApiKey] = useState('')
  const [channelId, setChannelId] = useState('')

  const openSidebar = () => {
    setSidebarOpen(true)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    Cookies.set('apiKey', apiKey)
    Cookies.set('channelId', channelId)
  }

  return (
    <Sidebar
      sidebar={
        <div className="flex flex-col items-start">
          <h2 className="mb-4">Enter your API key and Channel ID</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
          <label className="flex flex-col">
            API Key:
            <input type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)} className="p-2 bg-gray-800 text-white rounded" />
          </label>
          <label className="flex flex-col">
            Channel ID:
            <input type="text" value={channelId} onChange={(e) => setChannelId(e.target.value)} className="p-2 bg-gray-800 text-white rounded" />
          </label>
            <button type="submit" className="mt-4">Submit</button>
          </form>
        </div>
      }
      open={sidebarOpen}
      onSetOpen={setSidebarOpen}
      styles={{ sidebar: { background: '#2d3748', color: 'white', padding: '2em' } }}
    >
      <button onClick={openSidebar} className="mb-4 p-2 bg-blue-500 text-white rounded">
        <FiMenu size={24} />
      </button>
    </Sidebar>
  )
}

export default SidebarComponent