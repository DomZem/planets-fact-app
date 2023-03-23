import { type FC } from 'react';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { StyledLink, Wrapper } from './SourceLink.styles';

interface SourceLinkProps {
  source: string;
  sourceName: string;
  text?: string;
}

const SourceLink: FC<SourceLinkProps> = ({ source, sourceName, text = 'Source' }) => {
  return (
    <Wrapper>
      {text}:
      <StyledLink href={source} target="_blank" rel="noreferrer">
        {sourceName}
        <FaExternalLinkSquareAlt />
      </StyledLink>
    </Wrapper>
  );
};

export default SourceLink;
