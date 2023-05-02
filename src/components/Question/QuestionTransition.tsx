import { useState, useEffect } from 'react';
const QuestionTransition = ({ questionNo, duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration / 1000);

  useEffect(() => {
    setInterval(() => {
      setTimeLeft((prev) => {
        return prev - 1;
      });
    }, 1000);
  }, []);
  return <h1 className="text-4xl">{`Câu hỏi ${questionNo} bắt đầu sau ${timeLeft} giây`}</h1>;
};

export default QuestionTransition;
