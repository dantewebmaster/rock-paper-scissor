import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { Option } from '../../models/option.interface';
import { OptionItemContainer } from './styles';

interface OptionItemProps {
  option: Option;
  isWinner?: boolean;
  disableSelect?: boolean;
}

export function OptionItem({
  option,
  disableSelect,
  isWinner,
}: OptionItemProps) {
  const { handleUserChoice } = useContext(AppContext);

  const handleClick = (option: Option) => {
    if (!disableSelect) handleUserChoice(option);
  };

  return (
    <OptionItemContainer>
      <div
        className={`option-icon ${option.icon}`}
        onClick={() => handleClick(option)}
      >
        {isWinner && <span className="circles"></span>}
        <div className="figure">
          <img src={`assets/icon-${option.icon}.svg`} alt={option.icon} />
        </div>
      </div>
    </OptionItemContainer>
  );
}
