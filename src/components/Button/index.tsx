import { FC } from 'react';
import { ButtonContainer } from './styles';

export interface ButtonProps {
  size?: 'small' | 'large';
  variant?: 'filled' | 'stroked';
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  size = 'small',
  variant = 'stroked',
  onClick,
}) => {
  return (
    <ButtonContainer size={size} onClick={onClick} variant={variant}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
