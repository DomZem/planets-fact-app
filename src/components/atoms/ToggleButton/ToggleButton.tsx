import { type FC } from 'react';
import { ButtonWrapper, StyledLine } from './ToggleButton.styles';

interface ToggleButtonProps {
  isOpen: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({ isOpen, onClick }) => (
  <ButtonWrapper isOpen={isOpen} onClick={onClick}>
    <StyledLine />
    <StyledLine />
    <StyledLine />
  </ButtonWrapper>
);

export default ToggleButton;
