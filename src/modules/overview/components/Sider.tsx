import { getPost, searchPost } from '@/services/puppetService';
import { message, Select } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import lo from 'lodash';

const tags = ['Sân khâu', 'Buồng trò', 'Quân rối', 'Quân rối', 'Chế tác', 'Địa chỉ'];

export default function Sider() {
  const [recentPost, setRecentPost] = useState([]);
  const [viewsPost, setViewsPost] = useState([]);
  const [postOptions, setPostOptions] = useState([]);
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

  return (
    <div className="absolute right-0 top-4 w-[20%] flex flex-col mr-8 gap-8">
      <div className="p-6 bg-white w-full">
        <Select
          className="w-full"
          showSearch
          allowClear
          filterOption={false}
          options={postOptions}
          onSearch={handleSearch}
        ></Select>
      </div>
      <div className="p-6 bg-white">
        <h1 className="text-3xl font-semibold mb-6">Bài viết gần đây</h1>

        {recentPost?.map((post, index) => {
          return (
            <div key={index} className="border-0 border-solid border-grey-200 border-b p-2 mb-4 text-lg">
              {post?.slug && <Link href={`/overview/${post?.slug}`}>{post?.title}</Link>}
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-white">
        <h1 className="text-3xl font-semibold mb-6">Bài viết đọc nhiều</h1>

        {viewsPost?.map((post, index) => {
          return (
            <div key={index} className="border-0 border-solid border-grey-200 border-b p-2 mb-4 text-lg">
              {post?.slug && <Link href={`/overview/${post?.slug}`}>{post?.title}</Link>}
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-white">
        <h1 className="text-3xl font-semibold mb-6">Tags</h1>

        {tags?.map((tag, index) => {
          return (
            <div key={index} className="border-0 border-solid border-grey-200 border-b p-2 mb-4 text-lg">
              <a href="">{tag}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
