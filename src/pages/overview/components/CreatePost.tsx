import { Modal, Button, Input, Form } from 'antd';
import { useState } from 'react';
// import { QuillEditor as DEditor } from "@vueup/vue-quill";

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
    onOk(postState.title, postState.content);
  };

  const handleChangeTitle = (value) => {
    setPostState((state) => ({ ...state, tilte: value }));
  };

  const Title = (
    <div className="relative flex items-center py-2">
      <p className="m-0 flex justify-center flex-1">
        <span> Tao bai viet moi </span>
      </p>
    </div>
  );

  const Footer = (
    <div className="flex justify-end gap-x-3">
      <Button size="small" onClick={handleFinished}>
        Post
      </Button>
    </div>
  );

  return (
    <Modal open={visible} onCancel={onCancel} className="modal-web" width="720" title={Title} footer={Footer}>
      <Form>
        <Form.Item name="title">
          <Input onChange={handleChangeTitle} value={title} className="mb-6" placeholder="Title" />
        </Form.Item>
        <div className="post-content">
          <Form.Item name="content">
            <Input.TextArea />
            {/* <DEditor v-model:content="PostState.content" theme="snow" toolbar="full" /> */}
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}
