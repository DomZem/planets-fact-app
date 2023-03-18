import { usePlanet } from '../../hooks/usePlanet';

const Planet = () => {
  const { planet, error } = usePlanet();

  return (
    <p>
      {!error && planet !== null
        ? `Hello from ${planet.name}`
        : 'Maybe next time!'}
    </p>
  );
};

export default Planet;
