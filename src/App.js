import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SolarSystem />
        </main>
      </div>
    );
  }
}

export default App;
