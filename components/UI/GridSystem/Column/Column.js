import styled, { css } from 'styled-components';

function getWidth(span) {
  if (!span) return;
  let width = (span / 12) * 100;
  return `width: ${width}%`;
}

function getFlexBasis(span) {
  if (!span) return;
  let flexBasis = (span / 12) * 100;
  return `flex: 0 0 ${flexBasis}%`;
}

const Col = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  ${({ xs }) => (xs ? getFlexBasis(xs) : 'flex: 0 0 100%')};
  ${({ xs }) => (xs ? getWidth(xs) : 'width: 100%')};
  @media only screen and (min-width: 576px) {
    ${({ sm }) => sm && getFlexBasis(sm)};
    ${({ sm }) => sm && getWidth(sm)};
  }
  @media only screen and (min-width: 576px) {
    ${({ md }) => md && getFlexBasis(md)};
    ${({ md }) => md && getWidth(md)};
  }
  @media only screen and (min-width: 576px) {
    ${({ lg }) => lg && getFlexBasis(lg)};
    ${({ lg }) => lg && getWidth(lg)};
  }
  @media only screen and (min-width: 576px) {
    ${({ xlg }) => xlg && getFlexBasis(xlg)};
    ${({ xlg }) => xlg && getWidth(xlg)};
  }
  ${props =>
    props.noGutters &&
    css`
      padding-right: 0;
      padding-left: 0;
    `};
`;

export default Col;
