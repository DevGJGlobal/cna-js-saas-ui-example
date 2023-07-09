import '@/styles/globals.css'
import { AppProps } from 'next/app'
import { Link, LinkProps, SaasProvider } from '@saas-ui/react'

//export default function App({ Component, pageProps }) {
//  return <Component {...pageProps} />
//}

export default function App({ Component, pageProps } ) {
  return <SaasProvider><Component {...pageProps} /></SaasProvider>
}