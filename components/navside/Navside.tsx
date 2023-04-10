import {default as React, useState} from 'react'

// cssfn:
import {
    // style sheets:
    dynamicStyleSheet,
}                           from '@cssfn/cssfn-react'           // writes css in react hook

// reusable-ui components:
import {
    BasicProps,
    Basic,
    
    List,
    ListItem,
    Generic,
    
    ListItemProps,
}                           from '@reusable-ui/components'

// styles:
import navsideStyleSheet    from './styles/styles'
import { navsidePublicVars } from './styles/vars'



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
    
    
    
    // states:
    const [menuSelectedIndex, setMenuSelectedIndex] = useState<number>(0);
    
    const firstActiveIndex = React.Children.toArray(children).findIndex((listItem) => React.isValidElement<ListItemProps>(listItem) && (listItem.props.active === true))
    const activeIndex = (firstActiveIndex >= 0) ? firstActiveIndex : 0;
    if (menuSelectedIndex !== activeIndex) {
        setMenuSelectedIndex(activeIndex);
    } // if
    
    
    
    // jsx:
    return (
        <Generic
            // semantics:
            tag='nav'
            
            
            
            // classes:
            mainClass={props.mainClass ?? styleSheet.main}
            style={{
                [navsidePublicVars.menuSelectedIndex.slice(4, -1)]: menuSelectedIndex,
            }}
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
        </Generic>
    );
}

export {
    ListItem as Menu,
}
