import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex justify-center items-center">
      <Sidebar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
