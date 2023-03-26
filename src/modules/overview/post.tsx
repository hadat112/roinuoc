import { Divider, Tooltip, Avatar, Input, message, Button } from 'antd';
import dayjs from 'dayjs';
import { SendOutlined } from '@ant-design/icons';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Comment } from '@ant-design/compatible';
import { useEffect, useState } from 'react';
import { createComment, getPostDetail } from '@/services/puppetService';

dayjs.extend(relativeTime);

export default function Post({ slug }) {
  //   const [likes, setLikes] = useState<number>(0);
  //   const [dislikes, setDislikes] = useState<number>(0);
  //   const [action, setAction] = useState<string>();
  const [post, setPost] = useState<any>();
  const [comment, setComment] = useState<string>();
  const [comments, setComments] = useState<any>();

  //   const onLike = () => {
  //     setLikes(1);
  //     setDislikes(0);
  //     setAction('liked');
  //   };

  //   const onDislike = () => {
  //     setLikes(0);
  //     setDislikes(1);
  //     setAction('disliked');
  //   };

  const handleComment = (value) => {
    setComment(value.target.value);
  };

  const handleSendComment = async () => {
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
    const response = await getPostDetail({ slug });
    if (!response.data) message.error('da co loi');
    setPost(response.data?.post);
    setComments(response.data?.comments);
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <div className="max-w-[900px] bg-white px-16 pt-8 pb-8 mx-auto mt-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center leading-10 mb-4">{post?.title}</h1>
        <span className="">
          {dayjs(post?.created_at).format('DD-MM-YYYY')} - Rối nước tế tiêu - 0 Bình luận
        </span>
        <div className="w-[60px]">
          <Divider />
        </div>
        <p className="text-lg leading-10 text-justify mb-8">{post?.content}</p>

        <span className="self-start text-xl font-semibold">Comment</span>
        <div className="flex w-full gap-4 mb-6">
          <Input onChange={handleComment} value={comment} placeholder="Để lại comment của bạn" />
          <Button onClick={handleSendComment}>
            <SendOutlined />
          </Button>
        </div>
        {comments?.map((comment) => {
          return (
            <Comment
              key={comment._id}
              className="self-start border-0 border-solid border-grey-200 border-t w-full"
              // actions={[
              //   <>
              //     <span key={comment._id}>
              //       <Tooltip title="Like">
              //         {action === 'liked' ? (
              //           <LikeFilled onClick={onLike} />
              //         ) : (
              //           <LikeOutlined onClick={onLike} />
              //         )}
              //       </Tooltip>
              //       <span>{likes}</span>
              //     </span>
              //     <span key={comment._id}>
              //       <Tooltip title="Dislike">
              //         {action === 'disliked' ? (
              //           <DislikeFilled onClick={onDislike} />
              //         ) : (
              //           <DislikeOutlined onClick={onDislike} />
              //         )}
              //       </Tooltip>
              //       <span>{dislikes}</span>
              //     </span>
              //     <span key="comment-basic-reply-to">Reply to</span>
              //   </>,
              // ]}
              author={<a>{comment?.username}</a>}
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
              content={<p>{comment?.content}</p>}
              datetime={
                <Tooltip title={dayjs().format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{dayjs(comment?.updatedAt).fromNow()}</span>
                </Tooltip>
              }
            ></Comment>
          );
        })}
      </div>
    </>
  );
}
