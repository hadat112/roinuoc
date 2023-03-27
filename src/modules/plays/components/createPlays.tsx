import { UploadOutlined } from '@ant-design/icons';
import { Modal, Button, Input, Form, Upload } from 'antd';
import dynamic from 'next/dynamic';
import { useState } from 'react';
// import { QuillEditor as DEditor } from "@vueup/vue-quill";
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface IProps {
  open?: boolean;
  title?: string;
  // eslint-disable-next-line no-unused-vars
  onOk?: (params: { name?: string; content?: string; image: any }) => void;
  onCancel?: () => void;
}

export default function CreatePlay({ open, title, onOk, onCancel }: IProps) {
  const [playState, setPlayState] = useState<{ title: string; content: string }>();
  const [form] = Form.useForm();
  const handleFinished = () => {
    const values = form.getFieldsValue();
    setPlayState({ title: '', content: '' });
    onOk({ name: values.title, content: values.content, image: values?.image?.file });
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

  return (
    <Modal open={open} onCancel={onCancel} className="modal-web" width="720" title={Title} footer={Footer}>
      <Form form={form}>
        <Form.Item name="title">
          <Input defaultValue={title} value={playState?.title} className="mb-6" placeholder="Title" />
        </Form.Item>
        <Form.Item label="Ảnh bìa" name="image">
          <Upload className="mb-6">
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <div className="Play-content">
          <Form.Item name="content">
            <ReactQuill value={playState?.content} />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}
