import { Modal, Button, Input, Form, message } from 'antd';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
// import { QuillEditor as DEditor } from "@vueup/vue-quill";
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface IProps {
  visible?: boolean;
  title?: string;
  content?: string;
  // eslint-disable-next-line no-unused-vars
  onOk?: (title?: string, content?: string) => void;
  onCancel?: () => void;
}

export default function CreatePost({ visible, title, content, onOk, onCancel }: IProps) {
  const [postState, setPostState] = useState<{ title: string; content: string }>();
  const [form] = Form.useForm();
  const handleFinished = () => {
    const newTitle = form.getFieldValue('title');
    const newContent = form.getFieldValue('content');
    if (!newTitle || !newContent) return message.error('Bạn cần điền đầy đủ các trường!');
    onOk(newTitle, newContent);
    setPostState({ title: '', content: '' });
  };

  const handleChangeTitle = (value) => {
    setPostState((state) => ({ ...state, title: value.target.value }));
  };

  const handleChangeContent = (value) => {
    setPostState((state) => ({ ...state, content: value }));
  };

  const Title = (
    <div className="relative flex items-center py-2">
      <p className="m-0 flex justify-center flex-1">
        <span> Thêm bài viêt mới </span>
      </p>
    </div>
  );

  const Footer = (
    <div className="flex justify-end gap-x-3">
      <Button size="small" onClick={handleFinished}>
        Đăng
      </Button>
    </div>
  );

  useEffect(() => {
    if (visible) {
      form.setFieldsValue({ title, content });
    }
  }, [visible]);

  return (
    <Modal open={visible} onCancel={onCancel} className="modal-web" width="720" title={Title} footer={Footer}>
      <Form form={form}>
        <Form.Item rules={[{ required: true, message: 'Vui lòng nhập tiêu đề' }]} name="title">
          <Input onChange={handleChangeTitle} value={postState?.title} className="mb-6" placeholder="Title" />
        </Form.Item>
        <div className="post-content">
          <Form.Item name="content">
            <ReactQuill theme="snow" value={postState?.content} onChange={handleChangeContent} />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}
