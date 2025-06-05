import React from "react";
const phaseMap = {
  "New Moon": "🌑",
  "Waxing Crescent": "🌒",
  "First Quarter": "🌓",
  "Waxing Gibbous": "🌔",
  "Full Moon": "🌕",
  "Waning Gibbous": "🌖",
  "Last Quarter": "🌗",
  "Waning Crescent": "🌘",
  "Dark Moon": "🌚",
};
const phaseCols = {
  "New Moon": "#1a0a2d",
  "Waxing Crescent": "#1e0e3a",
  "First Quarter": "#221144",
  "Waxing Gibbous": "#261a5a",
  "Full Moon": "#3a2a6f",
  "Waning Gibbous": "#261a5a",
  "Last Quarter": "#221144",
  "Waning Crescent": "#1e0e3a",
  "Dark Moon": "#0f0a1a",
};
const phaseMagic = {
  "New Moon": {
    gist:'Reset',
    advice:
      "Set your intentions for the lunar cycle ahead and lean into faith.",
  },
  "Waxing Crescent": {
    gist:'Refine',
    advice:
      "Commit to your intentions. Send your desires into the world tonight.",
  },
  "First Quarter": {
    gist:'Action',
    advice:
      "When uncertainty arises, respond with affirmations and trust. Do not waiver. Take action.",
  },
  "Waxing Gibbous": {
    gist:'Trust & Refine',
    advice: "Refine and make final adjustments to your goal.",
  },
  "Full Moon": { 
    gist:'Celebrate',
    advice: "Set and receive the manifestation of your goal." 
  },
  "Waning Gibbous": {
    gist:'Share',
    advice: "Share and make use of what you gained from the full moon.",
  },
  "Last Quarter": {
    gist:'Reflect',
    advice: "Reflect on the ripples your goal had on the world.",
  },
  "Waning Crescent": {
    gist:'Surrender',
    advice: "Remember what empties will eventually refill.",
  },
  "Dark Moon": {
    gist:'Break it down',
    advice:
      "Deconstruct what is stopping you from your goals right now. Search for what you want.",
  },
};

const LunarPhaseDisplay = ({ phase, setBgCol }) => {
  setBgCol(phaseCols[phase.Phase]);
  return (
    <div
      style={{
        color: "lightpink",
        textAlign: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
        width: "50%",
        margin: "auto",
        padding: "3em",
        borderRadius: "1em",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "lightblue",
        }}
      >
        Lunar Phase
      </h1>
      <h1
        style={{
          fontSize: "100px",
          textShadow: `0 0 ${phase.Illumination * 20}px #014093`,
        }}
      >
        {phaseMap[phase.Phase]}
      </h1>
      <h1>{phase.Phase}</h1>
      <p
        style={{
          textShadow: `0 0 ${phase.Illumination * 10}px #014093`,
        }}
      >
        <b>Illumination: {phase.Illumination * 100}%</b>
      </p>
      <details>
        <summary>Witchy Stuff</summary>
        <h2>{phaseMagic[phase.Phase].gist}</h2>
        {phaseMagic[phase.Phase].advice}
      </details>
    </div>
  );
};

export default LunarPhaseDisplay;
