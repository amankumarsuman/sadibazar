import React, { useState, useEffect } from "react";

function Timer({ endDate }) {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateRemainingTime() {
    const timeDiff = Date.parse(endDate) - Date.now();
    const remainingSeconds = Math.max(timeDiff / 1000, 0);
    const remainingDays = Math.floor(remainingSeconds / 86400);
    const remainingHours = Math.floor((remainingSeconds % 86400) / 3600);
    const remainingMinutes = Math.floor((remainingSeconds % 3600) / 60);
    const remainingSecondsOnly = Math.floor(remainingSeconds % 60);
    return {
      days: remainingDays,
      hours: remainingHours,
      minutes: remainingMinutes,
      seconds: remainingSecondsOnly,
    };
  }

  if (
    remainingTime.days === 0 &&
    remainingTime.hours === 0 &&
    remainingTime.minutes === 0
  ) {
    return <div>Offer ended</div>;
  }

  return (
    <div style={{ color: "red", fontWeight: "bold" }}>
      {remainingTime.days} days {remainingTime.hours} hours{" "}
      {remainingTime.minutes} minutes {remainingTime.seconds} seconds
    </div>
  );
}

export default Timer;
