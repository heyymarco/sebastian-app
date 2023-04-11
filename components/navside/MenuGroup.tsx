import React from 'react'



export interface MenuGroupProps {
    // children:
    children?: React.ReactNode
}
export const MenuGroup = (props: MenuGroupProps): JSX.Element|null => {
    // jsx:
    return (
        <ul className='menus'>
            {props.children}
        </ul>
    );
}