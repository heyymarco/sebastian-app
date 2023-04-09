import { defineTheme, colorValues, borderValues, borderRadiusValues } from '@reusable-ui/core'
import { iconConfig, indicatorValues, controlValues, actionControlValues } from '@reusable-ui/components'
import Color from 'color'



// color themes:
defineTheme('primary',    Color('hsl(222,  8%, 20%)'));
colorValues.primaryText = Color('hsl(222,  9%, 42%)');
colorValues.primaryBold = Color('hsl(222,  9%, 42%)');
colorValues.primaryMild = Color('hsl(222,  9%, 42%)');
// colorValues.primaryBold = Color('green');

// defineTheme('secondary', 'hsl(28, 30%, 80%)');



// borders & border radiuses:
borderValues.defaultWidth = '2px';

borderRadiusValues.sm = '0.75rem';
borderRadiusValues.md = '1.25rem';
borderRadiusValues.lg = '1.5rem';



// active/selected/checked components:
indicatorValues.filterActive = [[
    'brightness(1.7)',
    'saturate(6)'
]];



// interacting indications:
controlValues.filterArrive = [[
    'brightness(125%)',
    'drop-shadow(0 0 0.01px rgba(0,0,0,0.4))',
]];



// actions feedbacks:
actionControlValues.filterPress = [[
    'brightness(85%)',
]];



// shared icons:
// iconConfig.image.files.push(
//     { name: 'artswimwear.svg', ratio: '48/40' },
//     { name: 'scrolldown.svg', ratio: '20/40' },
// );
