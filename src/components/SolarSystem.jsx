import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>
          {Planets.map((eachPlanets, index) => (
            <PlanetCard
              key={ index }
              planetName={ eachPlanets.name }
              planetImage={ eachPlanets.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
