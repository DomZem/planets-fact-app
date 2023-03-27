import { type FC } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { type ContentNameType } from '../../../types/planet';
import { type ColorType } from '../../../types/theme';
import PrimaryButton from '../../molecules/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../molecules/SecondaryButton/SecondaryButton';

import { Wrapper } from './SwitchContentButtons.styles';

interface SwitchContentButtonsProps {
  color: ColorType;
  contentName: ContentNameType;
  handleSetContentName: (content: ContentNameType) => void;
}

interface ContentsType {
  value: ContentNameType;
  text: string;
}

const contents: ContentsType[] = [
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
