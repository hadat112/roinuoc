import { Progress } from 'antd';
import { useState, useEffect } from 'react';

const Timer = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center gap-6">
      <Progress
        percent={timeLeft * 10}
        showInfo={false}
        strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }}
        trailColor="#fff"
      />
      <h1 className="text-center text-2xl whitespace-nowrap">{`${timeLeft} s`}</h1>
    </div>
  );
};

export default Timer;
