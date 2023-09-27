import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Commonlayout from '../components/layout/commonlayout';

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Commonlayout>
     <Component {...pageProps} />   
  </Commonlayout>
  
  </>);
}

export default MyApp
