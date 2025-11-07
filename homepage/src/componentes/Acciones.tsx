import React, { useState, useEffect } from 'react';

const Acciones = () => {
  const [counter, setCounter] = useState(0);
   const [manualCounter, setManualCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("*");
      setCounter((prev: number) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const changeValue = (value: number): void => {
    setCounter((current: number) => current + value);
    setManualCounter((current: number) => current + value);

  };

  const resetValue = (value: number): void => {
    setCounter(value);
    setManualCounter(0);
  };
};

export default Acciones;
