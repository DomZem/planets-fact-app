import { useParams } from 'react-router-dom';

export const Planet = () => {
  const { planetName } = useParams();

  return <p>Hello from {planetName}!</p>;
};

export default Planet;
