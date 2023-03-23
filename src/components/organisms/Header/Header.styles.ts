import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 6.9rem;
  padding: 0 1.9rem 0 2.4rem; // 1.9rem on the right site, beasue toggle button have 0.5rem
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  background-color: ${({ theme }) => theme.colors.federalBlue};

  z-index: 990;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    height: 16rem;
    padding: 3.2rem 5.1rem 0 5.1rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 8.6rem;
    padding: 0 3.2rem;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 2.8rem;
  letter-spacing: -1.05px;
  line-height: 3.6rem;
`;
