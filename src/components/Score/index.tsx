import React from 'react';
import { ScoreContainer } from './styles';

interface ScoreProps {
  value: number;
}

export default function Score({ value }: ScoreProps) {
  return (
    <ScoreContainer>
      <span>Score</span>
      <strong>{value}</strong>
    </ScoreContainer>
  );
}
