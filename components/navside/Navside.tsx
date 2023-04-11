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
        // bases:
        BasicProps<TElement>
{
    // animations:
    transitionInterval?: number
}
export const Navside = <TElement extends Element = HTMLElement>(props: NavsideProps<TElement>): JSX.Element|null => {
    // // // // styles:
    // // // const styleSheet = useNavsideStyleSheet();
    
    
    
    // rest props:
    const {
        // refs:
        elmRef,
        outerRef,
        
        
        
        // identifiers:
        id,
        
        
        
        // styles:
        style,
        
        
        
        // classes:
        classes,
        variantClasses,
        stateClasses,
        className,
        
        
        
        // children:
        children,
        
        
        
        // animations:
        transitionInterval = 300, // ms
    ...restBasicProps} = props;
    
    
    
    // states:
    const [menuSelectedIndex, setMenuSelectedIndex] = useState<number>(0);
    
    const firstActiveIndex = React.Children.toArray(children).findIndex((listItem) => React.isValidElement<ListItemProps>(listItem) && (listItem.props.active === true))
    const activeIndex = (firstActiveIndex >= 0) ? firstActiveIndex : 0;
    if (menuSelectedIndex !== activeIndex) {
        setMenuSelectedIndex(activeIndex);
    } // if
    
    
    
    // transitions:
    const navsideRef = useRef<TElement|null>(null);
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
        <Generic
            // refs:
            elmRef={navsideRef}
            outerRef={outerRef}
            
            
            
            // semantics:
            tag='nav'
            
            
            
            // identifiers:
            id={id}
            
            
            
            // styles:
            style={{
                [NavsidePublicVars.MenuSelectedIndex as any]: prevSelectedIndex.current,
            }}
            
            
            
            // classes:
            mainClass={props.mainClass ?? 'tbu0f'}
            classes={classes}
            variantClasses={variantClasses}
            stateClasses={stateClasses}
            className={className}
        >
            <Basic
                // other props:
                {...restBasicProps}
                
                
                
                className='underlay'
            >
                <div className='fill1'></div>
                <div className='corner1'></div>
                <div className='corner2'></div>
                <div className='void3'></div>
                <div className='corner4'></div>
                <div className='fill5'></div>
                <div className='corner5'></div>
            </Basic>
            <List
                // other props:
                {...restBasicProps}
                
                
                
                // refs:
                elmRef={elmRef}
                
                
                
                // variants:
                mild={false}
                listStyle='flat'
                
                
                
                // classes:
                className='menus'
                
                
                
                // styles:
                style={style}
                
                
                
                // behaviors:
                actionCtrl={true}
            >
                {children}
            </List>
        </Generic>
    );
}

export {
    ListItem as Menu,
}
