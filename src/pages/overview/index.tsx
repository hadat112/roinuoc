import { createPost, deletePost, getPost } from '@/services/puppetService';
import { Input, Button, message } from 'antd';
import { useEffect, useState } from 'react';
import CreatePost from './components/CreatePost';
import ShortPost from './components/ShortPost';
import Sider from './components/Sider';

export default function Overview() {
  const [modalState, setModalState] = useState({ open: false });
  const [post, setPost] = useState<any>();

  const handleSubmit = async (title: string, content: any) => {
    const dataForm = {
      title: title,
      content: content,
      slug: title,
      type: 'overview',
    };
    const result: any = await createPost(dataForm);

    if (result.error) {
      setModalState({ open: false });
      return message.error(result.error);
    }
    setModalState({ open: false });
  };

  const handleDeletePost = async (id) => {
    const result: any = await deletePost({ id });
    if (result.error) return message.error(result.error);

    const newPost = post.filter((post) => post._id !== id);

    setPost(newPost);
  };

  const getPostList = async () => {
    const response = await getPost();
    setPost(response);
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <div className="flex flex-col w-full p-4 relative">
      <div className="max-w-[50%] w-full flex gap-4 mx-auto">
        <Input />
        <Button className="text-2xl leading-5" onClick={() => setModalState({ open: true })}>
          +
        </Button>
      </div>

      {post?.map((post) => {
        return (
          <div key={post._id} className="w-full flex-1">
            <ShortPost handleDelete={handleDeletePost} data={post} />
          </div>
        );
      })}
      <Sider />
      <CreatePost
        onOk={handleSubmit}
        onCancel={() => setModalState({ open: false })}
        visible={modalState.open}
      />
    </div>
  );
}
