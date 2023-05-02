/* eslint-disable max-len */
import { Button, Timeline, message } from 'antd';
import { ClockCircleOutlined, ClockCircleFilled } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import cx from 'classnames';
import { FaRegHandPointRight } from 'react-icons/fa';
import GameModal from './components/GameModal';
import { useQuery } from '@tanstack/react-query';
import { getHistory } from '@/services/puppetService';

export default function History() {
  const [current, setCurrent] = useState<string>('1945');
  const [activeYear, setActiveYear] = useState<number>(0);
  const [openGame, setOpenGame] = useState<boolean>(false);

  const { data } = useQuery(
    ['history'],
    async () => {
      const result: any = await getHistory();
      if (result.error) {
        message.error(result.error);
        return {};
      }
      return result.data;
    },
    {
      staleTime: Infinity,
    }
  );

  useEffect(() => {
    setActiveYear(0);
  }, [current]);
  return (
    <div>
      <div className="w-full relative">
        <h1 className="text-center mx-auto mt-16">Lịch sử phát triển của rối cạn Tế Tiêu</h1>
        <div className="flex mx-auto gap-6 flex-wrap justify-center mt-14">
          <img
            className="flex-1 max-w-[240px]"
            src="https://lh3.google.com/u/0/d/1oj6jL3M_igAGYHmraN74DDRrzJl2D-q-=w2880-h1192-iv1"
          />
          <img
            className="flex-1 max-w-[240px]"
            src="https://lh3.google.com/u/0/d/16VXsTHUKFB0RJc3kouzAEPTIegCfSR48=w2880-h1192-iv1"
          />
          <img
            className="flex-1 max-w-[240px]"
            src="https://lh3.google.com/u/0/d/1OWFixLqSHg_eCw8cbr11deIOXJTXt7IX=w2880-h1192-iv1"
          />
          <img
            className="flex-1 max-w-[240px]"
            src="https://lh3.google.com/u/0/d/1e-_0z-zlrnJfrJIoqhjVsi-j0yHE_17C=w2880-h1192-iv1"
          />
        </div>
        <div className="flex max-w-[70%] mx-auto mt-8">
          <div className="flex flex-col w-[20%] border border-0 border-solid border-r border-grey-100 p-4">
            {data?.[current]?.map((i, index) => {
              return (
                <div
                  key={index}
                  className={cx('flex items-center relative border-none cursor-pointer px-4 py-3', {
                    'text-yellow': activeYear === index,
                  })}
                  onClick={() => setActiveYear(index)}
                >
                  {activeYear === index ? (
                    <FaRegHandPointRight className="absolute -left-6 text-2xl" />
                  ) : null}{' '}
                  <span className="font-[900] text-2xl">{i?.year}</span>
                </div>
              );
            })}
          </div>
          <div className="flex-1 text-lg p-4 self-start">
            <p>{data?.[current]?.[activeYear]?.content}</p>
          </div>
          <div className="p-6 timeline">
            <Timeline className="z-index-200" mode="left">
              <Timeline.Item>Lịch sử hình thành</Timeline.Item>
              <Timeline.Item
                dot={
                  current === '1945' ? (
                    <ClockCircleFilled className="text-[16px] text-yellow" />
                  ) : (
                    <ClockCircleOutlined onClick={() => setCurrent('1945')} className="text-[16px]" />
                  )
                }
                className="cursor-pointer"
              >
                Trước 1945
              </Timeline.Item>
              <Timeline.Item
                dot={
                  current === '1986' ? (
                    <ClockCircleFilled className="text-[16px] text-yellow" />
                  ) : (
                    <ClockCircleOutlined onClick={() => setCurrent('1986')} className="text-[16px]" />
                  )
                }
                className="cursor-pointer"
              >
                1945 đến 1986
              </Timeline.Item>
              <Timeline.Item
                dot={
                  current === '2023' ? (
                    <ClockCircleFilled className="text-[16px] text-yellow" />
                  ) : (
                    <ClockCircleOutlined onClick={() => setCurrent('2023')} className="text-[16px]" />
                  )
                }
                className="cursor-pointer"
              >
                1986 đến nay
              </Timeline.Item>
            </Timeline>
            <Button href="/game" className="mt-4">
              Trò chơi
            </Button>
          </div>
        </div>
      </div>
      <GameModal open={openGame} onCancel={() => setOpenGame(false)} />
    </div>
  );
}
