import styled from 'styled-components';

interface StyledModalProps {
  isOpened: boolean;
}

export const ModalContainer = styled.div<StyledModalProps>`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  padding: 8px;
  opacity: ${({ isOpened }) => isOpened ? 1 : 0};
  visibility: ${({ isOpened }) => isOpened ? 'visible' : 'hidden'};

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    margin-bottom: 32px;

    .title {
      font-size: 32px;
      text-transform: uppercase;
      color: #333;
    }

    .close {
      background: transparent;
      border: 0;
      width: 20px;
      height: 20px;
      font-size: 0;
      outline: 0;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover  {
        transform: scale(1.2);
      }
    }
  }

  .modal-content {
    background: #fff;
    width: 400px;
    border-radius: 8px;
    min-height: 200px;
    padding: 32px;
    opacity: ${({ isOpened }) => isOpened ? 1 : 0};
    visibility: ${({ isOpened }) => isOpened ? 'visible' : 'hidden'};
    transform: translateY(${({ isOpened }) => isOpened ? 'none' : '25%'});

    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    padding: 0;

    .modal-header {
      display: block;
      margin-bottom: 16px;

      .title {
        text-align: center;
      }

      .close {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .modal-content {
      height: 100%;
      border-radius: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      .modal-body {
        overflow-x: auto;
        margin-bottom: 32px;
      }
    }
  }
`;
