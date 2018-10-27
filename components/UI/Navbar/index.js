import React, { Fragment } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Collapse, { CollapseWrapper } from '../Collapse';
import Logo from '../Logo';
import TButton, { ToggleButton } from '../ToggleButton';
import Menu, { NavLinks } from '../Menu';

const Nav = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.paddingy || '0.5rem'}
    ${props => props.paddingx || '1rem'};
  color: #000;
  background-color: #eee;
  > ${Container} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: ${props => props.size - 0.2 || '575.98px'}) {
    > ${Container} {
      padding-right: 0;
      padding-left: 0;
    }
  }
  @media (min-width: ${props => props.size || '576px'}) {
    flex-flow: row nowrap;
    justify-content: flex-start;
    ${NavLinks} {
      flex-direction: row;
    }
    .dropdown-menu {
      position: absolute;
    }
    a {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    ${Container} {
      flex-wrap: nowrap;
    }
    ${CollapseWrapper} {
      display: flex !important;
      flex-basis: auto;
    }
    ${ToggleButton} {
      display: none;
    }
  }
`;

const navbar = props => (
  <Fragment>
    <Nav>
      <Logo />
      <TButton
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </TButton>
      <Collapse id="navbarNavAltMarkup">
        <Menu />
      </Collapse>
    </Nav>
  </Fragment>
);

export default navbar;
