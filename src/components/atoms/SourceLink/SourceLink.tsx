import { type FC } from 'react';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { StyledLink, Wrapper } from './SourceLink.styles';

interface SourceLinkProps {
  text?: string;
  sourceName: string;
  source: string;
}

const SourceLink: FC<SourceLinkProps> = ({ source, text = 'Source', sourceName }) => {
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
