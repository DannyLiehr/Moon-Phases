import React, {useState} from 'react';
const phaseMap = {
    'New Moon': '🌑',
    'Waxing Crescent': '🌒',
    'First Quarter': '🌓',
    'Waxing Gibbous': '🌔',
    'Full Moon': '🌕',
    'Waning Gibbous': '🌖',
    'Last Quarter': '🌗',
    'Waning Crescent': '🌘',
    'Dark Moon': '🌚'
}
const phaseCols = {
    'New Moon': '#1a0a2d',
    'Waxing Crescent': '#1e0e3a',
    'First Quarter': '#221144',
    'Waxing Gibbous': '#261a5a',
    'Full Moon': '#3a2a6f',
    'Waning Gibbous': '#261a5a',
    'Last Quarter': '#221144',
    'Waning Crescent': '#1e0e3a',
    'Dark Moon': '#0f0a1a'
};

const LunarPhaseDisplay = ({ phase, setBgCol }) => {
    
    setBgCol(phaseCols[phase.Phase])
  return (
    <div style={{
        color: 'lightpink',
        textAlign:'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        width: '50%',
        margin: 'auto',
        padding: '3em',
        borderRadius: '1em'
    }}>
        <h1 style={{
        textAlign: 'center',
        color: 'lightblue'
      }}>Lunar Phase Tracker</h1>
      <h1 style={{ 
        fontSize: '100px',
        textShadow:'0 0 30px #014093'
        }}>{phaseMap[phase.Phase]}</h1>
      <h1>{phase.Phase}</h1>
      <p><b>Illumination: {phase.Illumination}%</b></p>
    </div>
  );
};

export default LunarPhaseDisplay;
