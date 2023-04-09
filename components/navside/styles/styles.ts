// cssfn:
import {
    // writes css in javascript:
    states,
    style,
    vars,
    rule,
    children,
    descendants,
    atGlobal,
    
    
    
    // reads/writes css variables configuration:
    usesCssProps,
    usesPrefixedProps,
    
    
    
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
    navsides, navsideValues,
// }                           from './config.js'   /* when exported to external package */
}                           from './config'         /* when inside nextJs app */



// vars:
interface NavsidePublicVars {
    menuSelectedIndex  : any
}
const [navsidePublicVars] = cssVars<NavsidePublicVars>({ prefix: 'navside', minify: false });

interface NavsideVars {
    menuShiftPos       : any
    
    restMenuInlineSize : any
    restMenuBlockSize  : any
}
const [navsideVars] = cssVars<NavsideVars>();



// styles:
// const menuItemInnerHeight = '1.5rem';
const usesNavsideUnderlayLayout = () => {
    // dependencies:
    
    // features:
    const {borderVars} = usesBorder();
    
    
    
    const polygonAccuracy = 10;
    return style({
        // layouts:
        ...usesBasicLayout(),
        ...style({
            // positions:
            gridArea: '1/1/-1/-1',
            
            
            
            // layouts:
            display: 'grid',
            gridTemplate: [[
                '"..... ....... ....... ........"', navsides.paddingBlock,
                '"..... ....... ....... ........"', navsideVars.menuShiftPos,
                '"..... ....... fill1    corner1"', navsides.borderRadius,
                '"..... corner2 ....... ........"', navsides.borderRadius,
                '"..... void3   ....... ........"', navsideVars.restMenuBlockSize,
                '"..... corner4 ....... ........"', navsides.borderRadius,
                '"..... ......  fill5    corner5"', navsides.borderRadius,
                '"..... menusC3 .......  menusC4"', 'auto',
                '"..... ....... ....... ........"', '1fr',
                '"..... ....... ....... ........"', navsides.paddingBlock,
                '/',
                navsides.paddingInline, navsides.borderRadius, 'auto', navsides.borderRadius,
            ]],
            
            
            
            // childrens:
            ...children(['.fill1', '.corner1', '.corner2', '.void3', '.corner4', '.fill5', '.corner5'], {
                border: 'inherit',
                position: 'relative',
                insetInlineStart: navsides.borderWidth,
            }),
            ...children(['.fill1', '.corner1'], {
                insetBlockStart: navsides.borderWidth,
            }),
            ...children(['.fill5', '.corner5'], {
                insetBlockEnd: navsides.borderWidth,
            }),
            ...children('.fill1', {
                gridArea: 'fill1',
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
            ...children('.fill5', {
                gridArea: 'fill5',
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
                        `100% calc((${navsides.borderWidth} * 2) + ${navsides.paddingBlock} + ${navsideVars.menuShiftPos})`,
                        ...[...new Array(polygonAccuracy)].map((_, step): string =>
                            `calc(100% - ${navsides.borderRadius} + (${navsides.borderRadius} * ${Math.cos((step / polygonAccuracy) * Math.PI/2)})) calc((${navsides.borderWidth} * 2) + ${navsides.paddingBlock} + ${navsideVars.menuShiftPos} + (${navsides.borderRadius} * ${Math.sin((step / polygonAccuracy) * Math.PI/2)}))`,
                        ),
                        `calc(100% - ${navsides.borderRadius}) calc((${navsides.borderWidth} * 2) + ${navsides.paddingBlock} + ${navsideVars.menuShiftPos} + ${navsides.borderRadius})`,
                        `calc((${navsides.borderWidth} * 2) + ${navsides.paddingInline} + ${navsides.borderRadius}) calc((${navsides.borderWidth} * 2) + ${navsides.paddingBlock} + ${navsideVars.menuShiftPos} + ${navsides.borderRadius})`,
                        ...[...new Array(polygonAccuracy)].map((_, step): string =>
                            `calc((${navsides.borderWidth} * 2) + ${navsides.paddingInline} + ${navsides.borderRadius} + ((${navsides.borderRadius} - ${navsides.borderWidth}) * ${Math.sin(((step / polygonAccuracy) + 2) * Math.PI/2)})) calc(${navsides.borderWidth} + ${navsides.paddingBlock} + ${navsideVars.menuShiftPos} + (2 * ${navsides.borderRadius}) + ((${navsides.borderRadius} - ${navsides.borderWidth}) * ${Math.cos(((step / polygonAccuracy) + 2) * Math.PI/2)}))`,
                        ),
                        `calc((${navsides.borderWidth} * 3) + ${navsides.paddingInline}) calc((${navsides.borderWidth} * 2) + ${navsides.paddingBlock} + ${navsideVars.menuShiftPos} + (2 * ${navsides.borderRadius}))`,
                        `calc((${navsides.borderWidth} * 3) + ${navsides.paddingInline}) calc(${navsides.paddingBlock} + ${navsideVars.menuShiftPos} + (2 * ${navsides.borderRadius}) + ${navsideVars.restMenuBlockSize})`,
                        ...[...new Array(polygonAccuracy)].map((_, step): string =>
                            `calc((${navsides.borderWidth} * 3) + ${navsides.paddingInline} + ((${navsides.borderRadius} - ${navsides.borderWidth}) * ${1 - Math.sin(((step / polygonAccuracy) + 1) * Math.PI/2)})) calc(${navsides.borderWidth} + ${navsides.paddingBlock} + ${navsideVars.menuShiftPos} + (2 * ${navsides.borderRadius}) + ${navsideVars.restMenuBlockSize} + ((${navsides.borderRadius} - ${navsides.borderWidth}) * ${1 - Math.cos(((step / polygonAccuracy) + 1) * Math.PI/2) - 1}))`,
                        ),
                        `calc((${navsides.borderWidth} * 2) + ${navsides.paddingInline} + ${navsides.borderRadius}) calc(${navsides.paddingBlock} + ${navsideVars.menuShiftPos} + (3 * ${navsides.borderRadius}) + ${navsideVars.restMenuBlockSize})`,
                        `calc(100% - ${navsides.borderRadius}) calc(${navsides.paddingBlock} + ${navsideVars.menuShiftPos} + (3 * ${navsides.borderRadius}) + ${navsideVars.restMenuBlockSize})`,
                        ...[...new Array(polygonAccuracy)].map((_, step): string =>
                            `calc(100% - ${navsides.borderRadius} + (${navsides.borderRadius} * ${Math.cos(((step / polygonAccuracy) + 3) * Math.PI/2)})) calc(${navsides.paddingBlock} + ${navsideVars.menuShiftPos} + (4 * ${navsides.borderRadius}) + ${navsideVars.restMenuBlockSize} + (${navsides.borderRadius} * ${Math.sin(((step / polygonAccuracy) + 3) * Math.PI/2)}))`,
                        ),
                        `100% calc(${navsides.paddingBlock} + ${navsideVars.menuShiftPos} + (4 * ${navsides.borderRadius}) + ${navsideVars.restMenuBlockSize})`,
                        `100% 100%`,
                        `0 100%`,
                    ].join(','),
                `)`],
            ],
            
            
            
            // borders:
            border       : borderVars.border,
            borderRadius : 'inherit',
            
            
            
            // spacings:
            margin        : `calc(0px - ${borderVars.borderWidth})`,
            paddingInline : 0,
            paddingBlock  : 0,
        }),
    });
};
const usesNavsideMenusLayout = () => {
    return style({
        ...style({
            // positions:
            gridArea: 'corner2/corner2/menusC4/menusC4',
            
            
            
            // children:
            ...children('li>div', {
                // layouts:
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'stretch',
                alignItems: 'center',
                
                
                
                // backgrounds:
                background: 'transparent',
                
                
                
                // sizes:
                flex: [[1, 1, 'auto']], // growable, shrinkable, initial from it's width
                boxSizing: 'border-box',
                
                
                
                // customize:
                ...usesCssProps(usesPrefixedProps(navsides, 'menu')), // apply config's cssProps starting with menu***
            }),
        }),
    });
};
export const usesNavsideLayout = () => {
    // dependencies:
    
    // features:
    const {borderRule , borderVars} = usesBorder(navsides);
    const {paddingRule            } = usesPadding(navsides);
    
    
    
    return style({
        ...vars({
            [navsideVars.restMenuInlineSize     ] : `calc(${navsides.menuInlineSize} - (2 * ${navsides.borderRadius}))`,
            [navsideVars.restMenuBlockSize      ] : `calc(${navsides.menuBlockSize } - (2 * ${navsides.borderRadius}))`,
            
            [navsidePublicVars.menuSelectedIndex] : 1,
            [navsideVars.menuShiftPos           ] : `calc(${switchOf(navsidePublicVars.menuSelectedIndex, 0)} * ${navsides.menuBlockSize})`,
            // ...atGlobal({
            //     ...rule(`@property ${navsidePublicVars.menuSelectedIndex.slice(1, -1)}`, {
            //         // @ts-ignore
            //         syntax: '"<number>"',
            //         // @ts-ignore
            //         inherits: true,
            //         // @ts-ignore
            //         initialValue: 0,
            //     }),
            // }),
            // transition: [
            //     [`${navsidePublicVars.menuSelectedIndex}`.slice(1, -1) as any, '300ms', 'ease-out'],
            // ],
        }),
        ...style({
            // layouts:
            display: 'inline-grid',
            gridTemplate: [[
                '"..... ....... ....... ........"', navsides.paddingBlock,
                '"..... ....... ....... ........"', `calc(0px - ${navsides.borderRadius})`,
                '"..... ....... fill1    corner1"', navsides.borderRadius,
                '"..... corner2 ....... ........"', navsides.borderRadius,
                '"..... void3   ....... ........"', navsideVars.restMenuBlockSize,
                '"..... corner4 ....... ........"', navsides.borderRadius,
                '"..... ......  fill5    corner5"', navsides.borderRadius,
                '"..... menusC3 .......  menusC4"', 'auto',
                '"..... ....... ....... ........"', '1fr',
                '"..... ....... ....... ........"', navsides.paddingBlock,
                '/',
                navsides.paddingInline, navsides.borderRadius, 'auto', navsides.borderRadius,
            ]],
            
            
            
            // childrens:
            ...children('.underlay', usesNavsideUnderlayLayout()),
            ...children('.menus', usesNavsideMenusLayout()),
            
            
            
            // customize:
            ...usesCssProps(navsides), // apply config's cssProps
            
            
            
            // borders:
            border                 : borderVars.border,
            borderStartStartRadius : borderVars.borderStartStartRadius,
            borderStartEndRadius   : borderVars.borderStartEndRadius,
            borderEndStartRadius   : borderVars.borderEndStartRadius,
            borderEndEndRadius     : borderVars.borderEndEndRadius,
        }),
        
        
        
        // features:
        ...borderRule(),     // must be placed at the last
        ...paddingRule(),    // must be placed at the last
        
        
        
        // overrides:
        ...style({
            // borders:
            borderColor: 'transparent',
            
            
            
            // spacings:
            padding: 0, // moved to `underlay`
        }),
    });
};

export const usesNavsideVariants = () => {
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
    ...usesNavsideLayout(),
    
    // variants:
    ...usesNavsideVariants(),
});
