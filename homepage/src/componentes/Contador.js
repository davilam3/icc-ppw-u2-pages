import React, { useState, useEffect } from 'react';

function Contador() {
  // Contador automático
  const [autoCounter, setAutoCounter] = useState(0);

  // Contador manual
  const [manualCounter, setManualCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("*");
      setAutoCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const changeValue = (value) => {
    setManualCounter((current) => current + value);
    setAutoCounter((current) => current + value);
  };

  const resetValue = () => {
    setManualCounter(0);
    setAutoCounter(0);
  };

  return (
    <div className="contador">
        <h1>HOME PAGE</h1>
        <h2>Fundamentos</h2>
        <p>Sebastian Cabrera, Diana Avila</p>
        <h2>Contador: {autoCounter}</h2>
        <h2>Contador manual: {manualCounter}</h2>
          <div className="botones">
            <button onClick={() => changeValue(1)}>Incrementar</button>
            <button onClick={() => changeValue(-1)}>Restar</button>
            <button onClick={() => resetValue(0)}>Reseteo</button>
          </div>
    </div>
  );
}

export default Contador;
