import styles               from './styles/styles.module.scss'

import React                from 'react'



export interface MenuGroupProps {
    // children:
    children?: React.ReactNode
}
export const MenuGroup = (props: MenuGroupProps): JSX.Element|null => {
    // jsx:
    return (
        <ul className={styles.menus}>
            {props.children}
        </ul>
    );
}