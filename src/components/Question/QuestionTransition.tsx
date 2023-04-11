import { Heading } from '@chakra-ui/react';
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
  return <Heading size="lg">{`Câu hỏi ${questionNo} bắt đầu sau ${timeLeft} giây`}</Heading>;
};

export default QuestionTransition;
