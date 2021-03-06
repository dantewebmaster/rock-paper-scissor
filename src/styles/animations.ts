import { keyframes } from 'styled-components';

export const PulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
  }

  70% {
    box-shadow: 0 0 0 30px rgba(0, 0, 0, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

export const BreathAnimation = keyframes`
  0% {
    transform: scale(0.8);
  }

  70% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.8);
  }
`;

export const FadeAnimation = keyframes`
  0% {
    opacity: 0;
  }

  50%: {
    opacity: 0.1;
  }

  75% {
    opacity: 0.2;
  }

  100% {
    opacity: 0;
  }
`;
