import styles               from './styles/styles.module.scss'

import {default as React, useState, useRef, useEffect} from 'react'

// internals:
import {
    ThemableProps,
    useThemable,
}                           from './variants/themable'
import {
    Underlay,
}                           from './Underlay'
import {
    MenuGroup,
}                           from './MenuGroup'
import type {
    MenuProps,
}                           from './Menu'

// styles:
export const enum NavsidePublicVars {
    MenuSelectedIndex = '--navside-menuSelectedIndex'
}



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
    } = props;
    
    
    
    // states:
    const [menuSelectedIndex, setMenuSelectedIndex] = useState<number>(0);
    
    const firstActiveIndex = React.Children.toArray(children).findIndex((menu) => React.isValidElement<MenuProps>(menu) && (menu.props.active === true))
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
            className={`${styles.navside} ${themeClass}`}
        >
            <Underlay />
            <MenuGroup>
                {children}
            </MenuGroup>
        </nav>
    );
}
