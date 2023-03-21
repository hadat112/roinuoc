import { Divider, Tooltip, Avatar, Input, message } from 'antd';
import dayjs from 'dayjs';
import { LikeFilled, LikeOutlined, DislikeFilled, DislikeOutlined } from '@ant-design/icons';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'next/router';
import { Comment } from '@ant-design/compatible';
import { useEffect, useState } from 'react';
import { getPostDetail } from '@/services/puppetService';
dayjs.extend(relativeTime);

export default function Post() {
  const router = useRouter();
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);
  const [action, setAction] = useState<string>();
  const [post, setPost] = useState<any>();

  const onLike = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const onDislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  async function getPost() {
    const response = await getPostDetail({ slug: router.asPath.split('/')[1] });
    if (!response.data) message.error('da co loi');
    setPost(response.data);
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <div className="max-w-[900px] bg-white px-16 pt-8 pb-8 mx-auto mt-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center leading-10 mb-4">{post?.title}</h1>
        <span className="">06/10/2022 - Rối nước tế tiêu - 0 Bình luận</span>
        <div className="w-[60px]">
          <Divider />
        </div>
        <p className="text-lg leading-10 text-justify mb-8">{post?.content}</p>

        <span className="self-start text-xl font-semibold">Comment</span>
        <Input.TextArea placeholder="Để lại comment của bạn" />

        <Comment
          className="self-start border-0 border-solid border-grey-200 border-t"
          actions={[
            <>
              <span key="comment-basic-like">
                <Tooltip title="Like">
                  {action === 'liked' ? <LikeFilled onClick={onLike} /> : <LikeOutlined onClick={onLike} />}
                </Tooltip>
                <span>{likes}</span>
              </span>
              <span key="comment-basic-dislike">
                <Tooltip title="Dislike">
                  {action === 'disliked' ? (
                    <DislikeFilled onClick={onDislike} />
                  ) : (
                    <DislikeOutlined onClick={onDislike} />
                  )}
                </Tooltip>
                <span>{dislikes}</span>
              </span>
              <span key="comment-basic-reply-to">Reply to</span>
            </>,
          ]}
          author={<a>Hà Đạt</a>}
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
          content={<p>Bài viết rất hay rất ý nghĩa.</p>}
          datetime={
            <Tooltip title={dayjs().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{dayjs().fromNow()}</span>
            </Tooltip>
          }
        ></Comment>
      </div>
    </>
  );
}
