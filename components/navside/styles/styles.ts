// cssfn:
import {
    // writes css in javascript:
    states,
    style,
    vars,
    children,
    descendants,
    
    
    
    // reads/writes css variables configuration:
    usesCssProps,
    
    
    
    // strongly typed of css variables:
    cssVars,
    switchOf,
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



// vars:
interface NavsideVars {
    totalMenuInlineSize : any
    totalMenuBlockSize  : any
    
    restMenuInlineSize : any
    restMenuBlockSize  : any
}
const [navsideVars] = cssVars<NavsideVars>();



// styles:
const menuItemOuterHeight = '3rem';
// const menuItemInnerHeight = '1.5rem';
export const usesIndicatorLayout = () => {
    // dependencies:
    
    // features:
    const {borderRule    , borderVars    } = usesBorder(navsides);
    const {paddingRule   , paddingVars   } = usesPadding(navsides);
    
    
    const polygonAccuracy = 10;
    return style({
        // layouts:
        ...usesBasicLayout(),
        ...vars({
            [navsideVars.totalMenuInlineSize] : `calc(${navsides.menuInlineSize} + (2 * ${navsides.menuMarginInline}))`,
            [navsideVars.totalMenuBlockSize ] : `calc(${navsides.menuBlockSize } + (2 * ${navsides.menuMarginBlock }))`,
            
            [navsideVars.restMenuInlineSize ] : `calc(${navsideVars.totalMenuInlineSize} - ${navsides.borderRadius})`,
            [navsideVars.restMenuBlockSize  ] : `calc(${navsideVars.totalMenuBlockSize}  - ${navsides.borderRadius})`,
        }),
        ...style({
            // layouts:
            display: 'grid',
            gridTemplate: [[
                '"..... ....... ....... ........"', navsides.paddingBlock,
                '"..... ....... ....... ........"', `calc(${menuItemOuterHeight} * 3)`,
                '"..... fill1a  fill1b   corner1"', navsides.borderRadius,
                '"..... corner2 ....... ........"', navsides.borderRadius,
                '"..... void3   ....... ........"', navsideVars.restMenuBlockSize,
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
                        ...[...new Array(polygonAccuracy)].map((_, step): string =>
                            `calc(100% - ${navsides.borderRadius} + (${navsides.borderRadius} * ${Math.cos((step / polygonAccuracy) * Math.PI/2)})) calc((${navsides.borderWidth} * 2) + ${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + (${navsides.borderRadius} * ${Math.sin((step / polygonAccuracy) * Math.PI/2)}))`,
                        ),
                        `calc(100% - ${navsides.borderRadius}) calc((${navsides.borderWidth} * 2) + ${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + ${navsides.borderRadius})`,
                        `calc((${navsides.borderWidth} * 2) + ${navsides.paddingInline} + ${navsides.borderRadius}) calc((${navsides.borderWidth} * 2) + ${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + ${navsides.borderRadius})`,
                        ...[...new Array(polygonAccuracy)].map((_, step): string =>
                            `calc((${navsides.borderWidth} * 2) + ${navsides.paddingInline} + ${navsides.borderRadius} + ((${navsides.borderRadius} - ${navsides.borderWidth}) * ${Math.sin(((step / polygonAccuracy) + 2) * Math.PI/2)})) calc(${navsides.borderWidth} + ${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + (2 * ${navsides.borderRadius}) + ((${navsides.borderRadius} - ${navsides.borderWidth}) * ${Math.cos(((step / polygonAccuracy) + 2) * Math.PI/2)}))`,
                        ),
                        `calc((${navsides.borderWidth} * 3) + ${navsides.paddingInline}) calc((${navsides.borderWidth} * 2) + ${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + (2 * ${navsides.borderRadius}))`,
                        `calc((${navsides.borderWidth} * 3) + ${navsides.paddingInline}) calc(${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + (2 * ${navsides.borderRadius}) + ${navsideVars.restMenuBlockSize})`,
                        ...[...new Array(polygonAccuracy)].map((_, step): string =>
                            `calc((${navsides.borderWidth} * 3) + ${navsides.paddingInline} + ((${navsides.borderRadius} - ${navsides.borderWidth}) * ${1 - Math.sin(((step / polygonAccuracy) + 1) * Math.PI/2)})) calc(${navsides.borderWidth} + ${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + (2 * ${navsides.borderRadius}) + ${navsideVars.restMenuBlockSize} + ((${navsides.borderRadius} - ${navsides.borderWidth}) * ${1 - Math.cos(((step / polygonAccuracy) + 1) * Math.PI/2) - 1}))`,
                        ),
                        `calc((${navsides.borderWidth} * 2) + ${navsides.paddingInline} + ${navsides.borderRadius}) calc(${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + (3 * ${navsides.borderRadius}) + ${navsideVars.restMenuBlockSize})`,
                        `calc(100% - ${navsides.borderRadius}) calc(${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + (3 * ${navsides.borderRadius}) + ${navsideVars.restMenuBlockSize})`,
                        ...[...new Array(polygonAccuracy)].map((_, step): string =>
                            `calc(100% - ${navsides.borderRadius} + (${navsides.borderRadius} * ${Math.cos(((step / polygonAccuracy) + 3) * Math.PI/2)})) calc(${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + (4 * ${navsides.borderRadius}) + ${navsideVars.restMenuBlockSize} + (${navsides.borderRadius} * ${Math.sin(((step / polygonAccuracy) + 3) * Math.PI/2)}))`,
                        ),
                        `100% calc(${navsides.paddingBlock} + calc(${menuItemOuterHeight} * 3) + (4 * ${navsides.borderRadius}) + ${navsideVars.restMenuBlockSize})`,
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
