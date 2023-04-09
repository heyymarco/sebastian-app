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
        // inlineSize           : '14rem',
        // blockSize            : '30rem',
        
        
        
        // spacings:
        paddingInline        : spacers.md           as CssKnownProps['paddingInline'],
        paddingBlock         : spacers.md           as CssKnownProps['paddingBlock' ],
        paddingInlineSm      : spacers.sm           as CssKnownProps['paddingInline'],
        paddingBlockSm       : spacers.sm           as CssKnownProps['paddingBlock' ],
        paddingInlineLg      : spacers.lg           as CssKnownProps['paddingInline'],
        paddingBlockLg       : spacers.lg           as CssKnownProps['paddingBlock' ],
        
        
        
        // menus:
        menuInlineSize       : '14rem',
        menuBlockSize        : '2rem',
        
        menuMarginInline     : [['calc(', borderRadiuses.md, '* 0.5)']] as CssKnownProps['borderRadius'],
        menuMarginInlineSm   : [['calc(', borderRadiuses.sm, '* 0.5)']] as CssKnownProps['borderRadius'],
        menuMarginInlineLg   : [['calc(', borderRadiuses.lg, '* 0.5)']] as CssKnownProps['borderRadius'],
        menuMarginBlock      : [['calc(', borderRadiuses.md, '* 0.5)']] as CssKnownProps['borderRadius'],
        menuMarginBlockSm    : [['calc(', borderRadiuses.sm, '* 0.5)']] as CssKnownProps['borderRadius'],
        menuMarginBlockLg    : [['calc(', borderRadiuses.lg, '* 0.5)']] as CssKnownProps['borderRadius'],
    };
}, { prefix: 'navs' });
