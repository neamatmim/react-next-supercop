import React from 'react';
import styled from 'styled-components';

// Links
export const AnchorLinkWrapper = styled.a`
  margin-top: 12px;
  display: inline-block;
  font-size: ${props => props.size};
  text-decoration: underline;
  color: ${props => colors.primary};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  ${props =>
    props.activeColor &&
    css`
      color: ${props => colors.primaryActive};
    `}

  ${props =>
    props.hoverColor &&
    css`
      color: ${props => colors.primaryHover};
    `}

  ${props =>
    props.visitedColor &&
    css`
      color: hsl(209.6, 100%, 15.9%);
      text-decoration: underline;
    `}

  ${props =>
    props.disabledColor &&
    css`
      color: ${props => colors.disabled};
    `}
`;

const AnchorLink = props => (
  <AnchorLinkWrapper {...props}>{props.content}</AnchorLinkWrapper>
);

export default AnchorLink;

export const Link = styled(Box)(themed('Link'));

Link.defaultProps = {
  as: 'a',
  color: 'blue',
};