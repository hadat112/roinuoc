import EditableCell from '@/components/EditableCell';
import { createQuestion, deleteQuestion, getQuestions, updateQuestion } from '@/services/puppetService';
import { useQuery } from '@tanstack/react-query';
import { Button, Form, message, Popconfirm, Table } from 'antd';
import { useState } from 'react';
import QuestionModal from './questionForm';

export default function QuestionTable() {
  const questionColumns = [
    {
      title: 'Câu hỏi',
      dataIndex: 'question',
      key: 'question',
      editable: true,
    },
    {
      title: 'Độ khó',
      dataIndex: 'difficulty',
      key: 'difficulty',
      editable: true,
    },
    {
      title: 'Phân loại',
      dataIndex: 'category',
      key: 'category',
      editable: true,
    },
    {
      title: 'Đáp án đúng',
      dataIndex: 'correct_answer',
      key: 'rightAnswer',
      editable: true,
      render: (_, record) => {
        return <span>{record?.correct_answer}</span>;
      },
    },
    {
      title: 'Đáp án sai',
      dataIndex: 'wrongAnswer1',
      key: 'wrongAnswer',
      editable: true,

      render: (_, record) => {
        return <span>{record?.incorrect_answers[0]}</span>;
      },
    },
    {
      title: 'Đáp án sai',
      dataIndex: 'wrongAnswer2',
      key: 'wrongAnswer',
      editable: true,

      render: (_, record) => {
        return <span>{record?.incorrect_answers[1]}</span>;
      },
    },
    {
      title: 'Đáp án sai',
      dataIndex: 'wrongAnswer3',
      key: 'wrongAnswer',
      editable: true,

      render: (_, record) => {
        return <span>{record?.incorrect_answers[2]}</span>;
      },
    },
    {
      title: '',
      dataIndex: 'category',
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

  const mergedColumns = questionColumns.map((col) => {
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
      wrongAnswer1: record?.incorrect_answers[0],
      wrongAnswer2: record?.incorrect_answers[1],
      wrongAnswer3: record?.incorrect_answers[2],
    });
    setEditingKey(record._id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const {
    data: questions,
    refetch,
    isFetching,
  } = useQuery(
    ['/questions'],
    async () => {
      const res: any = await getQuestions();

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
      difficulty: allValues.difficulty,
      question: allValues.question,
      category: allValues.category,
      correct_answer: allValues.correct_answer,
      incorrect_answers: [allValues.wrongAnswer1, allValues.wrongAnswer2, allValues.wrongAnswer3],
    };
    const result: any = await updateQuestion(data);
    if (result.error) return message.error(result.error);
    setEditingKey('');
    refetch();
  };

  const handleAddNew = async (allValues) => {
    const result: any = await createQuestion(allValues);
    if (result.error) return message.error(result.error);
    setOpen(false);
    refetch();
  };

  const handleDelete = async (id) => {
    const result: any = await deleteQuestion({ id });
    if (result.error) return message.error(result.error);
    refetch();
  };

  return (
    <div className="p-8 flex flex-col gap-4 items-start">
      <Button onClick={() => setOpen(true)}>+ Thêm</Button>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          pagination={false}
          columns={mergedColumns}
          dataSource={questions}
          loading={isFetching}
        />
      </Form>
      <QuestionModal open={open} onOk={handleAddNew} onCancel={() => setOpen(false)}></QuestionModal>
    </div>
  );
}
