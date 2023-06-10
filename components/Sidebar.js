import { useState, useEffect } from 'react'
import Sidebar from 'react-sidebar'
import Cookies from 'js-cookie'
import { FiMenu, FiEye, FiEyeOff } from 'react-icons/fi'

// Pass apiKey, setApiKey, channelId, and setChannelId as props
function SidebarComponent({ apiKey, setApiKey, channelId, setChannelId }) {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showApiKey, setShowApiKey] = useState(false)
  const [rememberMe, setRememberMe] = useState(false);


  useEffect(() => {
    const savedApiKey = Cookies.get('apiKey')
    const savedChannelId = Cookies.get('channelId')

    if (savedApiKey) {
      setApiKey(savedApiKey)
    }

    if (savedChannelId) {
      setChannelId(savedChannelId)
    }
  }, [])

  const openSidebar = () => {
    setSidebarOpen(true)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the state in the parent component
    setApiKey(apiKey);
    setChannelId(channelId);

    if (rememberMe) {
      Cookies.set('apiKey', apiKey);
      Cookies.set('channelId', channelId);
    }
  };

  return (
    <Sidebar
      sidebar={
        <div className="flex flex-col items-start">
          <h2 className="mb-4">Enter your API key and Channel ID</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
          <label className="flex flex-col">
            API Key:
            <div className="relative">
              <input type={showApiKey ? "text" : "password"} value={apiKey} onChange={(e) => setApiKey(e.target.value)} className="p-2 bg-gray-800 text-white rounded" />
              <button type="button" onClick={() => setShowApiKey(!showApiKey)} className="absolute right-2 top-1/2 transform -translate-y-1/2">
                {showApiKey ? <FiEyeOff size={24} /> : <FiEye size={24} />}
              </button>
            </div>
          </label>
          <label className="flex flex-col">
            Channel ID:
            <input type="text" value={channelId} onChange={(e) => setChannelId(e.target.value)} className="p-2 bg-gray-800 text-white rounded" />
          </label>
            <div>
              <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>          
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
