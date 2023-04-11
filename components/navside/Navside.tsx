import styles               from './styles/styles.module.scss'

import {default as React, useState} from 'react'

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
    // children:
    children            ?: React.ReactNode
}
export const Navside = <TElement extends Element = HTMLElement>(props: NavsideProps<TElement>): JSX.Element|null => {
    // variants:
    const themeClass = useThemable(props);
    
    
    
    // rest props:
    const {
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
    
    
    
    // jsx:
    return (
        <nav
            // styles:
            style={{
                [NavsidePublicVars.MenuSelectedIndex as any]: menuSelectedIndex,
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
