import { Divider, message } from 'antd';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useEffect, useState } from 'react';
import { createMarkUp } from '../overview/components/ShortPost';
import { getPlayDetail } from '@/services/puppetService';

dayjs.extend(relativeTime);

export default function Post({ slug }) {
  const [play, setPlay] = useState<any>();

  async function getPlay() {
    const response = await getPlayDetail({ slug: slug[2] });
    if (!response.data) message.error('Có lỗi xảy ra');
    setPlay(response.data?.play);
  }

  useEffect(() => {
    getPlay();
  }, [slug]);

  return (
    <div className="flex">
      <div className="max-w-[900px] bg-white px-16 pt-8 pb-8 mx-auto mt-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center leading-10 mb-4">{play?.name}</h1>
        <span className="">{dayjs(play?.updatedAt).format('DD-MM-YYYY')} - Rối nước tế tiêu</span>
        <div className="w-[60px]">
          <Divider />
        </div>
        <p className="text-lg leading-10 text-justify mb-8">
          <div dangerouslySetInnerHTML={createMarkUp(play?.content)}></div>
        </p>
      </div>
    </div>
  );
}
