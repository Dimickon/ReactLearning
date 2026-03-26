import { useState } from 'react';
import generateRandomNum from '../Utils/generateRandomNum';

export default function RandomNumber({ min, max }) {
  const [randomNum, setRandomNum] = useState(generateRandomNum(min, max));
  const changeRandomNum = () => {
    setRandomNum(generateRandomNum(min, max));
  };

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate new random number</button>
    </div>
  );
}
