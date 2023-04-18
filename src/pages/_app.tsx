import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './components/Layout'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  //setting the initial page as create-video
  useEffect(() => {
   router.push('/create-video')

  }, [])


  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
