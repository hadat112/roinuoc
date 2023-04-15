import { createPlay, getPlays } from '@/services/puppetService';
import { Button, Card, Input, message } from 'antd';
// import Sider from '../overview/components/Sider';
import { useEffect, useState } from 'react';
import CreatePlay from './components/createPlays';
import { useAppSelector } from '@/store/hook';

export default function Plays() {
  const [playList, setPlayList] = useState([]);
  const [modalState, setModalState] = useState({ open: false });
  const { role } = useAppSelector((state) => state.auth);

  async function getPlayList() {
    const response: any = await getPlays();
    if (response.error) return message.error(response.error);
    setPlayList(response.data);
  }

  function removeAccents(str) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D');
  }

  const handleCreatePlay = async (params: { name: string; content: any; image: any }) => {
    const formData = new FormData();
    formData.append('image', params?.image);
    formData.append('content', params?.content);
    formData.append('name', params?.name);
    formData.append('slug', removeAccents(params?.name).toLocaleLowerCase().split(' ').join('-'));
    const result: any = await createPlay(formData);

    if (result.error) {
      setModalState({ open: false });
      return message.error(result.error);
    }

    setPlayList((state) => [result.data, ...state]);
    setModalState({ open: false });
  };

  //   const handleDeletePost = async (id) => {
  //     const result: any = await deletePlay({ id });
  //     if (result.error) return message.error(result.error);

  //     const newPlays = playList.filter((post) => post._id !== id);

  //     setPlayList(newPlays);
  //   };

  useEffect(() => {
    getPlayList();
  }, []);

  // const handleSubmit = () => {
  //   createPlay();
  // };

  return (
    <>
      <div className="home w-full bg-white">
        {role === 112 && (
          <div className="max-w-[900px] w-full flex gap-4 mx-auto mt-4">
            <Input />
            <Button className="text-2xl leading-5" onClick={() => setModalState({ open: true })}>
              +
            </Button>
          </div>
        )}
        <div className="relative">
          <div className="max-w-[1200px] px-16 pt-8 pb-8 mx-auto flex flex-col">
            <h1 className="text-3xl font-semibold p-4 border-0 border-solid border-grey-700 border-b-4 mb-6 mt-8">
              Vở diễn nổi bật
            </h1>
            <div className="flex-wrap justify-between items-center flex gap-y-6">
              {playList?.map((play, index) => {
                return (
                  <Card
                    className="max-w-[300px]"
                    key={index}
                    hoverable
                    cover={<img className="max-w-[300px]" alt="example" src={play?.image} />}
                  >
                    <Card.Meta title={<h1 className="text-xl">{play?.name}</h1>}></Card.Meta>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <CreatePlay
        open={modalState.open}
        onCancel={() => setModalState({ open: false })}
        onOk={handleCreatePlay}
      />
    </>
  );
}
