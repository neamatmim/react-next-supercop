import React from 'react';
import PropTypes from 'prop-types';
import { BoxWrapper } from '../../helpers/styled-utility';

const Box = ({ children, ...props }) => (
  <BoxWrapper {...props}>{children}</BoxWrapper>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  ...BoxWrapper.propTypes,
};

export default Box;

// export const Flex = styled(Box)({
//   display: 'flex'
// },
//   flexWrap,
//   flexDirection,
//   alignItems,
//   justifyContent,
//   themed('Flex')
// )

// Flex.propTypes = {
//   ...flexWrap.propTypes,
//   ...flexDirection.propTypes,
//   ...alignItems.propTypes,
//   ...justifyContent.propTypes
// }
