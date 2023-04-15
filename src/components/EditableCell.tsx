import { Form, Input, Select } from 'antd';
const OPTIONS = [
  {
    value: 'hard',
    label: 'Khó',
  },
  {
    value: 'medium',
    label: 'Trung bình',
  },
  {
    value: 'easy',
    label: 'Dễ',
  },
];

const EditableCell: React.FC<any> = ({ editing, dataIndex, title, children, ...restProps }) => {
  if (!editing) return <td {...restProps}>{children}</td>;

  if (dataIndex === 'difficulty')
    return (
      <td {...restProps}>
        <Form.Item
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          <Select options={OPTIONS} />
        </Form.Item>
      </td>
    );

  return (
    <td {...restProps}>
      <Form.Item
        name={dataIndex}
        style={{ margin: 0 }}
        rules={[
          {
            required: true,
            message: `Please Input ${title}!`,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </td>
  );
};

export default EditableCell;
