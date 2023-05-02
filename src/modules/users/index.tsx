import EditableCell from '@/components/EditableCell';
import { deleteUser, getUsers, updateUser } from '@/services/puppetService';
import { useQuery } from '@tanstack/react-query';
import { Button, Form, message, Popconfirm, Table } from 'antd';
import { useState } from 'react';
import CreateUser from './components/CreateUser';
import { register } from '@/services/auth';
const ROLE_MAP = {
  112: 'admin',
  212: 'user',
};

export default function Users() {
  const userColumns = [
    {
      title: 'Tài khoản',
      dataIndex: 'user_name',
      key: 'user_name',
      editable: true,
    },
    {
      title: 'Phân quyền',
      dataIndex: 'role',
      key: 'role',
      editable: true,
      render: (_, record) => {
        return <span>{ROLE_MAP[record?.role]}</span>;
      },
    },
    {
      title: 'Tuỳ chọn',
      dataIndex: 'category',
      align: 'center',
      key: 'category',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button onClick={() => handleUpdate(record._id)} style={{ marginRight: 8 }}>
              Lưu
            </Button>
            <Button title="Sure to cancel?" onClick={cancel}>
              Huỷ
            </Button>
          </span>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Button disabled={editingKey !== ''} onClick={() => edit(record)}>
              Sửa
            </Button>
            <Popconfirm title="Bạn có chắc chắn xoá?" onConfirm={() => handleDelete(record._id)}>
              <Button danger>Xoá</Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const mergedColumns: any = userColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  const [open, setOpen] = useState(false);

  const isEditing = (record) => record._id === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      ...record,
    });
    setEditingKey(record._id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const {
    data: users,
    refetch,
    isFetching,
  } = useQuery(
    ['/users'],
    async () => {
      const res: any = await getUsers();
      if (res.error) {
        message.error(res.error);
        return [];
      }

      return res.data;
    },
    {
      staleTime: Infinity,
    }
  );

  const handleUpdate = async (id) => {
    const allValues = form.getFieldsValue();
    const data = {
      id,
      user_name: allValues.user_name,
      role: allValues.role,
    };
    const result: any = await updateUser(data);
    if (result.error) return message.error(result.error);
    setEditingKey('');
    refetch();
  };

  const handleAddNew = async (allValues) => {
    const result: any = await register(allValues);
    if (result.error) return message.error(result.error);
    setOpen(false);
    refetch();
  };

  const handleDelete = async (id) => {
    const result: any = await deleteUser({ id });
    if (result.error) return message.error(result.error);
    refetch();
  };

  return (
    <div className="p-8 flex flex-col gap-4 items-start mx-auto min-w-full">
      <Button onClick={() => setOpen(true)}>+ Thêm</Button>
      <Form form={form} component={false}>
        <Table
          className="w-full"
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          pagination={false}
          columns={mergedColumns}
          dataSource={users}
          loading={isFetching}
        />
      </Form>
      <CreateUser open={open} onOk={handleAddNew} onCancel={() => setOpen(false)}></CreateUser>
    </div>
  );
}
