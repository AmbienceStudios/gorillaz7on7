/* eslint-disable react/function-component-definition */

'use client';

import { useEffect, useState } from 'react';

export default function Countdown() {
  const [deadline, setDeadline] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date('12/17/2022 00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      setHours(h);

      const m = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60),
      );
      setMinutes(m);

      const s = Math.floor(
        (difference % (1000 * 60)) / 1000,
      );
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setDeadline(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div> {deadline ? (<h1> Submissions Closed </h1>) : (

      <div className="timer-wrapper">
        <div className="timer-inner">
          <div className="timer-segment">
            <p className="time">{days}</p>
            <p className="label">Days</p>
          </div>
          <div className="timer-segment">
            <p className="time">{hours}</p>
            <p className="label">Hours</p>
          </div>
          <div className="timer-segment">
            <p className="time">{minutes}</p>
            <p className="label">Minutes</p>
          </div>
          <div className="timer-segment">
            <p className="time">{seconds}</p>
            <p className="label">Seconds</p>
          </div>
        </div>
      </div>

    )}
    </div>
  );
}

