import {default as React} from 'react'

// cssfn:
import {
    // style sheets:
    dynamicStyleSheet,
}                           from '@cssfn/cssfn-react'           // writes css in react hook

// reusable-ui components:
import {
    BasicProps,
    Basic,
}                           from '@reusable-ui/components'

// styles:
import navsideStyleSheet    from './styles/styles'



// styles:
export const useNavsideStyleSheet = dynamicStyleSheet(
    // dynamic load:
    // () => import(/* webpackPrefetch: true */ './styles/styles.js')   /* when exported to external package */
    // () => import(/* webpackPrefetch: true */ './styles/styles')         /* when inside nextJs app */
    
    // static load:
    navsideStyleSheet
, { id: 'mvgvz3bsqe' }); // a unique salt for SSR support, ensures the server-side & client-side have the same generated class names




export interface NavsideProps<TElement extends Element = HTMLElement>
    extends
        // bases:
        BasicProps<TElement>
{
}
export const Navside = (props: NavsideProps): JSX.Element|null => {
    // styles:
    const styleSheet = useNavsideStyleSheet();
    
    
    
    // rest props:
    const {
        // children:
        children,
    ...restBasicProps} = props;
    
    
    
    // jsx:
    return (
        <Basic
            // other props:
            {...restBasicProps}
            
            
            
            // classes:
            mainClass={props.mainClass ?? styleSheet.main}
        >
            <p>test</p>
        </Basic>
    );
}