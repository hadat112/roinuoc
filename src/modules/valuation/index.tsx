import { getValuation } from '@/services/puppetService';
import { useQuery } from '@tanstack/react-query';
import { Tabs, message } from 'antd';
import { useState } from 'react';

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
      <div className="max-w-[960px] text-left mx-auto text-lg leading-10 my-16 bg-white px-8 py-4">
        <Tabs activeKey={activeKey} onChange={handleChange}>
          <Tabs.TabPane key="1" tab="Lịch sử">
            <p className="Tabs.TabPane">{data?.lichsu}</p>
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="Giáo dục" force-render>
            <p className="Tabs.TabPane">{data?.giaoduc}</p>
          </Tabs.TabPane>
          <Tabs.TabPane key="3" tab="Văn hoá">
            <p className="Tabs.TabPane">{data?.vanhoa}</p>
          </Tabs.TabPane>
          <Tabs.TabPane key="4" tab="Khoa học">
            <p className="Tabs.TabPane">{data?.khoahoc}</p>
          </Tabs.TabPane>
          <Tabs.TabPane key="5" tab="Kinh tế, du lịch">
            <p className="Tabs.TabPane">{data?.kinhte}</p>
          </Tabs.TabPane>
          <Tabs.TabPane key="6" tab="Tính cộng đồng">
            <p className="Tabs.TabPane">{data?.congdong}</p>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
}
