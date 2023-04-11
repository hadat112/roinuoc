import { createQuestion } from '@/services/puppetService';
import { Button, Form, Input, message, Select } from 'antd';

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

export default function Question() {
  const onFinish = async (allValues) => {
    const result: any = await createQuestion(allValues);
    if (result.error) return message.error(result.error);
  };
  return (
    <div className="flex flex-col">
      <Form onFinish={onFinish}>
        <Form.Item label="Phân loại" name="category">
          <Input />
        </Form.Item>
        <Form.Item label="Độ khó" name="difficulty">
          <Select options={OPTIONS} />
        </Form.Item>
        <Form.Item label="Câu hỏi" name="question">
          <Input />
        </Form.Item>
        <Form.Item label="Đáp án đúng" name="correct_answer">
          <Input />
        </Form.Item>
        <div className="">
          <Form.List name="incorrect_answer" initialValue={['', '', '']}>
            {(fields) => (
              <>
                {fields.map((field, index) => (
                  <>
                    <Form.Item label="Đáp án sai" {...field}>
                      <Input key={index} />
                    </Form.Item>
                  </>
                ))}
              </>
            )}
          </Form.List>
        </div>
        <Form.Item>
          <Button htmlType="submit"> Lưu </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
