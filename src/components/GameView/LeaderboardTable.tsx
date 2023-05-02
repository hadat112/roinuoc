import { Table } from 'antd';
import { sortWith, descend, ascend, prop } from 'ramda';

const scoreNameSort = sortWith([descend(prop('score')), ascend(prop('name'))]);
const LeaderboardTable = ({ data }) => {
  const sortedData = scoreNameSort(data);
  const userColumns = [
    {
      title: 'Hạng',
      dataIndex: 'rank',
      key: 'rank',
      render: (_, _record, index) => {
        return <span>{index + 1}</span>;
      },
    },
    {
      title: 'Người chơi',
      dataIndex: 'player',
      key: 'player',
      render: (_, record) => {
        return <span>{record?.name}</span>;
      },
    },
    {
      title: 'Điểm số',
      dataIndex: 'score',
      key: 'score',
      render: (_, record) => {
        return <span>{record?.score}</span>;
      },
    },
  ];

  return (
    <Table columns={userColumns} dataSource={sortedData} rowKey={(record) => record.id} pagination={false} />
  );
};
export default LeaderboardTable;
