import {default as React, useState} from 'react'

// cssfn:
import {
    // style sheets:
    dynamicStyleSheet,
}                           from '@cssfn/cssfn-react'           // writes css in react hook

// reusable-ui core:
import {
    // react helper hooks:
    useEvent,
    useMergeEvents,
}                           from '@reusable-ui/core'

// reusable-ui components:
import {
    BasicProps,
    Basic,
    
    List,
    ListItem,
    Generic,
    
    ListItemProps,
    ListItemComponentProps,
}                           from '@reusable-ui/components'

// styles:
import navsideStyleSheet    from './styles/styles'
import { navsidePublicVars } from './styles/vars';



// styles:
export const useNavsideStyleSheet = dynamicStyleSheet(
    // dynamic load:
    // () => import(/* webpackPrefetch: true */ './styles/styles.js')   /* when exported to external package */
    // () => import(/* webpackPrefetch: true */ './styles/styles')         /* when inside nextJs app */
    
    // static load:
    navsideStyleSheet
, { id: 'mvgvz3bsqe' }); // a unique salt for SSR support, ensures the server-side & client-side have the same generated class names



interface WithInterceptorProps<TElement extends Element = HTMLElement>
    extends
        // bases:
        Omit<ListItemProps<TElement>,
            |'onClick'
        >,
        
        // components:
        Required<ListItemComponentProps<TElement>>
{
    // positions:
    listIndex : number,
    
    
    
    // handlers:
    onClick   : (listIndex: number) => void
}
const WithInterceptor = <TElement extends Element = HTMLElement>(props: WithInterceptorProps<TElement>) => {
    // rest props:
    const {
        // positions:
        listIndex,
        
        
        
        // components:
        listItemComponent,
        
        
        
        // handlers:
        onClick,
    ...restListItemProps} = props;
    
    
    
    // handlers:
    const handleClickInternal = useEvent<React.MouseEventHandler<TElement>>((_event) => {
        onClick?.(listIndex);
    });
    const handleClick                = useMergeEvents(
        // preserves the original `onClick` from `listItemComponent`:
        listItemComponent.props.onClick,
        
        
        
        // forwards the original `onClick` from `props`:
        handleClickInternal,
    );
    
    
    
    // jsx:
    /* <ListItem> */
    return React.cloneElement<ListItemProps<TElement>>(listItemComponent,
        // props:
        {
            // other props:
            ...restListItemProps,
            ...listItemComponent.props, // overwrites restListItemProps (if any conflics)
            
            
            
            // states:
            // expanded         : accordionItemComponent.props.expanded ?? expanded,
            
            
            
            // handlers:
            onClick : handleClick,
        },
    );
}




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
    const [menuSelectedIndex, setMenuSelectedIndex] = useState<number>(0)
    
    
    
    // handlers:
    const handleListItemClick = useEvent((listIndex: number) => {
        setMenuSelectedIndex(listIndex);
    });
    
    
    
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
                {React.Children.map(children, (listItem, listIndex) => {
                    // conditions:
                    if (!React.isValidElement<ListItemProps<Element>>(listItem)) return listItem;
                    
                    
                    
                    // rest props:
                    const {
                        // states:
                        onClick : listItemOnClick, // sanitize the listItem's [onClick] prop (if exist), so it wouldn't collide with <WithInterceptor>'s [onClick] prop
                    ...restListItemProps} = listItem.props;
                    
                    
                    
                    // jsx:
                    return (
                        <WithInterceptor<Element>
                            // other props:
                            {...restListItemProps} // steals (almost) all listItem's props, so the <List> can recognize the <WithInterceptor> as <ListItem>
                            
                            
                            
                            // positions:
                            listIndex={listIndex}
                            
                            
                            
                            // components:
                            listItemComponent={
                                // clone listItem element with (almost) blank props:
                                <listItem.type
                                    // identifiers:
                                    key={listItem.key}
                                    
                                    
                                    
                                    // states:
                                    // restore the sanitized listItem's [onClick] prop (if exist):
                                    {...(('onClick' in listItem.props) ? { onClick: listItemOnClick } : null)}
                                />
                            }
                            
                            
                            
                            // handlers:
                            onClick={handleListItemClick}
                        />
                    );
                })}
            </List>
        </Generic>
    );
}

export {
    ListItem as Menu,
}
