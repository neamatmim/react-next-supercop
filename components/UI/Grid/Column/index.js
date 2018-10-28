import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { base, themeGet } from '../../../../helpers/extended-styled-system';

const ColumnWrapper = styled(base)`
  box-sizing: border-box;
  position: relative;
  flex: 0 0 auto;
  padding-right: ${themeGet('grid.columnPaddingRight', '1rem')};
  padding-left: ${themeGet('grid.columnPaddingLeft', '1rem')};
`;

const Column = ({ children, ...props }) => (
  <ColumnWrapper {...props}>{children}</ColumnWrapper>
);

export default Column;

Column.displayName = 'Column';

Column.propTypes = {
  children: PropTypes.node.isRequired,
};
