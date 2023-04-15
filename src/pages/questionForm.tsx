import { Form, Input, Modal, Select } from 'antd';

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

export default function QuestionModal({ open, onCancel, onOk }) {
  const [form] = Form.useForm();
  const onFinish = async () => {
    const allValues = form.getFieldsValue();
    onOk(allValues);
    form.resetFields();
  };

  return (
    <Modal title="Tạo câu hỏi mới" open={open} onOk={onFinish} onCancel={onCancel}>
      <div className="flex flex-col">
        <Form form={form}>
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
            <Form.List name="incorrect_answers" initialValue={['', '', '']}>
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
        </Form>
      </div>
    </Modal>
  );
}
