import 'antd/dist/antd.css';
import { useRouter } from 'next/router';
import { AppProvider } from './../context/app.context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AppProvider query={router.query}>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
