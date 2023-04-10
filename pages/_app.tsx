// css-in-js lib:
import '../libs/cssfn-preload'
import '@cssfn/cssfn-dom'

// component configs & themes:
import '@/theme.config'

// nextJS things:
import '@/styles/globals.css'
import type { AppProps } from 'next/app'



export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
