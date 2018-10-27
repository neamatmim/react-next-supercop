import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Logo = styled.a`
  display: inline-block;
  padding-top: $navbar-brand-padding-y;
  padding-bottom: $navbar-brand-padding-y;
  margin-right: $navbar-padding-x;
  font-size: $navbar-brand-font-size;
  line-height: inherit;
  white-space: nowrap;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const logo = props => (
  <Logo href={props.href}>
    {props.src ? <img src={props.src} alt={props.alt} /> : props.alt}
  </Logo>
);

logo.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

logo.defaultProps = {
  href: '#',
  alt: 'Logo',
};
export default logo;
