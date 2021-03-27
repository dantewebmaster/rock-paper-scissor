import styled from 'styled-components';

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:  center;
  background: hsl(0deg 0% 98%);
  padding: 8px 32px;
  border-radius: 8px;

  span {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    color: hsl(229deg 30% 50%);
  }

  strong {
    font-size: 48px;
    color: hsl(243deg 10% 38%);
    line-height: 1;
  }
`
