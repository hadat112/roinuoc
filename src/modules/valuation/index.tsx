import { getValuation } from '@/services/puppetService';
import { useQuery } from '@tanstack/react-query';
import { Tabs, message } from 'antd';
import { useState } from 'react';
import { createMarkUp } from '../overview/components/ShortPost';

export default function Valuation() {
  const [activeKey, setActiveKey] = useState('1');

  const { data } = useQuery(
    ['/valuation'],
    async () => {
      const result: any = await getValuation();
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

  const handleChange = (value) => {
    setActiveKey(value);
  };

  return (
    <>
      <div className="max-w-[960px] text-left mx-auto text-xl leading-10 my-16 bg-white px-8 py-4">
        <Tabs activeKey={activeKey} onChange={handleChange}>
          <Tabs.TabPane key="1" tab="Lịch sử">
            <div className="Tabs.TabPane" dangerouslySetInnerHTML={createMarkUp(data?.lichsu)}></div>
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="Giáo dục" force-render>
            <div className="Tabs.TabPane" dangerouslySetInnerHTML={createMarkUp(data?.giaoduc)}></div>
          </Tabs.TabPane>
          <Tabs.TabPane key="3" tab="Văn hoá">
            <div className="Tabs.TabPane" dangerouslySetInnerHTML={createMarkUp(data?.vanhoa)}></div>
          </Tabs.TabPane>
          <Tabs.TabPane key="4" tab="Khoa học">
            <div className="Tabs.TabPane" dangerouslySetInnerHTML={createMarkUp(data?.khoahoc)}></div>
          </Tabs.TabPane>
          <Tabs.TabPane key="5" tab="Kinh tế, du lịch">
            <div className="Tabs.TabPane" dangerouslySetInnerHTML={createMarkUp(data?.kinhte)}></div>
          </Tabs.TabPane>
          <Tabs.TabPane key="6" tab="Tính cộng đồng">
            <div className="Tabs.TabPane" dangerouslySetInnerHTML={createMarkUp(data?.congdong)}></div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
}
