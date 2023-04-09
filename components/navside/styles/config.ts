// cssfn:
import {
    // cssfn css specific types:
    CssKnownProps,
    
    
    
    // reads/writes css variables configuration:
    cssConfig,
}                           from '@cssfn/core'                  // writes css in javascript

// reusable-ui core:
import {
    // a border (stroke) management system:
    borders,
    borderRadiuses,
    
    
    
    // a spacer (gap) management system:
    spacers,
}                           from '@reusable-ui/core'            // a set of reusable-ui packages which are responsible for building any component



// configs:
export const [navsides, navsideValues, cssNavsideConfig] = cssConfig(() => {
    return {
        // borders:
        borderStyle          : borders.style        as CssKnownProps['borderStyle' ],
        borderWidth          : borders.defaultWidth as CssKnownProps['borderWidth' ],
        borderColor          : borders.color        as CssKnownProps['borderColor' ],
        
        borderRadius         : borderRadiuses.md    as CssKnownProps['borderRadius'],
        borderRadiusSm       : borderRadiuses.sm    as CssKnownProps['borderRadius'],
        borderRadiusLg       : borderRadiuses.lg    as CssKnownProps['borderRadius'],
        
        
        
        // sizes:
        inlineSize           : '10rem',
        blockSize            : '30rem',
        
        
        
        // spacings:
        paddingInline        : [['calc((', spacers.sm, '+', spacers.md, ')/2)']]    as CssKnownProps['paddingInline'],
        paddingBlock         : [['calc((', spacers.xs, '+', spacers.sm, ')/2)']]    as CssKnownProps['paddingBlock' ],
        paddingInlineSm      : spacers.sm                                           as CssKnownProps['paddingInline'],
        paddingBlockSm       : spacers.xs                                           as CssKnownProps['paddingBlock' ],
        paddingInlineLg      : spacers.md                                           as CssKnownProps['paddingInline'],
        paddingBlockLg       : spacers.sm                                           as CssKnownProps['paddingBlock' ],
    };
}, { prefix: 'navs' });
