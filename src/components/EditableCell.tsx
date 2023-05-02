import { Form, Input, Select } from 'antd';
const DIFF_OPTIONS = [
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

const ROLE_OPTIONS = [
  {
    value: 112,
    label: 'admin',
  },
  {
    value: 212,
    label: 'user',
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
          <Select options={DIFF_OPTIONS} />
        </Form.Item>
      </td>
    );

  if (dataIndex === 'role')
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
          <Select options={ROLE_OPTIONS} />
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
