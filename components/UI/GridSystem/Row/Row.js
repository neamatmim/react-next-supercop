import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  ${props =>
    props.noGutters &&
    css`
      margin-right: 0;
      margin-left: 0;
    `};
`;

Row.propTypes = {
  noGutters: PropTypes.bool,
};

export default Row;
