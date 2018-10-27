import React, { PureComponent, Fragment } from 'react';
import Trigger from './ModalTrigger';
import ModalContent from './ModalContent';
import { createGlobalStyle } from 'styled-components';
const LockScroll = createGlobalStyle`
.lock-scroll {
  overflow: hidden !important;
}
`;

class Modal extends PureComponent {
  state = {
    show: false,
  };
  onClickAway = e => {
    if (this.modalNode && this.modalNode.contains(e.target)) return;
    this.handleClose(e);
  };

  toggleScrollLock = () =>
    document.querySelector('html').classList.toggle('lock-scroll');

  handleOpen = () => {
    this.setState({ show: true }, () => {
      this.closeButtonNode.focus();
    });
    this.toggleScrollLock();
    console.log('test');
  };

  handleClose = e => {
    e.stopPropagation();
    this.setState({ show: false });
    this.openButtonNode.focus();
    this.toggleScrollLock();
    console.log('test');
  };

  render() {
    const {
      selector,
      triggerText,
      role = 'dialog',
      children,
      ariaLabel,
      ...rest
    } = this.props;
    const { show } = this.state;
    return (
      <Fragment>
        <LockScroll />
        <Trigger
          text={triggerText}
          onOpen={this.handleOpen}
          buttonRef={n => (this.openButtonNode = n)}
        />
        {show && (
          <ModalContent
            onKeyDown={this.onKeyDown}
            buttonRef={n => (this.closeButtonNode = n)}
            modalRef={n => (this.modalNode = n)}
            onClickAway={this.onClickAway}
            onClose={this.handleClose}
            selector={selector}
            role={role}
            ariaLabel={ariaLabel}
            content={children}
            {...rest}
          />
        )}
      </Fragment>
    );
  }
}
export default Modal;
/**
 * The first paramiter must be mapStateToProps
 * if there are no state we need then pass null as first param
 */

/**
 * Modal
 *
 * This is where the modal itself resides with a close button.
 *
 * 1. Fill entire viewport on Mobile only.
 * 2. Center the content at larger breakpoints.
 * 3. When content is larger than the viewport, allow for scrolling
 *    and a degree of margin around the Modal at larger breakpoints.
 *
 * Our component:
 * is only rendered to the DOM when the Modal has been triggered;
 * is appended to the end of the document.body;
 * has the relevant WAI-ARIA attributes in accordance with accessibility guidelines;
 * closes when the escape key has been pressed, thanks to ReactFocusTrap;
 * closes when the user clicks on its backdrop;
 * freezes scrolling on the main document when the Modal has been triggered;
 * draws focus immediately to the Modal's close button when it has been triggered;
 * draws focus immediately back to the Modal's trigger button after the user closes it;
 * and finally, traps focus within it when triggered.
 */
