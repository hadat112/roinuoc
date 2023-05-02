import { UploadOutlined } from '@ant-design/icons';
import { Modal, Button, Input, Form, Upload, message } from 'antd';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
// import { QuillEditor as DEditor } from "@vueup/vue-quill";
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface IProps {
  open?: boolean;
  name: string;
  content: string;
  id?: string;
  image: string;
  type?: string;
  // eslint-disable-next-line no-unused-vars
  onOk?: (params: { name: string; content: string; image: any; id?: string }) => void;
  onCancel?: () => void;
}

export default function CreatePlay({ open, name, onOk, onCancel, content, image, id }: IProps) {
  const [playState, setPlayState] = useState<{ title: string; content: string }>();
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  const handleFinished = () => {
    const values = form.getFieldsValue();
    setPlayState({ title: '', content: '' });

    if (!values.title || !values.content || !values?.image?.fileList?.[0])
      return message.error('Bạn cần điền đầy đủ các trường!');

    onOk({
      id,
      name: values.title,
      content: values.content,
      image: values?.image?.fileList?.[0]?.originFileObj,
    });
    form.resetFields();
    setFileList([]);
  };

  const handleCancel = () => {
    onCancel();
    form.resetFields();
    setFileList([]);
  };

  const handleChangeFile = ({ fileList }) => {
    setFileList(fileList);
  };

  useEffect(() => {
    if (open) {
      form.setFieldsValue({
        title: name,
        content,
      });
    }

    if (name && open && content)
      setFileList([
        {
          uid: id,
          name: `${id}.png`,
          url: image,
        },
      ]);
  }, [open]);

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
    <Modal
      open={open}
      onCancel={handleCancel}
      className="modal-web"
      width="720"
      title={Title}
      footer={Footer}
    >
      <Form form={form}>
        <Form.Item name="title">
          <Input value={playState?.title} className="mb-6" placeholder="Title" />
        </Form.Item>
        <Form.Item label="Ảnh bìa" name="image">
          <Upload maxCount={1} onChange={handleChangeFile} fileList={fileList} className="mb-6">
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
