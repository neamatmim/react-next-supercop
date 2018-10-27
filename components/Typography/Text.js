import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  fontFamily,
  themed,
} from '../../helpers/extended-styled-system';
import { BoxWrapper } from '../../helpers/styled-utility';

export const TextWrapper = styled(BoxWrapper)(
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  themed('TextWrapper')
);
/* margin-top: ${props => props.marginTop || '0'};
  margin-bottom: ${props => props.marginBootom || '1rem'};
  font-size: ${props => props.fontSize || 'inherit'};
  font-family: ${props => props.fontFamily || 'inherit'};
  font-style: ${props => props.fontStyle || 'normal'};
  font-weight: ${props => props.fontWeight || 'normal'};
  text-transform: ${props => props.textTransform || 'none'};
  text-decoration: ${props => props.textDecoration || 'none'};
  text-shadow: ${props => props.textShadow || 'none'};
  text-align: ${props => props.align || 'left'};
  line-height: ${props => props.lineHeight || 'unset'};
  letter-spacing: ${props => props.letterSpacing || 'unset'};
  word-spacing: ${props => props.wordSpacing || 'unset'};
  white-space: ${props => props.whiteSpace || 'wrap'};
  color: ${props => props.color || 'inherit'}; */

const Text = ({ content, ...props }) => (
  <TextWrapper {...props}>{content}</TextWrapper>
);
export default Text;
Text.propTypes = {
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
};
