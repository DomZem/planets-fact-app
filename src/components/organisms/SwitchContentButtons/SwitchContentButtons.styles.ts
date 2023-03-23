import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 6.9rem;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2.4rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  background-color: ${({ theme }) => theme.colors.federalBlue};

  z-index: 800;

  @media (min-width: 768px) {
    position: static;

    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 1.6rem;

    height: auto;
    padding: 0;
    border: none;

    background-color: transparent;
  }

  @media (min-width: 1024px) {
    flex: 0;
  }
`;
