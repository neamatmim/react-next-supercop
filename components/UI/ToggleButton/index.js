import React from 'react';
import styled from 'styled-components';

export const ToggleButton = styled.button`
  font-size: $navbar-toggler-font-size;
  line-height: 1;
  background-color: transparent;
  border: $border-width solid transparent;
  border-radius: $navbar-toggler-border-radius;

  &:hover,
  &:focus {
    text-decoration: none;
  }
  cursor: pointer;
  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: '';
    background: no-repeat center center;
    background-size: 100% 100%;
  }
`;

const tButton = props => (
  <ToggleButton {...props}>{props.children}</ToggleButton>
);

export default tButton;
