import { Center, VStack, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import GameView from '@/components/GameView/index';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { setSocketID } from '@/store/user';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { Tooltip, Badge, Button } from 'antd';

const ENDPOINT = 'http://localhost:4001';

let socket;

const GameRoom = () => {
  const router = useRouter();
  const id = router.asPath.split('/')[3];
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [isSocketJoined, setIsSocketJoined] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [gameStatus, setGameStatus] = useState('pending');
  const [gameState, setGameState] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit('join', { name: name, room: id }, ({ error, user }) => {
      if (error) {
        alert(error);
      } else {
        dispatch(setSocketID(user.id));
        setIsSocketJoined(true);
      }
    });
    return () => {
      socket.disconnect();
    };
  }, [dispatch, id, name]);

  useEffect(() => {
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
    socket.on('updateGameState', ({ gameState }) => {
      setGameState(gameState);
      setGameStatus(gameState.status);
      setSelectedAnswer(null);
    });
    socket.on('updateLeaderboard', ({ leaderboard }) => {
      setLeaderboard(leaderboard);
    });
  }, []);

  // Event Handlers
  const sendReadyStatus = () => {
    // eslint-disable-next-line no-unused-vars
    socket.emit('player-ready', { name: name, room: id }, ({ _, error }) => {
      if (error === undefined) {
        setIsReady(true);
      }
    });
  };
  const selectOption = ({ answerID }) => {
    setSelectedAnswer(answerID);
    socket.emit(
      'player-answer',
      {
        name: name,
        room: id,
        questionID: gameState.questions[gameState.currentQuestionNo - 1].id,
        answerID,
      },
      ({ error }) => {
        if (error !== undefined) {
          alert(error);
        }
      }
    );
  };

  return (
    <Center bg="#151515" minH="100vh">
      <VStack spacing="1rem" color="white">
        <h1 className="text-text-game text-3xl">Phòng chơi</h1>
        <p>
          Game ID:{' '}
          <CopyToClipboard
            text={id}
            onCopy={() => {
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 1000);
            }}
          >
            <Button className="bg-none text-teal rounded-[16px] border-2 border-solid border-teal hover:text-teal hover:bg-teal-50">
              {id}
            </Button>
          </CopyToClipboard>
          <Tooltip title="Copied!" placement="bottomRight" open={isCopied}>
            <span />
          </Tooltip>
        </p>
        {!isSocketJoined && (
          <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
        )}
        {isSocketJoined && (
          <>
            <p>Người chơi trong phòng:</p>
            {users.length > 0 &&
              users.map((user) => (
                <p key={user.id}>
                  {user.name}{' '}
                  <Badge
                    count={user.isReady ? 'Ready' : 'Pending'}
                    color="user.isReady ? 'green' : 'orange'"
                  />
                </p>
              ))}
            {gameStatus === 'pending' && (
              <Button className="border-none !bg-[#ECC94B]" disabled={isReady} onClick={sendReadyStatus}>
                {isReady ? 'Chờ các người chơi' : 'Ready'}
              </Button>
            )}
            {gameStatus === 'started' && (
              <GameView
                selectedAnswer={selectedAnswer}
                selectOption={selectOption}
                gameState={gameState}
                leaderboard={leaderboard}
              />
            )}
            {gameStatus === 'ended' && (
              <>
                <h1 className="text-md">Game đã kết thúc</h1>
                <Button
                  className="border-none !bg-[#ECC94B]"
                  onClick={() => {
                    router.replace('/game');
                  }}
                >
                  Chơi lại
                </Button>
              </>
            )}
          </>
        )}
      </VStack>
    </Center>
  );
};
export default GameRoom;
