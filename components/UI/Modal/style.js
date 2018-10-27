import styled from 'styled-components';
import FocusTrap from 'focus-trap-react';

export const ModalContentWrapper = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow-y: auto;
  transition: all 0.3s ease-out;

  @media (min-width: 600px) {
    left: 50%;
    top: 50%;
    height: auto;
    transform: translate(-50%, -50%);
    max-width: 30em;
    max-height: calc(100% - 1rem);
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5em;
  line-height: 1;
  background: #f6f6f7;
  border: 0;
  box-shadow: 0;
  cursor: pointer;
`;

export const ModalCloseButtonIcon = styled.svg`
  width: 25px;
  height: 25px;
  fill: transparent;
  stroke: black;
  stroke-linecap: round;
  stroke-width: 2;
`;

export const ModalContentBody = styled.div``;

export const ModalCover = styled(FocusTrap)`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translateZ(0);
`;
