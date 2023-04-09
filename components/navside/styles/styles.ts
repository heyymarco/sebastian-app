// cssfn:
import {
    // writes css in javascript:
    states,
    style,
    children,
    descendants,
    
    
    
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
            ...children(['.fill1b', '.corner1', '.corner2', '.void3', '.corner4', '.fill5b', '.corner5'], {
                border: 'inherit',
                position: 'relative',
                insetInlineStart: navsides.borderWidth,
            }),
            ...children(['.fill1b', '.corner1'], {
                insetBlockStart: navsides.borderWidth,
            }),
            ...children(['.fill5b', '.corner5'], {
                insetBlockEnd: navsides.borderWidth,
            }),
            ...children('.fill1b', {
                gridArea: 'fill1b',
                borderInline: 0,
                borderBlockStart: 0,
            }),
            ...children('.corner1', {
                gridArea: 'corner1',
                borderInlineStart: 0,
                borderBlockStart: 0,
                borderEndEndRadius: navsides.borderRadius,
            }),
            ...children('.corner2', {
                gridArea: 'corner2',
                borderInlineEnd: 0,
                borderBlockEnd: 0,
                borderStartStartRadius: navsides.borderRadius,
            }),
            ...children('.void3', {
                gridArea: 'void3',
                borderInlineEnd: 0,
                borderBlock: 0,
            }),
            ...children('.corner4', {
                gridArea: 'corner4',
                borderInlineEnd: 0,
                borderBlockStart: 0,
                borderEndStartRadius: navsides.borderRadius,
            }),
            ...children('.fill5b', {
                gridArea: 'fill5b',
                borderInline: 0,
                borderBlockEnd: 0,
            }),
            ...children('.corner5', {
                gridArea: 'corner5',
                borderInlineStart: 0,
                borderBlockEnd: 0,
                borderStartEndRadius: navsides.borderRadius,
            }),
            clipPath: [
                [`polygon(`,
                    [
                        `0 0`,
                        `100% 0`,
                        `100% calc((${navsides.borderWidth} * 2) + ${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3))`,
                        `calc(100% - ${navsides.borderRadius}) calc((${navsides.borderWidth} * 2) + ${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + ${navsides.borderRadius})`,
                        `calc((${navsides.borderWidth} * 2) + ${navsides.paddingInline} + ${navsides.borderRadius}) calc((${navsides.borderWidth} * 2) + ${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + ${navsides.borderRadius})`,
                        `calc((${navsides.borderWidth} * 3) + ${navsides.paddingInline}) calc((${navsides.borderWidth} * 2) + ${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + (2 * ${navsides.borderRadius}))`,
                        `calc((${navsides.borderWidth} * 3) + ${navsides.paddingInline}) calc(${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + (2 * ${navsides.borderRadius}) + ${menuItemInnerHeight})`,
                        `calc((${navsides.borderWidth} * 2) + ${navsides.paddingInline} + ${navsides.borderRadius}) calc(${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + (3 * ${navsides.borderRadius}) + ${menuItemInnerHeight})`,
                        `calc(100% - ${navsides.borderRadius}) calc(${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + (3 * ${navsides.borderRadius}) + ${menuItemInnerHeight})`,
                        `100% calc(${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + (4 * ${navsides.borderRadius}) + ${menuItemInnerHeight})`,
                        `100% 100%`,
                        `0 100%`,
                    ].join(','),
                `)`],
            ],
            
            
            
            // customize:
            ...usesCssProps(navsides), // apply config's cssProps
            
            
            
            // borders:
            border                 : borderVars.border,
            borderStartStartRadius : borderVars.borderStartStartRadius,
            borderStartEndRadius   : borderVars.borderStartEndRadius,
            borderEndStartRadius   : borderVars.borderEndStartRadius,
            borderEndEndRadius     : borderVars.borderEndEndRadius,
            
            
            
            // spacings:
            paddingInline : 0,
            paddingBlock  : 0,
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
