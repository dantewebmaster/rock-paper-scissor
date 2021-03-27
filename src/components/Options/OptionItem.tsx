import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { Option } from '../../models/option.interface';
import { OptionItemContainer } from './styles';

interface OptionItemProps {
  option: Option;
  disableSelect?: boolean;
}

export function OptionItem({ option, disableSelect }: OptionItemProps) {
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
        <div className="figure">
          <img src={`/assets/icon-${option.icon}.svg`} alt={option.icon} />
        </div>
      </div>
    </OptionItemContainer>
  );
}
