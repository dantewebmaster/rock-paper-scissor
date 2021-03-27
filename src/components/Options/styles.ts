import styled from 'styled-components';
import { PulseAnimation } from '../../styles/animations';

export const OptionItemContainer = styled.div`
  width: 170px;
  height: 170px;

  .option-icon {
    width: 170px;
    height: 170px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    position: absolute;
    cursor: pointer;

    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 100%;
    }

    &:hover {
      img {
        transform: scale(1.2);
      }

      &::before {
        animation: ${PulseAnimation} 1.5s infinite;
      }
    }

    &.paper {
      background: hsl(230deg 88% 65%);
      box-shadow: 4px 7px 0px 0px hsl(229deg 64% 46%);
    }

    &.scissors {
      background: hsl(39deg 85% 53%);
      box-shadow: 4px 7px 0px 0px hsl(28deg 76% 44%);
    }

    &.rock {
      background: hsl(350deg 71% 56%);
      box-shadow: 4px 7px 0px 0px hsl(348deg 74% 36%);
    }

    .figure {
      background: #fff;
      width: 130px;
      height: 130px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: inset 4px 7px 0px 0 rgba(0, 0, 0, 0.2);

      img {
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;

export const OptionsContainer = styled.div`
  background: transparent url('assets/bg-triangle.svg') center bottom 20px no-repeat;
  width: 420px;
  height: 360px;
  position: relative;
  margin-top: 60px;

  ${OptionItemContainer} {
    position: absolute;

    &:nth-child(1) {
      left: 0;
    }

    &:nth-child(2) {
      right: 0;
    }

    &:nth-child(3) {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
