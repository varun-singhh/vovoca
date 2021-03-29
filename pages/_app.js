import '../styles/globals.css'
import 'react-responsive-modal/styles.css';
import Navbar from '../components/Navbar/Navbar';
import { Provider } from 'react-redux'
import store from '../store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar/>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
