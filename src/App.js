import React from 'react';
import DashBoardComponent from './containers/DashBoard/DashBooardComponent';
import NavigationCoomponent from './containers/Navigation/NavigationComponent';

function App() {
  return (
    <div className="App">
      <NavigationCoomponent />
      <DashBoardComponent />
    </div>
  );
}

export default App;
