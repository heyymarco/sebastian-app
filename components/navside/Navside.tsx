import {default as React, useState, useRef, useEffect} from 'react'

// // // // cssfn:
// // // import {
// // //     // style sheets:
// // //     dynamicStyleSheet,
// // // }                           from '@cssfn/cssfn-react'           // writes css in react hook

// reusable-ui components:
import {
    Generic,
    
    ListItemProps,
}                           from '@reusable-ui/components'

// neighbour components:
import {
    BasicProps,
    Basic,
}                           from '../basic'
import {
    List,
    ListItem,
}                           from '../list'

// internals:
import {
    ThemableProps,
    useThemable,
}                           from './variants/themable'
import {
    Underlay,
}                           from './Underlay'

// styles:
// // // import navsideStyleSheet    from './styles/styles'
// // // import { navsidePublicVars } from './styles/vars'
export const enum NavsidePublicVars {
    MenuSelectedIndex = '--navside-menuSelectedIndex'
}



// // // // styles:
// // // export const useNavsideStyleSheet = dynamicStyleSheet(
// // //     // dynamic load:
// // //     // () => import(/* webpackPrefetch: true */ './styles/styles.js')   /* when exported to external package */
// // //     // () => import(/* webpackPrefetch: true */ './styles/styles')         /* when inside nextJs app */
// // //     
// // //     // static load:
// // //     navsideStyleSheet
// // // , { id: 'mvgvz3bsqe' }); // a unique salt for SSR support, ensures the server-side & client-side have the same generated class names



export interface NavsideProps<TElement extends Element = HTMLElement>
    extends
        ThemableProps
{
    // animations:
    transitionInterval  ?: number
    
    
    
    // children:
    children            ?: React.ReactNode
}
export const Navside = <TElement extends Element = HTMLElement>(props: NavsideProps<TElement>): JSX.Element|null => {
    // variants:
    const themeClass = useThemable(props);
    
    
    
    // rest props:
    const {
        // animations:
        transitionInterval = 300, // ms
        
        
        
        // children:
        children,
    ...restBasicProps} = props;
    
    
    
    // states:
    const [menuSelectedIndex, setMenuSelectedIndex] = useState<number>(0);
    
    const firstActiveIndex = React.Children.toArray(children).findIndex((listItem) => React.isValidElement<ListItemProps>(listItem) && (listItem.props.active === true))
    const activeIndex = (firstActiveIndex >= 0) ? firstActiveIndex : 0;
    if (menuSelectedIndex !== activeIndex) {
        setMenuSelectedIndex(activeIndex);
    } // if
    
    
    
    // transitions:
    const navsideRef = useRef<HTMLElement>(null);
    const prevSelectedIndex = useRef<number>(menuSelectedIndex);
    const menuSelectedIndexProp = NavsidePublicVars.MenuSelectedIndex;
    useEffect(() => {
        // conditions:
        const navsideElm = navsideRef.current as Element as HTMLElement;
        if (!navsideElm) return;
        if (prevSelectedIndex.current === menuSelectedIndex) return;
        
        
        
        // handlers:
        const transitionSpeed = (menuSelectedIndex - prevSelectedIndex.current) / transitionInterval;
        let previousTime : number|undefined = undefined;
        const handleAnimate : FrameRequestCallback = (currentTime) => {
            if (previousTime === undefined) {
                previousTime = currentTime;
                cancelAnimating = requestAnimationFrame(handleAnimate);
                return;
            } // if
            const deltaTime = currentTime - previousTime;
            previousTime = currentTime;
            
            const remainingTransition = menuSelectedIndex - prevSelectedIndex.current;
            let deltaTransition = transitionSpeed * deltaTime;
            if (remainingTransition >= 0) {
                deltaTransition = Math.min(Math.max(0, deltaTransition), remainingTransition);
            }
            else {
                deltaTransition = Math.max(Math.min(0, deltaTransition), remainingTransition)
            } // if
            prevSelectedIndex.current += deltaTransition;
            
            
            
            if (Math.abs(menuSelectedIndex - prevSelectedIndex.current) > 0.01) {
                cancelAnimating = requestAnimationFrame(handleAnimate);
            }
            else {
                prevSelectedIndex.current = menuSelectedIndex;
            } // if
            
            
            
            navsideElm.style.setProperty(menuSelectedIndexProp, `${prevSelectedIndex.current}`);
        };
        
        
        
        // setups:
        let cancelAnimating = requestAnimationFrame(handleAnimate);
        
        
        
        // cleanups:
        return () => {
            cancelAnimationFrame(cancelAnimating);
        };
    }, [menuSelectedIndex, menuSelectedIndexProp, transitionInterval]);
    
    
    
    // jsx:
    return (
        <nav
            // refs:
            ref={navsideRef}
            
            
            
            // styles:
            style={{
                [NavsidePublicVars.MenuSelectedIndex as any]: prevSelectedIndex.current,
            }}
            
            
            
            // classes:
            className={`navside ${themeClass}`}
        >
            <Underlay />
            <List
                // other props:
                {...restBasicProps}
                
                
                
                // variants:
                mild={false}
                listStyle='flat'
                
                
                
                // classes:
                className='menus'
                
                
                
                // behaviors:
                actionCtrl={true}
            >
                {children}
            </List>
        </nav>
    );
}

export {
    ListItem as Menu,
}
