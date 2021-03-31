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
    overflow-x: hidden;
  }

  .container {
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 680px;
    margin: 0 auto;
    max-width: 100%;
    height: 90vh;
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

  .main-content {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    display: flex;
    align-items: center;
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
        margin-bottom: 58px;
        font-size: 24px;
        text-transform: uppercase;
        z-index: 10;
      }

      .main {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: scale(1.4);
        height: 100%;
      }

      &.mach-choice .fake-loading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &::before {
          content: '';
          background: #000;
          width: 130px;
          height: 130px;
          border-radius: 100%;
          opacity: 0.2;
          animation: ${BreathAnimation} 2s infinite;
        }
      }
    }

    .match-winner {
      position: relative;
      width: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      z-index: 10;

      div {
        margin-top: 48px;
        text-align: center;
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
    width: 100%;
    padding: 0 40px;
    display: flex;
    justify-content: flex-end;
  }

  .modal-rules-image {
    display: block;
    margin: 0 auto;
  }

  .hidden {
    display: none;
  }

  @media (max-width: 785px) {
    .container {
      padding: 24px;
    }

    .header {
      height: 100px;
      padding: 8px 16px;

      img {
        padding: 8px;
      }
    }

    .match-result {
      flex-direction: row;
      flex-wrap: wrap;

      > div:nth-child(1) {
        order: 1;
      }

      > div:nth-child(2) {
        order: 3;
        flex: 1
      }

      > div:nth-child(3) {
        order: 2;
      }

      .choice {
        flex-direction: column-reverse;

        p {
          margin-bottom: 0;
          margin-top: 24px;
          font-size: 14px;
        }

        .main {
          align-items: center;
          transform: scale(1);
        }
      }

      .match-winner {
        p {
          font-size: 54px;
        }

        div {
          margin-top: 80px;
        }
      }
    }

    .rules {
      justify-content: center;
    }
  }
`;

export default GlobalStyle;
