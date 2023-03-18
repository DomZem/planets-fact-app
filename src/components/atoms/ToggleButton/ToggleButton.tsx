import { type FC } from 'react';
import { StyledLine, Wrapper } from './ToggleButton.styles';

interface ToggleButtonProps {
  isOpen: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({ isOpen, onClick }) => (
  <Wrapper isOpen={isOpen} onClick={onClick}>
    <StyledLine />
    <StyledLine />
    <StyledLine />
  </Wrapper>
);

export default ToggleButton;
