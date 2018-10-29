import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  flexWrap,
  flexDirection,
  alignItems,
  alignContent,
  justifyContent,
  justifyItems,
  base,
  themed,
} from '../../helpers/extended-styled-system';

const BoxFlexWrapper = styled(base)(
  { display: 'flex' },
  flexWrap,
  flexDirection,
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  themed('BoxFlexWrapper')
);

const BoxFlex = ({ children, ...props }) => (
  <BoxFlexWrapper {...props}>{children}</BoxFlexWrapper>
);

export default BoxFlex;

BoxFlex.displayName = 'BoxFlex';

BoxFlex.propTypes = {
  children: PropTypes.node.isRequired,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...alignContent.propTypes,
  ...justifyItems.propTypes,
};
