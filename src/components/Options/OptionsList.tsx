import { Option } from '../../models/option.interface';
import { OptionsContainer } from './styles';
import { OptionItem } from './OptionItem';

interface OptionsListProps {
  options: Option[];
}

export function OptionsList({ options }: OptionsListProps) {
  return (
    <OptionsContainer>
      {options.map((item) => (
        <OptionItem key={item.id} option={item} />
      ))}
    </OptionsContainer>
  );
}
