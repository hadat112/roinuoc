import { Modal, Button, Input, Form } from 'antd';
import { useState } from 'react';
// import { QuillEditor as DEditor } from "@vueup/vue-quill";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface IProps {
  visible?: boolean;
  title?: string;
  // eslint-disable-next-line no-unused-vars
  onOk?: (title?: string, content?: string) => void;
  onCancel?: () => void;
}

export default function CreatePost({ visible, title, onOk, onCancel }: IProps) {
  const [postState, setPostState] = useState<{ title: string; content: string }>();

  const handleFinished = () => {
    setPostState({title: '', content: ''});
    onOk(postState.title, postState.content);
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

  return (
    <Modal open={visible} onCancel={onCancel} className="modal-web" width="720" title={Title} footer={Footer}>
      <Form>
        <Form.Item name="title">
          <Input defaultValue={title} onChange={handleChangeTitle} value={postState?.title} className="mb-6" placeholder="Title" />
        </Form.Item>
        <div className="post-content">
          <Form.Item name="content">
            <ReactQuill value={postState?.content} onChange={handleChangeContent} />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}
