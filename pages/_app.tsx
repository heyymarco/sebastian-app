// *shared* css appearances accoss the components:
import '@/styles/shared-appearances/typos.css'           // fonts, overflowBehavior, lineHeight
import '@/styles/shared-appearances/colors.css'          // primary color, alternate color, success color, error color, warning color
import '@/styles/shared-appearances/borders.css'         // border style, border width, default border color
import '@/styles/shared-appearances/border-radiuses.css' // rounded corners
import '@/styles/shared-appearances/spacers.css'         // margin, padding, gap

// *shared* css behaviors accoss the components:
import '@/styles/shared-behaviors/indicator.css'         // disabled, disabled-mouse-pointer, selected/active/checked
import '@/styles/shared-behaviors/control.css'           // focus, hover
import '@/styles/shared-behaviors/action-control.css'    // pressed, clicked, select-mouse-pointer, button-like

// <Navside> css:
import '@/components/navside/styles/config.css'          // navbar on side

// nextJS things:
import '@/styles/globals.css'
import type { AppProps } from 'next/app'



export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
