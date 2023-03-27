import { type FC } from 'react';
import { type ColorType } from '../../../types/theme';
import { ButtonWrapper } from './PrimaryButton.styles';

interface PrimaryButtonProps {
  color: ColorType;
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
  spanText?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ color, isActive, onClick, children, spanText }) => (
  <ButtonWrapper as="button" color={color} isActive={isActive} onClick={onClick}>
    {spanText != null && <span>{spanText}</span>}
    {children}
  </ButtonWrapper>
);

export default PrimaryButton;
