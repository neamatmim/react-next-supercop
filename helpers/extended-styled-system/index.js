export {
  space,
  color,
  width,
  maxWidth,
  height,
  flex,
  order,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  variant,
  themeGet,
  get,
  px,
  num,
} from 'styled-system';

import { style, getWidth, num } from 'styled-system';

export const css = props => props.css;

export const themed = key => props => props.theme[key];

export const rem = n => (num(n) ? n + 'rem' : n);

// const containerSize = style({
//   // React prop name
//   prop: 'containerSize',
//   // The corresponding CSS property (defaults to prop argument)
//   cssProperty: 'maxWidth',
//   // key for theme values
//   key: 'containerSizes',
//   // accessor function for transforming the value
//   transformValue: getWidth,
//   // add a fallback scale object or array, if theme is not present
//   scale: [38, 50, 62].map(n => n + 'em'),
// });
