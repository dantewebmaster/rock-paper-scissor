import { useContext } from 'react';
import { AppContext } from './contexts/AppContext';
// components
import Score from './components/Score';
import Button from './components/Button';
import { OptionItem, OptionsList } from './components/Options';
import Logo from './assets/logo.svg';
// data
import optionsData from './options.json';
import { MatchResultsEnum } from './contexts/AppContext';

export default function App() {
  const {
    userChoice,
    machChoice,
    score,
    matchResult,
    handlePlayAgain,
  } = useContext(AppContext);

  return (
    <div className="container">
      <header className="header">
        <img src={Logo} alt="Rock Paper Scissors" />
        <Score value={score} />
      </header>

      <main className="main">
        {userChoice ? (
          <div className="match-result">
            <div className="choice user-choice">
              <p>You picked</p>
              <OptionItem option={userChoice} disableSelect />
            </div>

            {userChoice && machChoice && (
              <div className="match-winner">
                <div>
                  {matchResult === MatchResultsEnum.LOSE ? (
                    <p>You Lose!</p>
                  ) : matchResult === MatchResultsEnum.WIN ? (
                    <p>You Win!</p>
                  ) : (
                    <p>It's a Tie!</p>
                  )}
                  <Button size="large" onClick={handlePlayAgain}>
                    Play Again
                  </Button>
                </div>
              </div>
            )}

            <div className="choice mach-choice">
              <p>The house picked</p>
              {machChoice && <OptionItem option={machChoice} disableSelect />}
            </div>
          </div>
        ) : (
          <OptionsList options={optionsData} />
        )}
      </main>

      <div className="rules">
        <Button>Rules</Button>
      </div>
    </div>
  );
}
