// reusable-ui components:
import {
    ListItemProps,
    ListItem as ListItemOri,
}                           from '@reusable-ui/components'



export type { ListItemProps }
export const ListItem = <TElement extends Element = HTMLElement>(props: ListItemProps<TElement>) => {
    return <ListItemOri {...props} mainClass={`hs1wz ${props.actionCtrl ? 'utzaw' : ''}`} />;
}