import { type FC } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { type contentNameType } from '../../../types/planet';
import { type colorType } from '../../../types/theme';
import PrimaryButton from '../../molecules/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../molecules/SecondaryButton/SecondaryButton';

import { Wrapper } from './SwitchContentButtons.styles';

interface SwitchContentButtonsProps {
  color: colorType;
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

const SwitchContentButtons: FC<SwitchContentButtonsProps> = ({ color, contentName, handleSetContentName }) => {
  const isBreakpoint = useMediaQuery(767);
  return (
    <Wrapper>
      {contents.map(({ value, text }, index) =>
        isBreakpoint ? (
          <SecondaryButton
            isActive={contentName === value}
            color={color}
            onClick={() => {
              handleSetContentName(value);
            }}
            key={value}
          >
            {value}
          </SecondaryButton>
        ) : (
          <PrimaryButton
            isActive={contentName === value}
            key={value}
            color={color}
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
