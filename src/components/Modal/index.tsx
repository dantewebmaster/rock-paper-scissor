import { FC } from 'react';
import { ModalContainer } from './styles';
import IconClose from '../../assets/icon-close.svg';

interface ModalProps {
  title: string;
  opened: boolean;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = ({ children, title, opened, onClose }) => {
  return (
    <ModalContainer isOpened={opened}>
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="title">{title}</h3>
          {onClose && (
            <button className="close" onClick={onClose}>
              <img src={IconClose} alt="close" />
            </button>
          )}
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
