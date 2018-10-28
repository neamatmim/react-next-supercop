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
} from 'styled-system';

import {
  style,
  variant,
  compose,
  getWidth,
  num,
  px,
  space,
  borders,
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  display,
} from 'styled-system';
/**
 *
 * Custom Ulility Functions
 *
 */
export const css = props => props.css;

export const themed = key => props => props.theme[key];

export const rem = n => (num(n) ? n + 'rem' : n);

export const boxModel = compose(
  space,
  borders,
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  display
);

import styled from 'styled-components';

export const base = styled.div(
  boxModel,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  css,
  themed('base')
);

base.propTypes = {
  ...fontSize.propTypes,
  ...color.propTypes,
};

/**
 *
 * Custom Styled-system Functions
 *
 */

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
