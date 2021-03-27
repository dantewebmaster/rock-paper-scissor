import { useContext } from 'react';
import Score from './components/Score';
import { OptionItem, OptionsList } from './components/Options';
import { Option } from './models/option.interface';
import Logo from './assets/logo.svg';
import { AppContext } from './contexts/AppContext';

const options: Option[] = [
  {
    id: 1,
    icon: 'paper',
  },
  {
    id: 2,
    icon: 'scissors',
  },
  {
    id: 3,
    icon: 'rock',
  },
];

export default function App() {
  const { userChoice } = useContext(AppContext);

  return (
    <div className="container">
      <header className="header">
        <img src={Logo} alt="Rock Paper Scissors" />
        <Score />
      </header>

      <main className="main">
        {userChoice ? (
          <div className="match">
            <OptionItem option={userChoice} />
          </div>
        ) : (
          <OptionsList options={options} />
        )}
      </main>

      <div className="rules">
        <button type="button">Rules</button>
      </div>
    </div>
  );
}
