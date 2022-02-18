import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="cards-box">
          {missions.map((eachMission, index) => (
            <MissionCard
              key={ index }
              name={ eachMission.name }
              year={ eachMission.year }
              country={ eachMission.country }
              destination={ eachMission.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
