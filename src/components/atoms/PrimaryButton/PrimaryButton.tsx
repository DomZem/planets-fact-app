import { type FC } from 'react';
import { type nameColorType } from '../../../types/theme';
import { Wrapper } from './PrimaryButton.styles';

interface PrimaryButtonProps {
  nameColor: nameColorType;
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
  spanText?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  nameColor,
  isActive,
  onClick,
  children,
  spanText,
}) => (
  <Wrapper nameColor={nameColor} isActive={isActive} onClick={onClick}>
    {spanText != null && <span>{spanText}</span>}
    {children}
  </Wrapper>
);

export default PrimaryButton;
