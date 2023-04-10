// css-in-js lib:
import { Styles } from '@cssfn/cssfn-react'

// nextJS things:
import { Html, Head, Main, NextScript } from 'next/document'



export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <Styles />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
