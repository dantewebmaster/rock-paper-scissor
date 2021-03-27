import styled from 'styled-components';
import { ButtonProps } from './'

export const ButtonContainer = styled.button<ButtonProps>`
  background: transparent;
  border-radius: 8px;
  border: 2px solid hsl(218deg 20% 39%);
  text-transform: uppercase;
  color: #fff;
  padding: ${({ size }) => size === 'small' ? 8 : 16}px;
  min-width: ${({ size }) => size === 'small' ? 120 : 160}px;
  cursor: pointer;
  transition: all .3s ease-in-out;
  outline: none;

  &:hover {
    color: #ca3f62;
    background: #f9f9f9;
    border-color: #f9f9f9;
  }
`;
