import styled from 'styled-components';

export const Wrapper = styled.p`
  font-size: 1.2rem;
  line-height: 208%;

  opacity: 0.5;
`;

export const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;

  margin-left: 0.5rem;
  gap: 0.4rem;

  color: ${({ theme }) => theme.colors.white};
  text-decoration: underline;
`;
