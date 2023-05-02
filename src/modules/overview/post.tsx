import { Divider, Tooltip, Avatar, Input, message, Button, Popconfirm } from 'antd';
import dayjs from 'dayjs';
import { DeleteOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Comment } from '@ant-design/compatible';
import { useEffect, useState } from 'react';
import { createComment, deleteComment, getPostDetail } from '@/services/puppetService';
import { createMarkUp } from './components/ShortPost';
import Sider from './components/Sider';
import { useAppSelector } from '@/store/hook';
import LoginRequest from '@/components/LoginRequest';

dayjs.extend(relativeTime);

export default function Post({ slug }) {
  const [post, setPost] = useState<any>();
  const [comment, setComment] = useState<string>();
  const [comments, setComments] = useState<any>();
  const [open, setOpen] = useState<boolean>();
  const { username, role } = useAppSelector((state) => state.auth);

  const handleComment = (value) => {
    setComment(value.target.value);
  };

  const handleSendComment = async () => {
    if (!comment) return message.error('Vui lòng nhập bình luận');

    if (!username) {
      setOpen(true);
      return;
    }
    const result: any = await createComment({
      post_id: post._id,
      content: comment,
    });
    if (result.error) {
      return message.error(result.error);
    }
    setComments((state) => [result.data, ...state]);
    setComment('');
  };

  async function getPost() {
    if (slug.includes('[slug]')) return;
    const response = await getPostDetail({ slug });
    if (!response.data) message.error('da co loi');
    setPost(response.data?.post);
    setComments(response.data?.comments);
  }

  const handleDeleteComment = async (id) => {
    const result: any = await deleteComment({ id });

    if (result.error) {
      return message.error(result.error);
    }

    const newComments = comments.filter((comment) => comment._id !== id);

    setComments(newComments);
  };

  useEffect(() => {
    getPost();
  }, [slug]);

  return (
    <div className="flex">
      <div className="max-w-[900px] bg-white px-16 pt-8 pb-8 mx-auto mt-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center leading-10 mb-4">{post?.title}</h1>
        <span className="">
          {dayjs(post?.updatedAt).format('DD-MM-YYYY')} - Rối nước tế tiêu - {comments?.length} Bình luận
        </span>
        <div className="w-[60px]">
          <Divider />
        </div>
        <div
          className="text-lg leading-10 text-justify mb-8"
          dangerouslySetInnerHTML={createMarkUp(post?.content)}
        ></div>
        <span className="self-start text-xl font-semibold">Comment</span>
        <div className="flex w-full gap-4 mb-6">
          <Input onChange={handleComment} value={comment} placeholder="Để lại comment của bạn" />
          <Button onClick={handleSendComment}>
            <SendOutlined />
          </Button>
        </div>
        {comments?.map((comment) => {
          return (
            <div
              key={comment._id}
              className="flex justify-between w-full border-0 border-solid border-grey-200 border-t  items-center"
            >
              <Comment
                className="self-start w-full"
                author={<a>{comment?.username}</a>}
                avatar={<Avatar size="large" icon={<UserOutlined />} alt="Han Solo" />}
                content={<p>{comment?.content}</p>}
                datetime={
                  <Tooltip title={dayjs().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{dayjs(comment?.updatedAt).fromNow()}</span>
                  </Tooltip>
                }
              ></Comment>
              {role === 112 && (
                <Popconfirm
                  key="delete"
                  title="Bạn có muốn xoá bình luận này?"
                  onConfirm={() => handleDeleteComment(comment?._id)}
                >
                  <DeleteOutlined key="ellipsis" />
                </Popconfirm>
              )}
            </div>
          );
        })}
      </div>
      <Sider recommend title={post?.title} id={post?._id} />
      <LoginRequest open={open} onCancel={() => setOpen(false)} />
    </div>
  );
}
