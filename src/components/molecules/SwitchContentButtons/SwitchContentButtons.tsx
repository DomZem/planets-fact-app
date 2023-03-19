import { type FC } from 'react';
import {
  type contentNameType,
  type planetNameType,
} from '../../../types/planet';
import { StyledButton, Wrapper } from './SwitchContentButtons.styles';

interface SwitchContentButtonsProps {
  planetName: planetNameType;
  contentName: contentNameType;
  handleSetContentName: (content: contentNameType) => void;
}

interface contentsType {
  value: contentNameType;
  text: string;
}

const contents: contentsType[] = [
  {
    value: 'overview',
    text: 'overview',
  },
  {
    value: 'structure',
    text: 'internal structure',
  },
  {
    value: 'surface',
    text: 'surface geology',
  },
];

const SwitchContentButtons: FC<SwitchContentButtonsProps> = ({
  planetName,
  contentName,
  handleSetContentName,
}) => {
  return (
    <Wrapper>
      {contents.map(({ value }) => (
        <StyledButton
          isActive={contentName === value}
          color={planetName}
          onClick={() => {
            handleSetContentName(value);
          }}
          key={value}
        >
          {value}
        </StyledButton>
      ))}
    </Wrapper>
  );
};

export default SwitchContentButtons;
