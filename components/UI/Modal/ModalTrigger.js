import React from 'react';
const Trigger = ({ onOpen, buttonRef, text }) => (
  <button onClick={onOpen} ref={buttonRef}>
    {text}
  </button>
);

export default Trigger;
