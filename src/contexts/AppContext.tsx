import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import randomNumber from '../helpers/randomNumber';
import { Option } from '../models/option.interface';

import optionsData from '../options.json';

export enum MatchResultsEnum {
  WIN = 'win',
  LOSE = 'lose',
  TIE = 'tie',
}

type MatchResultsType = 'win' | 'lose' | 'tie' | undefined;

interface AppContextData {
  score: number;
  userChoice: Option | undefined;
  machChoice: Option | undefined;
  matchResult: MatchResultsType;
  handleUserChoice: (selectedOption: Option) => void;
  handleMachChoice: (selectedOption: Option) => void;
  handlePlayAgain: () => void;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as AppContextData);

export function ContextProvider({ children }: AppProviderProps) {
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState<Option>();
  const [machChoice, setMachChoice] = useState<Option>();
  const [matchResult, setMatchResult] = useState<MatchResultsType>();

  const persistScore = useCallback((newScore) => {
    localStorage.setItem('score', JSON.stringify(newScore));
  }, []);

  useEffect(() => {
    const savedScore = localStorage.getItem('score');

    if (savedScore) {
      const parsedScore = parseInt(savedScore);
      setScore(parsedScore);
    }
  }, []);

  useEffect(() => {
    if (userChoice) {
      setTimeout(() => {
        const quantityOfOptions = optionsData.length;
        const randomId = randomNumber(0, quantityOfOptions);
        const machSelect = optionsData.find((item) => item.id === randomId);

        if (machSelect) {
          handleMachChoice(machSelect);
        }
      }, 1500);
    }
  }, [userChoice]);

  useEffect(() => {
    if (userChoice && machChoice) {
      const userMove = userChoice.id;
      const machMove = machChoice.id;

      if (userMove === machMove) {
        setMatchResult(MatchResultsEnum.TIE);
      } else if ((userMove - machMove + 3) % 3 === 1) {
        setMatchResult(MatchResultsEnum.WIN);
        setScore((prevScore) => {
          persistScore(prevScore + 1);
          return prevScore + 1;
        });
      } else {
        setMatchResult(MatchResultsEnum.LOSE);
        setScore((prevScore) => {
          if (prevScore === 0) return 0;
          persistScore(prevScore - 1);
          return prevScore - 1;
        });
      }
    }
  }, [machChoice, persistScore, userChoice]);

  function handleUserChoice(option: Option) {
    setUserChoice(option);
  }

  function handleMachChoice(option: Option) {
    setMachChoice(option);
  }

  function handlePlayAgain() {
    setUserChoice(undefined);
    setMachChoice(undefined);
    setMatchResult(undefined);
  }

  return (
    <AppContext.Provider
      value={{
        score,
        userChoice,
        machChoice,
        matchResult,
        handleUserChoice,
        handleMachChoice,
        handlePlayAgain,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
