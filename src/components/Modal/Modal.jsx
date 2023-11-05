import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';

import { StyledOverlay, ModalFrame, CloseBtn } from './Modal.styled';

const modalRoot = document.getElementById('modal');

const Modal = ({ children, onModalClose }) => {
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onModalClose();
    }
  };

  useEffect(() => {
    const handleKeyDownEsc = e => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };
    window.addEventListener('keydown', handleKeyDownEsc);
    return () => {
      window.removeEventListener('keydown', handleKeyDownEsc);
    };
  }, [onModalClose]);

  return createPortal(
    <StyledOverlay onClick={handleOverlayClick}>
      <ModalFrame>
        <CloseBtn onClick={onModalClose}>
          <AiOutlineClose />
        </CloseBtn>
        {children}
      </ModalFrame>
    </StyledOverlay>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
