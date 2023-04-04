import { useDispatch } from 'react-redux';
import { setName } from '@/store/user';
import randomWords from 'random-words';
import { useRouter } from 'next/router';
import { Form, Input, Button, Tabs, TabsProps } from 'antd';

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // Event Handlers
  const createGameHandler = (values) => {
    const name = values.name;
    dispatch(setName(name));
    const randomRoomID = randomWords(3).join('-');
    router.push(`/game/room/${randomRoomID}`);
  };

  const joinGameHandler = (values) => {
    const name = values.name;
    const gameID = values.gameID;
    dispatch(setName(name));
    router.push(`/game/room/${gameID}`);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Tạo phòng',
      children: (
        <Form layout="vertical" onFinish={createGameHandler}>
          <Form.Item id="name" label="Nhập tên của bạn" required name="name">
            <Input className="text-text-game" />
          </Form.Item>
          <Form.Item>
            <Button className="border-none !bg-[#ECC94B]" htmlType="submit">
              Tạo
            </Button>
          </Form.Item>
        </Form>
      ),
    },
    {
      key: '2',
      label: 'Vào phòng',
      children: (
        <Form layout="vertical" onFinish={joinGameHandler}>
          <Form.Item id="gameID" required label="Game ID" name="gameID">
            <Input className="text-text-game" />
          </Form.Item>
          <Form.Item id="name" required label="Nhập tên của bạn" name="name">
            <Input className="text-text-game" />
          </Form.Item>
          <Form.Item>
            <Button className="border-none !bg-[#ECC94B]" htmlType="submit">
              Vào
            </Button>
          </Form.Item>
        </Form>
      ),
    },
  ];

  return (
    <div className="game mx-auto w-full justify-center min-h-[100vh] items-center bg-[#151515] flex flex-col">
      <h1 className="text-3xl mb-16 text-text-game">Game</h1>
      <Tabs defaultActiveKey="1" items={items} type="card" />
    </div>
  );
};

export default Home;
