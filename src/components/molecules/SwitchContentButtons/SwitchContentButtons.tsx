import { type FC } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import {
  type contentNameType,
  type planetNameType,
} from '../../../types/planet';
import PrimaryButton from '../../atoms/PrimaryButton/PrimaryButton';
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
  const isBreakpoint = useMediaQuery(767);
  return (
    <Wrapper>
      {contents.map(({ value, text }, index) =>
        isBreakpoint ? (
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
        ) : (
          <PrimaryButton
            isActive={contentName === value}
            key={value}
            nameColor={planetName}
            onClick={() => {
              handleSetContentName(value);
            }}
            spanText={`0${index + 1}`}
          >
            {text}
          </PrimaryButton>
        )
      )}
    </Wrapper>
  );
};

export default SwitchContentButtons;
