import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Col from '../Column';
import config, { DIMENSION_NAMES } from '../config';

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 0 1 auto;
  margin-right: ${props => (config(props).gutterWidth / 2) * -1}px;
  margin-left: ${props => (config(props).gutterWidth / 2) * -1}px;
  ${props =>
    props.noGutters &&
    css`
      margin-right: 0;
      margin-left: 0;
      > ${Col} {
        padding-right: 0;
        padding-left: 0;
      }
    `};

  ${p =>
    p.reverse &&
    `
    flex-direction: row-reverse;
  `}
  ${p =>
    p.start &&
    config(p).media[p.start]`
    justify-content: flex-start;
  `}
  ${p =>
    p.center &&
    config(p).media[p.center]`
    justify-content: center;
  `}
  ${p =>
    p.end &&
    config(p).media[p.end]`
    justify-content: flex-end;
  `}
  ${p =>
    p.top &&
    config(p).media[p.top]`
    align-items: flex-start;
  `}
  ${p =>
    p.middle &&
    config(p).media[p.middle]`
    align-items: center;
  `}
  ${p =>
    p.bottom &&
    config(p).media[p.bottom]`
    align-items: flex-end;
  `}
  ${p =>
    p.around &&
    config(p).media[p.around]`
    justify-content: space-around;
  `}
  ${p =>
    p.between &&
    config(p).media[p.between]`
    justify-content: space-between;
  `}
  ${p =>
    p.first &&
    config(p).media[p.first]`
    order: -1;
  `}
  ${p =>
    p.last &&
    config(p).media[p.last]`
    order: 1;
  `}

`;

const ModificatorType = PropTypes.oneOf(DIMENSION_NAMES);

Row.propTypes = {
  noGutters: PropTypes.bool,
  reverse: PropTypes.bool,
  start: ModificatorType,
  center: ModificatorType,
  end: ModificatorType,
  top: ModificatorType,
  middle: ModificatorType,
  bottom: ModificatorType,
  around: ModificatorType,
  between: ModificatorType,
  first: ModificatorType,
  last: ModificatorType,
  children: PropTypes.node,
};

export default Row;
