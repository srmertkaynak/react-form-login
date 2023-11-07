import React, { useEffect, useState } from "react";

const EffectExample = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log(number);
  }, [number]);

  const handleClick = () => {
    setNumber(Math.random(1, 10));
  };

  return (
    <div>
      {number}
      <br />
      <button onClick={handleClick}>Değiştir</button>
    </div>
  );
};

export default EffectExample;
