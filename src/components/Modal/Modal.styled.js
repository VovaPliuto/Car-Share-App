import styled from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #12141780;
  z-index: 100;
`;

const ModalFrame = styled.div`
  position: relative;
  border-radius: 24px;
  background-color: #fff;
  width: 541px;

  padding: 40px;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 24px;
  background-color: transparent;
  border: none;
  color: #121417;
  cursor: pointer;
  
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover,
  &:focus {
    color: #3e85f3;
  }
`;

export { StyledOverlay, ModalFrame, CloseBtn };
