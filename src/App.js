import React from 'react';
import Welcome from './components/Welcome/Welcome';
import Details from './components/Details/Details';

function App() {
  const background = {
    backgroundColor: '#292121', // Your background color
  };

  return (
    <div style={background}>
      <Welcome />
      <Details />
    </div>
  );
}

export default App;
