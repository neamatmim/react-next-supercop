import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop';
import {
  ModalContentWrapper,
  ModalContentBody,
  ModalCloseButton,
  ModalCloseButtonIcon,
  ModalCover,
} from './style';

const ModalContent = ({
  onClose,
  onClickAway,
  selector,
  content,
  role = 'dialog',
  modalRef,
  ariaLabel,
  ariaLabelButton,
  buttonRef,
  ...rest
}) => {
  let element;
  if (process.browser) {
    element = document.querySelector(selector) || document.body;
  }
  return ReactDOM.createPortal(
    <div>
      {/* <Backdrop show="true" clicked={onClose} /> */}

      <ModalCover
        tag="aside"
        tabIndex="-1"
        role={role}
        aria-label={ariaLabel}
        aria-modal="true"
        focusTrapOptions={{ onDeactivate: onClose }}
        onClick={onClickAway}
      >
        <ModalContentWrapper ref={modalRef}>
          <ModalCloseButton
            aria-label={ariaLabelButton}
            onClick={onClose}
            ref={buttonRef}
          >
            <ModalCloseButtonIcon viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </ModalCloseButtonIcon>
          </ModalCloseButton>
          <ModalContentBody>{content}</ModalContentBody>
        </ModalContentWrapper>
      </ModalCover>
    </div>,
    element
  );
};

export default ModalContent;
