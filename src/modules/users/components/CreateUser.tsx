import { Form, Input, Modal } from 'antd';

export default function CreateUser({ open, onCancel, onOk }) {
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
          <div className="flex flex-col items-start gap-y-1 text-xl font-semibold">
            <label>Tên đăng nhập</label>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập' }]}
              className="w-full"
              name="username"
            >
              <Input placeholder="Tên đăng nhập" className="h-[44px]" />
            </Form.Item>
          </div>
          <div className="flex flex-col items-start gap-y-1 text-xl font-semibold">
            <label>Mật khẩu</label>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
              className="w-full"
              name="password"
            >
              <Input type="password" placeholder="Password" className="h-[44px]" />
            </Form.Item>
          </div>
          <div className="flex flex-col items-start gap-y-1 text-xl font-semibold">
            <label>Nhập lại mật khẩu</label>
            <Form.Item
              rules={[
                { required: true, message: 'Vui lòng nhập mật khẩu' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Hai mật khẩu cần phải trùng khớp!'));
                  },
                }),
              ]}
              className="w-full"
              name="confirm"
            >
              <Input type="password" placeholder="Password" className="h-[44px]" />
            </Form.Item>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
