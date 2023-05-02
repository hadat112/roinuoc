import { createPlay, deletePlay, getPlays, updatePlay } from '@/services/puppetService';
import { Button, Card, Input, Popconfirm, Spin, message } from 'antd';
// import Sider from '../overview/components/Sider';
import { useEffect, useState } from 'react';
import CreatePlay from './components/createPlays';
import { useAppSelector } from '@/store/hook';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export default function Plays() {
  const router = useRouter();
  const [playList, setPlayList] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [modalState, setModalState] = useState<any>({
    open: false,
    id: '',
    name: '',
    content: '',
    image: '',
    type: 'create',
  });
  const { role } = useAppSelector((state) => state.auth);
  const [title, setTitle] = useState('');

  async function getPlayList() {
    const response: any = await getPlays();
    if (response.error) return message.error(response.error);
    setPlayList(response.data);
  }

  function removeAccents(str) {
    if (!str) return '';
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D');
  }

  const handleCancel = () => {
    setModalState({
      id: '',
      open: false,
      type: 'create',
      name: '',
      image: '',
      content: '',
    });
  };

  const handleCreatePlay = async (params: { name: string; content: any; image: any }) => {
    const formData = new FormData();
    formData.append('image', params?.image);
    formData.append('content', params?.content);
    formData.append('name', params?.name);
    formData.append('slug', removeAccents(params?.name).toLocaleLowerCase().split(' ').join('-'));
    handleCancel();
    setTitle('');
    setFetching(true);
    const result: any = await createPlay(formData);
    setFetching(false);
    if (result.error) {
      return message.error(result.error);
    }

    setPlayList((state) => [result.data, ...state]);
  };

  const handleDeletePlay = async (id) => {
    const result: any = await deletePlay({ id });
    if (result.error) return message.error(result.error);

    const newPlays = playList.filter((post) => post._id !== id);

    setPlayList(newPlays);
  };

  const handleUpdatePlay = async (params: { id?: string; name: string; content: any; image: any }) => {
    const formData = new FormData();
    formData.append('id', params.id);
    formData.append('image', params.image);
    formData.append('content', params.content);
    formData.append('name', params.name);
    formData.append('slug', removeAccents(params.name).toLocaleLowerCase().split(' ').join('-'));
    handleCancel();

    setFetching(true);
    const result: any = await updatePlay(formData);
    setFetching(false);

    if (result.error) {
      handleCancel();
      return message.error(result.error);
    }

    getPlayList();
  };

  const handleOpenDetail = (slug) => {
    if (slug) router.push(`/vodien/${slug}`);
  };

  const handleChanged = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    getPlayList();
  }, []);

  return (
    <>
      <div className="home w-full bg-white">
        {role === 112 && (
          <div className="max-w-[900px] w-full flex gap-4 mx-auto mt-4">
            <Input onChange={handleChanged} />
            <Button
              className="text-2xl flex items-center justify-center"
              onClick={() =>
                setModalState((state) => ({ ...state, open: true, type: 'create', name: title }))
              }
            >
              +
            </Button>
          </div>
        )}
        <div className="relative">
          <div className="max-w-[1200px] px-16 pt-8 pb-8 mx-auto flex flex-col">
            <h1 className="text-3xl font-semibold p-4 border-0 border-solid border-grey-700 border-b-4 mb-6 mt-8">
              Vở diễn nổi bật
            </h1>
            <Spin spinning={fetching}>
              <div className="flex-wrap justify-between items-center flex gap-y-6">
                {playList?.map((play, index) => {
                  return (
                    <Card
                      className="max-w-[300px]"
                      key={index}
                      hoverable
                      cover={<img className="max-w-[300px]" alt="example" src={play?.image} />}
                      actions={
                        role === 112
                          ? [
                              <EyeOutlined onClick={() => handleOpenDetail(play?.slug)} key="view" />,
                              <EditOutlined
                                onClick={() =>
                                  setModalState({
                                    id: play._id,
                                    open: true,
                                    type: 'update',
                                    name: play.name,
                                    image: play.image,
                                    content: play.content,
                                  })
                                }
                                key="edit"
                              />,
                              <Popconfirm
                                key="delete"
                                title="Bạn có muốn xoá vở diễn này?"
                                onConfirm={() => handleDeletePlay(play._id)}
                              >
                                <DeleteOutlined key="ellipsis" />
                              </Popconfirm>,
                            ]
                          : []
                      }
                    >
                      <Card.Meta title={<h1 className="text-xl">{play?.name}</h1>}></Card.Meta>
                    </Card>
                  );
                })}
              </div>
            </Spin>
          </div>
        </div>
      </div>
      <CreatePlay
        {...modalState}
        onCancel={handleCancel}
        onOk={(params) => {
          modalState.type === 'create' ? handleCreatePlay(params) : handleUpdatePlay(params);
        }}
      />
    </>
  );
}
