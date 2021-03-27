import { createGlobalStyle } from 'styled-components';
import { BreathAnimation } from './animations';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
    background: hsl(214, 47%, 23%);
    background: radial-gradient(at top, hsl(214, 47%, 23%) 20%, hsl(237, 49%, 15%) 80%);
    font-family: 'Barlow Semi Condensed', sans-serif;
  }

  .container {
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 680px;
    margin: 0 auto;
    max-width: 100%;
    height: 100%;
    flex-direction: column;
  }

  .header {
    border: 2px solid hsl(218deg 20% 39%);
    border-radius: 10px;
    color: #fff;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .main {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .match-result {
    width: 140%;
    display: flex;
    padding: 56px 0;

    .choice {
      width: 50%;
      display: flex;
      flex-direction: column;
      position: relative;

      p {
        text-align: center;
        color: #fafafa;
        margin-bottom: 80px;
        font-size: 24px;
        text-transform: uppercase;
      }

      > div {
        margin: 0 auto;
        transform: scale(1.4);
      }

      &.mach-choice::before {
        content: '';
        background: #000;
        width: 180px;
        height: 180px;
        top: 50%;
        left: 50%;
        position: absolute;
        margin-top: -100px;
        margin-left: -90px;
        border-radius: 100%;
        opacity: 0.2;
        animation: ${BreathAnimation} 2s infinite;
      }
    }

    .match-winner {
      position: relative;
      width: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      div {
        margin-top: -48px;
      }

      p {
        font-size: 40px;
        text-transform: uppercase;
        font-weight: 700;
        color: #fafafa;
        margin-bottom: 10px;
      }
    }
  }

  .rules {
    button {
      position: fixed;
      right: 40px;
      bottom: 60px;
    }
  }
`;

export default GlobalStyle;
