import styled from 'styled-components';
import {
  space,
  width,
  maxWidth,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  css,
  themed,
} from '../extended-styled-system';
export const BoxWrapper = styled.div(
  space,
  width,
  maxWidth,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  css,
  themed('BoxWrapper')
);
BoxWrapper.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
};
