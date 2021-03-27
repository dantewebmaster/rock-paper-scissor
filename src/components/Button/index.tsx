import { FC } from 'react';
import { ButtonContainer } from './styles';

export interface ButtonProps {
  size?: 'small' | 'large';
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, size = 'small', onClick }) => {
  return (
    <ButtonContainer size={size} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
