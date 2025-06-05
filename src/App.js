import React, { useState } from 'react';
import LunarPhase from './components/LunarPhase';
import StarsImg from './stars.png'

function App() {
  const [bgCol, setBgCol ] = useState('#000000');
  return (
    <div className="App" style={{
      backgroundColor: bgCol,
      backgroundImage: `url(${StarsImg})`,
      backgroundRepeat: 'repeat',
      transition: '2s',
      height:'100vh',
      width: '100vw',
      position: 'absolute',
      top:'0',
    }}>
      <LunarPhase setBgCol={setBgCol} />
    </div>
  );
}

export default App;
