import '../styles/globals.css'
import 'react-responsive-modal/styles.css';
import Navbar from '../components/Navbar/Navbar';
import { Provider } from 'react-redux'
import store from '../store'
import { useMediaQuery } from 'react-responsive'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollButton from '../components/scrollToTop/ScrollButton'

const Tablet = () => {
  const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 1226 })
  return isTablet
}
const closeIcon = (
  <svg style={{display:"none"}}>
  </svg>
);
function MyApp({ Component, pageProps }) {
  return (
    Tablet()?(<>
    <Modal open={true} onClose={false} center closeIcon={closeIcon}>
<h2>This Web service is not available in Tablet mode :(</h2>
</Modal>
    </>) : (<Provider store={store}>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={true}
      pauseOnHover={false}
      />
        <Navbar />
        <ScrollButton/>
      <Component {...pageProps} />
    </Provider>)
    
  )
}

export default MyApp
