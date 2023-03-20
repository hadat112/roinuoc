import { Input, Button } from 'antd';
import { useEffect, useState } from 'react';
import CreatePost from './components/CreatePost';
import ShortPost from './components/ShortPost';
import Sider from './components/Sider';

export default function Overview() {
  const [modalState, setModalState] = useState({ open: false });
  const [post, setPost] = useState<any>();
  const createPost = async (title: string, content: string) => {
    const dataForm = {
      title: title,
      content: content,
      slug: title,
      type: 'overview',
    };

    await fetch('http://localhost:3000/overview/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataForm),
    });
  };

  const handleSubmit = (title: string, content: any) => {
    createPost(title, content.ops[0].insert);
  };

  const getPostList = async () => {
    const response = await fetch('http://localhost:3000/overview', {
      method: 'GET',
    });

    const data = await response.json();

    setPost(data);
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <div className="flex flex-col w-full p-4 relative">
      <div className="max-w-[900px] w-full flex gap-4 mx-auto">
        <Input />
        <Button className="text-2xl leading-5" onClick={() => setModalState({ open: true })}>
          +
        </Button>
      </div>
      <div className="w-full flex-1" v-for="post in posts">
        <ShortPost data={post} />
      </div>
      <Sider />
      <CreatePost onOk={handleSubmit} visible={modalState.open} />
    </div>
  );
}
