// reusable-ui components:
import {
    ListProps,
    List as ListOri,
}                           from '@reusable-ui/components'



export type { ListProps }
export const List = <TElement extends Element = HTMLElement>(props: ListProps<TElement>) => {
    return <ListOri {...props} mainClass={props.mainClass ?? 'dtw9l'} />;
}
