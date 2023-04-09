import { defineTheme, colors, borders, borderRadiuses } from '@reusable-ui/core'
// import { iconConfig } from '@reusable-ui/components'



defineTheme('primary', 'hsl(222,  8%, 20%)');
colors.primaryText =   'hsl(222,  9%, 42%)' as any;
colors.primaryBold =   'hsl(222,  9%, 42%)' as any;
// colors.primaryBold = 'green' as any;

borders.defaultWidth = '5px' as any;

borderRadiuses.sm = '0.75rem'   as any,
borderRadiuses.md = '1.25rem' as any,
borderRadiuses.lg = '1.5rem'   as any,

// defineTheme('secondary', 'hsl(28, 30%, 80%)');
console.log('color themes registered!');

// iconConfig.image.files.push(
//     { name: 'artswimwear.svg', ratio: '48/40' },
//     { name: 'scrolldown.svg', ratio: '20/40' },
// );
