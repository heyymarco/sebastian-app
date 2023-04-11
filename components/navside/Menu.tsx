import React from 'react'



export type ButtonType = 'button'|'submit'|'reset'
export interface MenuProps<TElement extends Element = HTMLButtonElement>
    extends
        // button:
        Omit<React.ButtonHTMLAttributes<TElement>,
            |'tag'|'role'
            
            |'type'
        >,
        
        // link:
        Omit<React.AnchorHTMLAttributes<TElement>,
            |'tag'|'role'
            
            |'type'
        >
{
    // behaviors:
    actionCtrl ?: boolean
    
    
    
    // semantics:
    tag        ?: keyof JSX.IntrinsicElements | ''
    role       ?: React.AriaRole | '' | (string & {})
    
    
    
    // actions:
    type       ?: ButtonType | (string & {})
    
    
    
    // states:
    active     ?: boolean
    
    
    
    // children:
    children   ?: React.ReactNode
}
export const Menu= <TElement extends Element = HTMLButtonElement>(props: MenuProps<TElement>): JSX.Element|null => {
    const {
        // behaviors:
        actionCtrl = true,
        
        
        
        // semantics:
        tag = (
            actionCtrl
            ? (props.href ? 'a' : 'button')
            : 'div'
        ),
        role = (
            actionCtrl
            ? (props.href ? 'link' : 'button')
            : 'presentation'
        ),
        
        
        
        // actions:
        type,
        
        
        
        // states:
        active = false,
        
        
        
        // children:
        children,
    ...restProps} = props;
    
    
    
    // jsx:
    const Tag = tag || 'div';
    return (
        <li className='menu'>
            <Tag
                // other props:
                {...restProps}
                
                
                
                // semantics:
                role={role}
                
                
                
                // actions:
                // @ts-ignore
                type={type}
                
                
                
                // classes:
                className={active ? 'active' : undefined}
            >
                {children}
            </Tag>
        </li>
    );
}