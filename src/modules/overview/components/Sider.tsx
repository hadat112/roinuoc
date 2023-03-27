import { getPost, searchPost } from '@/services/puppetService';
import { message, Select } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import lo from 'lodash';
import cx from 'classnames';

export default function Sider({
  className,
}: {
  className?: string;
  recommend?: boolean;
  title?: string;
  id?: string;
}) {
  const [recentPost, setRecentPost] = useState([]);
  const [viewsPost, setViewsPost] = useState([]);
  const [postOptions, setPostOptions] = useState([]);
  // const [recommendPost, setRecommendPost] = useState([]);

  const fetchRecentPost = async () => {
    const result: any = await getPost({ type: 'recent' });
    if (result.error) {
      message.error(result.error);
    }
    setRecentPost(result.data);
  };

  const fetchViewsPost = async () => {
    const result: any = await getPost({ type: 'view' });
    if (result.error) {
      message.error(result.error);
    }
    setViewsPost(result.data);
  };

  // const fetchRecommendPost = async () => {
  //   const result: any = await getPost({ type: 'recommend', title, id });
  //   if (result.error) {
  //     message.error(result.error);
  //   }
  //   setRecommendPost(result.data);
  // };

  const fetchData = async (params: { text: string }) => {
    const result: { data: any; error?: string } = await searchPost(params);

    if (result.error) {
      return message.error(result.error);
    }

    setPostOptions(result.data);
  };

  const handleSearch = lo.debounce(async (value: string) => {
    if (value?.length > 1) {
      await fetchData({ text: value });
    }
  }, 500);

  useEffect(() => {
    fetchRecentPost();
    fetchViewsPost();
  }, []);

  // useEffect(() => {
  //   if (recommend && id) fetchRecommendPost();
  // }, [title]);

  return (
    <div className={cx('sider w-[20%] flex flex-col py-4 mr-8 gap-8 min-h-[100vh]', { className })}>
      <div className="bg-white w-full">
        <Select
          className="w-full"
          showSearch
          allowClear
          filterOption={false}
          options={postOptions}
          onSearch={handleSearch}
        ></Select>
      </div>
      {/* {recommend ? (
        <div className="p-6 bg-white">
          <h1 className="title mb-8 relative text-3xl font-semibold">Bài viết gần đây</h1>

          {recommendPost?.map((post, index) => {
            return (
              <div key={index} className="border-0 border-solid border-grey-200 border-b p-2 mb-4 text-lg">
                {post?.slug && <Link href={`/overview/${post?.slug}`}>{post?.title}</Link>}
              </div>
            );
          })}
        </div>
      ) : null} */}
      <div className="p-6 bg-white">
        <h1 className="title mb-8 relative text-3xl font-semibold">Bài viết gần đây</h1>

        {recentPost?.map((post, index) => {
          return (
            <div key={index} className="border-0 border-solid border-grey-200 border-b p-2 mb-4 text-lg">
              {post?.slug && <Link href={`/overview/${post?.slug}`}>{post?.title}</Link>}
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-white">
        <h1 className="title mb-8 relative text-3xl font-semibold">Bài viết đọc nhiều</h1>
        {viewsPost?.map((post, index) => {
          return (
            <div key={index} className="border-0 border-solid border-grey-200 border-b p-2 mb-4 text-lg">
              {post?.slug && <Link href={`/overview/${post?.slug}`}>{post?.title}</Link>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
