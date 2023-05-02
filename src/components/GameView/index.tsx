import Option from '../Question/Option';
import QuestionTransition from '../Question/QuestionTransition';
import { parseEntities } from '../Question/Option';
import Timer from '../Question/Timer';
import LeaderboardTable from './LeaderboardTable';
import { useAppSelector } from '@/store/hook';
const optionColours = ['#5582ac', '#f8f1ba', '#ea977d', '#e2c14d'];

const getCurrentUserAnswer = (currentUserSocketID, playersList, currentQnID, currentQnNo, questionsList) => {
  const currentPlayer = playersList.find((player) => player.id === currentUserSocketID);
  if (currentPlayer === undefined) {
    return '';
  } else {
    const playerAnswer = currentPlayer.answers[currentQnID];
    if (playerAnswer === undefined) {
      return 'Không có đáp án';
    } else {
      const playerAnsweredOption = questionsList[currentQnNo - 1].options.find(
        (option) => option.id === playerAnswer.answerID
      );
      if (playerAnsweredOption === undefined) {
        return '';
      } else {
        return playerAnsweredOption.payload;
      }
    }
  }
};

const GameView = ({ selectedAnswer, selectOption, gameState, leaderboard }) => {
  const { socketID } = useAppSelector((state) => state.user);

  const questionRoundStatus = gameState.questionRoundStatus;
  return (
    <>
      {questionRoundStatus === 'pending' && (
        <QuestionTransition questionNo={gameState.currentQuestionNo} duration={gameState.duration} />
      )}
      {questionRoundStatus === 'started' && (
        <>
          <Timer duration={gameState.duration} />
          <h1 className="text-2xl">Câu {gameState.currentQuestionNo}</h1>
          <h1 className="text-2xl">
            {parseEntities(gameState.questions[gameState.currentQuestionNo - 1].payload)}
          </h1>
          <div className="flex gap-4">
            {gameState.questions[gameState.currentQuestionNo - 1].options.map((option, index) => (
              <Option
                key={option.id}
                bg={optionColours[index]}
                content={option.payload}
                onClickHandler={() => {
                  // if (selectedAnswer !== null) return;
                  selectOption({ answerID: option.id });
                }}
                isSelected={option.id === selectedAnswer}
              />
            ))}
          </div>
        </>
      )}
      {questionRoundStatus === 'ended' && (
        <div>
          <h1 className="text-2xl">
            Câu trả lời của bạn:{' '}
            {gameState.currentQuestionNo <= gameState.questions.length &&
              parseEntities(
                getCurrentUserAnswer(
                  socketID,
                  gameState.players,
                  gameState.questions[gameState.currentQuestionNo - 1].id,
                  gameState.currentQuestionNo,
                  gameState.questions
                )
              )}
          </h1>
          <h1 className="text-2xl">
            Câu trả lời đúng:{' '}
            {gameState.currentQuestionNo <= gameState.questions.length &&
              parseEntities(
                gameState.questions[gameState.currentQuestionNo - 1].options.find(
                  (option) => option.id === gameState.questions[gameState.currentQuestionNo - 1].answerID
                ).payload
              )}
          </h1>
          <h1 className="text-2xl">Leaderboard</h1>
          <LeaderboardTable data={leaderboard} />
        </div>
      )}
    </>
  );
};

export default GameView;
