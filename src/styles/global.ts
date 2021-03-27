import { createGlobalStyle } from 'styled-components';

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
  }

  .rules {
    button {
      background: transparent;
      position: fixed;
      right: 24px;
      bottom: 32px;
      border-radius: 8px;
      border: 2px solid hsl(218deg 20% 39%);
      text-transform: uppercase;
      color: #fff;
      padding: 8px;
      min-width: 120px;
      cursor: pointer;
    }
  }
`;

export default GlobalStyle;
