import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LunarPhaseDisplay from './LunarPhaseDisplay';

const LunarPhase = ({setBgCol}) => {
  const [phase, setPhase] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLunarPhase = async () => {
      const specificDate = new Date();
      const unixTimestamp = Math.floor(specificDate.getTime() / 1000);

      try {
        const response = await axios.get(`https://api.farmsense.net/v1/moonphases/?d=${unixTimestamp}`);
        setPhase(response.data[0]);
      } catch (err) {
        setError('Error fetching lunar phase data');
      } finally {
        setLoading(false);
      }
    };

    fetchLunarPhase();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <LunarPhaseDisplay phase={phase} setBgCol={setBgCol} />
  );
};

export default LunarPhase;
