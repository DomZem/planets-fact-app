import { type FC } from 'react';
import { type ColorType } from '../../../types/theme';
import { ButtonWrapper } from './SecondaryButton.styles';

interface SecondaryButtonProps {
  color: ColorType;
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ color, isActive, children, onClick }) => (
  <ButtonWrapper as="button" color={color} isActive={isActive} onClick={onClick}>
    {children}
  </ButtonWrapper>
);

export default SecondaryButton;
