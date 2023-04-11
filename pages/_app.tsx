// // // // css-in-js lib:
// // // import '../libs/cssfn-preload'
// // // import '@cssfn/cssfn-dom'

// *shared* css configuration accoss the components:
import '@/styles/shared-config/typos.css'
import '@/styles/shared-config/colors.css'
import '@/styles/shared-config/borders.css'
import '@/styles/shared-config/border-radiuses.css'
import '@/styles/shared-config/spacers.css'

// <Basic> css:
import '@/components/basic/styles/config.css'
import '@/components/basic/styles/styles.css'

// active/selected/checked components:
import '@/components/indicator/styles/config.css'

// interacting (hover) indications:
import '@/components/control/styles/config.css'

// actions (clicking) feedbacks:
import '@/components/action-control/styles/config.css'

// <List> css:
import '@/components/list/styles/config.css'
import '@/components/list/styles/list.css'
import '@/components/list/styles/listItem.css'
import '@/components/list/styles/listActionItem.css'

// <Navside> css:
import '@/components/navside/styles/config.css'
import '@/components/navside/styles/styles.css'

// // // // component configs & themes:
// // // import '@/theme.config'

// nextJS things:
import '@/styles/globals.css'
import type { AppProps } from 'next/app'



export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
