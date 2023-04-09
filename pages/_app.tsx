import '../libs/cssfn-preload'
import '@cssfn/cssfn-dom'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import '@/theme.config'



export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
