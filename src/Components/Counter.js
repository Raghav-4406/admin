import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount !== null ? Number(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const calculateBackgroundColor = () => {
    const maxCount = 100;
    const clampedCount = Math.min(Math.max(count, 0), maxCount);
    const percentage = clampedCount / maxCount;
    return `rgba(0, 123, 255, ${percentage})`;
  };

  return (
    <div className="counter-container" style={{ backgroundColor: calculateBackgroundColor() }}>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-</button>
     
    </div>
  );
}

export default Counter;
