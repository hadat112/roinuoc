import { createPost, deletePost, getPost, searchPost, updatePost } from '@/services/puppetService';
import { Input, Button, message, Spin } from 'antd';
import { useEffect, useState } from 'react';
import CreatePost from '../../modules/overview/components/CreatePost';
import ShortPost from '../../modules/overview/components/ShortPost';
import Sider from '../../modules/overview/components/Sider';
import { useAppSelector } from '@/store/hook';

export default function Overview() {
  const [modalState, setModalState] = useState({ open: false });
  const [post, setPost] = useState<any>();
  const [fetching, setFetching] = useState(false);
  const { role } = useAppSelector((state) => state.auth);

  function removeAccents(str) {
    if (!str) return;
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D');
  }
  const handleSubmit = async (title: string, content: any) => {
    const dataForm = {
      title: title,
      content: content,
      slug: removeAccents(title).toLocaleLowerCase().split(' ').join('-'),
      type: 'overview',
    };
    const result: any = await createPost(dataForm);

    if (result.error) {
      setModalState({ open: false });
      return message.error(result.error);
    }

    setPost((state) => [result.data, ...state]);
    setModalState({ open: false });
  };

  const handleDeletePost = async (id) => {
    const result: any = await deletePost({ id });
    if (result.error) return message.error(result.error);

    const newPost = post.filter((post) => post?._id !== id);

    setPost(newPost);
  };

  const handleUpdatePost = async (id: string, title: string, content: string) => {
    const dataForm = {
      title,
      content,
      id,
      slug: removeAccents(title).toLocaleLowerCase().split(' ').join('-'),
      type: 'overview',
    };

    const result: any = await updatePost(dataForm);

    if (result.error) {
      setModalState({ open: false });
      return message.error(result.error);
    }

    const newPosts = post.map((post) => {
      if (post?._id !== id) return post;
      return { ...post, title, content };
    });

    setPost(newPosts);
    setModalState({ open: false });
  };

  const getPostList = async () => {
    setFetching(true);
    const response: any = await getPost({ type: 'post' });
    setFetching(false);

    if (response.error) return message.error(response.error);
    setPost(response.data);
  };

  const handleSearch = async (value) => {
    setFetching(true);
    const result: { data: any; error?: string } = await searchPost({ text: value });

    setTimeout(() => {
      setFetching(false);
    }, 500);

    if (result.error) {
      return message.error(result.error);
    }

    setPost(result.data);
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <div className="flex bg-[#ECEFF1]">
      <div className="flex flex-col flex-1 w-full p-4">
        {role === 112 && (
          <div className="max-w-[900px] w-full flex gap-4 mx-auto">
            <Input />
            <Button className="text-2xl leading-5" onClick={() => setModalState({ open: true })}>
              +
            </Button>
          </div>
        )}
        <Spin spinning={fetching}>
          {post?.map((post) => {
            return (
              <div key={post?._id} className="w-full flex-1">
                <ShortPost handleUpdate={handleUpdatePost} handleDelete={handleDeletePost} data={post} />
              </div>
            );
          })}
        </Spin>
        <CreatePost
          onOk={handleSubmit}
          onCancel={() => setModalState({ open: false })}
          visible={modalState.open}
        />
      </div>
      <Sider className="" onSearch={handleSearch} />
    </div>
  );
}
