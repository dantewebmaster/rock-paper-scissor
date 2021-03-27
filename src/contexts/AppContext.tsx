import { createContext, ReactNode, useEffect, useState } from 'react';
import { Option } from '../models/option.interface';

interface AppContextData {
  score: number;
  userChoice: Option | undefined;
  machChoice: Option | undefined;
  handleUserChoice: (selectedOption: Option) => void;
  handleMachChoice: (selectedOption: Option) => void;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as AppContextData);

// let countdownTimeout: NodeJS.Timeout;

export function ContextProvider({ children }: AppProviderProps) {
  const [score] = useState(0);
  const [userChoice, setUserChoice] = useState<Option>();
  const [machChoice, setMachChoice] = useState<Option>();

  function handleUserChoice(option: Option) {
    console.log('user choice');

    setUserChoice(option);
  }

  function handleMachChoice(option: Option) {
    console.log('mach choice');

    setMachChoice(option);
  }

  // function handleMatch() {
  //   console.log('Quem ganhou?');
  // }

  useEffect(() => {
    console.log('context');
  }, []);

  return (
    <AppContext.Provider
      value={{
        score,
        userChoice,
        machChoice,
        handleUserChoice,
        handleMachChoice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
