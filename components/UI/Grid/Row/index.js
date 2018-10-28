import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { base, themeGet } from '../../../../helpers/extended-styled-system';
import Column from '../Column';

const RowWrapper = styled(base)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 0 1 auto;
  margin-right: -${themeGet('grid.columnPaddingRight', '1rem')};
  margin-left: -${themeGet('grid.columnPaddingLeft', '1rem')};
  ${props =>
    props.noGutters &&
    css`
      margin-right: 0;
      margin-left: 0;
      > ${Column} {
        padding-right: 0;
        padding-left: 0;
      }
    `};
`;

const Row = ({ children, ...props }) => (
  <RowWrapper {...props}>{children}</RowWrapper>
);

export default Row;

Column.displayName = 'Row';

Row.propTypes = {
  noGutters: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
