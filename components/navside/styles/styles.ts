// cssfn:
import {
    // writes css in javascript:
    states,
    style,
    
    
    
    // reads/writes css variables configuration:
    usesCssProps,
    
    
    
    // writes complex stylesheets in simpler way:
    watchChanges,
    memoizeStyle,
}                           from '@cssfn/core'                  // writes css in javascript

// reusable-ui core:
import {
    // background stuff of UI:
    usesBackground,
    
    
    
    // foreground (text color) stuff of UI:
    usesForeground,
    
    
    
    // border (stroke) stuff of UI:
    usesBorder,
    
    
    
    // ring (focus indicator) color of UI:
    usesRing,
    
    
    
    // animation stuff of UI:
    usesAnimation,
    
    
    
    // padding (inner spacing) stuff of UI:
    usesPadding,
    
    
    
    // size options of UI:
    usesResizable,
    
    
    
    // color options of UI:
    usesThemable,
    
    
    
    // gradient variant of UI:
    usesGradientable,
    
    
    
    // outlined (background-less) variant of UI:
    usesOutlineable,
    
    
    
    // mild (soft color) variant of UI:
    usesMildable,
    
    
    
    // nude variant of UI:
    usesNudible,
}                           from '@reusable-ui/core'            // a set of reusable-ui packages which are responsible for building any component

// reusable-ui components:
import {
    // styles:
    onBasicStylesChange,
    usesBasicLayout,
    usesBasicVariants,
}                           from '@reusable-ui/basic'           // a base component

// internals:
import {
    // configs:
    navsides,
// }                           from './config.js'   /* when exported to external package */
}                           from './config'         /* when inside nextJs app */



// styles:
const menuItemOuterHeight = '3rem';
const menuItemInnerHeight = '1.5rem';
export const usesIndicatorLayout = () => {
    // dependencies:
    
    // features:
    const {borderRule    , borderVars    } = usesBorder(navsides);
    const {paddingRule   , paddingVars   } = usesPadding(navsides);
    
    
    
    return style({
        // layouts:
        ...usesBasicLayout(),
        ...style({
            // layouts:
            display: 'grid',
            gridTemplate: [[
                '"..... ....... ....... ........"', navsides.paddingBlock,
                '"..... ....... ....... ........"', `calc(${menuItemOuterHeight} * 3)`,
                '"..... fill1a  fill1b   corner1"', navsides.borderRadius,
                '"..... corner2 ....... ........"', navsides.borderRadius,
                '"..... void3   ....... ........"', menuItemInnerHeight,
                '"..... corner4 ....... ........"', navsides.borderRadius,
                '"..... fill5a  fill5b   corner5"', navsides.borderRadius,
                '"..... ....... ....... ........"', 'auto',
                '"..... ....... ....... ........"', navsides.paddingBlock,
                '/',
                navsides.paddingInline, navsides.borderRadius, 'auto', navsides.borderRadius,
            ]],
            
            
            
            // customize:
            ...usesCssProps(navsides), // apply config's cssProps
            
            
            
            // borders:
            border                 : borderVars.border,
            borderStartStartRadius : borderVars.borderStartStartRadius,
            borderStartEndRadius   : borderVars.borderStartEndRadius,
            borderEndStartRadius   : borderVars.borderEndStartRadius,
            borderEndEndRadius     : borderVars.borderEndEndRadius,
            
            
            
            // spacings:
            paddingInline : paddingVars.paddingInline,
            paddingBlock  : paddingVars.paddingBlock,
        }),
        
        
        
        // features:
        ...borderRule(),     // must be placed at the last
        ...paddingRule(),    // must be placed at the last
    });
};

export const usesIndicatorVariants = () => {
    // dependencies:
    
    // variants:
    const {resizableRule} = usesResizable(navsides);
    
    
    
    return style({
        // variants:
        ...usesBasicVariants(),
        ...resizableRule(),
    });
};

export default () => style({
    // layouts:
    ...usesIndicatorLayout(),
    
    // variants:
    ...usesIndicatorVariants(),
});
