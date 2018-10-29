import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { base, themed } from '../../helpers/extended-styled-system';

const BoxWrapper = styled(base)(themed('BoxWrapper'));

const Box = ({ children, ...props }) => (
  <BoxWrapper {...props}>{children}</BoxWrapper>
);

export default Box;

Box.displayName = 'Box';

Box.propTypes = {
  children: PropTypes.node.isRequired,
};
