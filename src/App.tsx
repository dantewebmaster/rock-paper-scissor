import { useContext, useState } from 'react';
import { AppContext } from './contexts/AppContext';
import Score from './components/Score';
import Button from './components/Button';
import Modal from './components/Modal';
import { OptionItem, OptionsList } from './components/Options';
import optionsData from './options.json';
import { MatchResultsEnum } from './contexts/AppContext';

import ImageRules from './assets/image-rules.svg';
import Logo from './assets/logo.svg';

export default function App() {
  const {
    userChoice,
    machChoice,
    score,
    matchResult,
    handlePlayAgain,
  } = useContext(AppContext);

  const [rulesModalOpen, setRulesModalOpen] = useState(false);

  const computerWins = matchResult === MatchResultsEnum.LOSE;
  const userWins = matchResult === MatchResultsEnum.WIN;

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
              <OptionItem
                option={userChoice}
                isWinner={userWins}
                disableSelect
              />
            </div>

            {userChoice && machChoice && (
              <div className="match-winner">
                <div>
                  {computerWins ? (
                    <p>You Lose!</p>
                  ) : userWins ? (
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
              {machChoice && (
                <OptionItem
                  option={machChoice}
                  isWinner={computerWins}
                  disableSelect
                />
              )}
            </div>
          </div>
        ) : (
          <OptionsList options={optionsData} />
        )}
      </main>

      <div className="rules">
        <Button onClick={() => setRulesModalOpen(true)}>Rules</Button>
      </div>

      <Modal
        opened={rulesModalOpen}
        title="Rules"
        onClose={() => setRulesModalOpen(false)}
      >
        <img src={ImageRules} alt="rules" className="modal-rules-image" />
      </Modal>
    </div>
  );
}
