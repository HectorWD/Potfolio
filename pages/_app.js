import '../styles/globals.css'
import Layout from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AnimatePresence>
  )
}

export default MyApp
