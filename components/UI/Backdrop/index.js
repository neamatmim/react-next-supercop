import React from 'react';

import styled from 'styled-components';

const Backdrop = props =>
  props.show ? (
    <BackdropWrapper
      tabIndex="-1"
      onClick={props.clicked}
      onKeyDown={props.onKeyDown}
    />
  ) : null;

const BackdropWrapper = styled.aside`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translateZ(0);
`;

export default Backdrop;

/**
 * Modal Cover
 *
 * A container for the Modal which provides a semi-transparent backdrop
 * for the Modal and it's contents.
 *
 * 1. Fill the entire viewport.
 * 2. Ensure Modal is layered on top of the rest of the document.
 * 3. Force the browser to create a new layer and send rendering to the GPU.
 */
// onKeyDown = ({ keyCode }) => keyCode === 27 && this.handleonClose();
