import React, { useState, useEffect } from 'react';

const TimerApp = () => {
  const [inputSeconds, setInputSeconds] = useState(0); // To store user input in seconds
  const [timeLeft, setTimeLeft] = useState(0); // To track the remaining time
  const [isActive, setIsActive] = useState(false); // To track if the timer is active or not

  useEffect(() => {
    let timerInterval;

    if (isActive && timeLeft > 0) {
      timerInterval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(timerInterval); // Cleanup interval on component unmount
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
