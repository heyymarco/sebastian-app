// *shared* css appearances accoss the components:
import '@/styles/shared-appearances/typos.scss'           // fonts, overflowBehavior, lineHeight
import '@/styles/shared-appearances/colors.scss'          // primary color, alternate color, success color, error color, warning color
import '@/styles/shared-appearances/borders.scss'         // border style, border width, default border color
import '@/styles/shared-appearances/border-radiuses.scss' // rounded corners
import '@/styles/shared-appearances/spacers.scss'         // margin, padding, gap

// *shared* css behaviors accoss the components:
import '@/styles/shared-behaviors/indicator.scss'         // disabled, disabled-mouse-pointer, selected/active/checked
import '@/styles/shared-behaviors/control.scss'           // focus, hover
import '@/styles/shared-behaviors/action-control.scss'    // pressed, clicked, select-mouse-pointer, button-like

// <Navside> css:
import '@/components/navside/styles/config.scss'          // navbar on side

// nextJS things:
import '@/styles/globals.css'
import type { AppProps } from 'next/app'



export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
