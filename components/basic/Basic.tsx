// reusable-ui components:
import {
    BasicProps,
    Basic as BasicOri,
}                           from '@reusable-ui/components'



export type { BasicProps }
export const Basic = <TElement extends Element = HTMLElement>(props: BasicProps<TElement>) => {
    return <BasicOri {...props} mainClass={props.mainClass ?? 'ljjfw'} />;
}