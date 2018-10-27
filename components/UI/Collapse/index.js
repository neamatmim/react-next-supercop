import React from 'react';
import styled, { css } from 'styled-components';

export const CollapseWrapper = styled.div`
  &:not(.show) {
    display: none;
  }
  ${props =>
    props.navbar &&
    css`
      flex-basis: 100%;
      flex-grow: 1;
      align-items: center;
    `};
`;

const collapse = props => (
  <CollapseWrapper navbar={props.navbar} id={props.id}>
    {props.children}
  </CollapseWrapper>
);

export default collapse;
