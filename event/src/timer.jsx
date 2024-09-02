import React, { useState, useEffect } from 'react';

const TimerApp = () => {
  const [inputSeconds, setInputSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false); 

  useEffect(() => {
    let timerInterval;

    if (isActive && timeLeft > 0) {
      timerInterval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(timerInterval); 
  }, [isActive, timeLeft]);

  const startTimer = () => {
    setTimeLeft(inputSeconds);
    setIsActive(true);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return (
      <span>
        {hours > 0 && `${hours} hour${hours > 1 ? 's' : ''} `}
        {minutes} minute{minutes !== 1 ? 's' : ''} {remainingSeconds} second{remainingSeconds !== 1 ? 's' : ''}
      </span>
    );
  };

  return (
    <center>
      <h1>Timer App</h1>
      <div className="tim">
      <input
        type="number"
        placeholder="Enter time in seconds"
        onChange={(e) => setInputSeconds(Number(e.target.value))}
      />
      <button onClick={startTimer}>Start</button>
      </div>
      <div>
       { timeLeft!==0?<h2>Time Left: {formatTime(timeLeft)}</h2>:null}
      </div>
    </center>
  );
};

export default TimerApp;
