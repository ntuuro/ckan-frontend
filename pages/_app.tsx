import 'antd/dist/reset.css'
import '../styles/globals.css'
import '../styles/nprogress.css'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { store } from '../lib/redux/store'
import AppLoadingLoader from '../components/Loaders/AppLoadingLoader'

const App = ({ Component, pageProps }: any) => {
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <>
      <Head>
        <title>Data.gov.rw</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
  loading: () => <AppLoadingLoader />,
})
