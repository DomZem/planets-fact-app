import styled from 'styled-components';
import {
  closeFirstLine,
  closeThirdLine,
  hideSecondLine,
  openFirstLine,
  openThirdLine,
  showSecondLine,
} from './ToggleButton.animation';

export const StyledLine = styled.div`
  width: 2.4rem;
  height: 0.3rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const ButtonWrapper = styled.button<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.4rem;

  padding: 0.5rem;
  border: none;

  background-color: transparent;

  cursor: pointer;

  & > ${StyledLine} {
    transition-property: opacity, transform;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
  }

  & > ${StyledLine}:nth-child(1) {
    ${({ isOpen }) => (isOpen ? openFirstLine : closeFirstLine)}
  }

  & > ${StyledLine}:nth-child(2) {
    ${({ isOpen }) => (isOpen ? hideSecondLine : showSecondLine)}
  }

  & > ${StyledLine}:nth-child(3) {
    ${({ isOpen }) => (isOpen ? openThirdLine : closeThirdLine)}
  }
`;
