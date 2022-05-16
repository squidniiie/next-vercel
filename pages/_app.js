import '../styles/globals.css'
import '../styles/auth.css'
import '../styles/chat.css'
import '../styles/index.css'
import { AuthContextProvider } from '../context'
function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
