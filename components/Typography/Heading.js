import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themed } from '../../helpers/extended-styled-system';
import { TextWrapper } from './Text';
const HeadingWrapper = styled(TextWrapper)(themed('Heading'));

const Heading = ({ content, ...props }) => (
  <HeadingWrapper {...props}>{content}</HeadingWrapper>
);
export default Heading;
Heading.defaultProps = {
  as: 'h2',
  m: 0,
  fontSize: 4,
  fontWeight: 'bold',
};
