import { type FC } from 'react';
import { ListWrapper, StyledListItem, StyledTitle, StyledValue } from './StatisticsList.styles';

interface StatisticsListProps {
  statistics: Array<{
    title: string;
    value: string;
  }>;
}

const StatisticsList: FC<StatisticsListProps> = ({ statistics }) => (
  <ListWrapper>
    {statistics.map(({ title, value }) => (
      <StyledListItem as="li" key={title}>
        <StyledTitle>{title}</StyledTitle>
        <StyledValue>{value}</StyledValue>
      </StyledListItem>
    ))}
  </ListWrapper>
);

export default StatisticsList;
