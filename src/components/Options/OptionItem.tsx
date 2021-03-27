import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { Option } from '../../models/option.interface';
import { OptionItemContainer } from './styles';

interface OptionItemProps {
  option: Option;
}

export function OptionItem({ option }: OptionItemProps) {
  const { handleUserChoice } = useContext(AppContext);

  return (
    <OptionItemContainer>
      <div
        className={`option-icon ${option.icon}`}
        onClick={() => handleUserChoice(option)}
      >
        <div className="figure">
          <img src={`/assets/icon-${option.icon}.svg`} alt={option.icon} />
        </div>
      </div>
    </OptionItemContainer>
  );
}
