import { Input, Button, Checkbox, Form } from 'antd';
import { useState } from 'react';

export default function Login() {
  const [type, setType] = useState<boolean>(true);

  const handleFinish = (values) => {
    console.log(values);
  };

  return (
    <Form onFinish={handleFinish}>
      <div className="home w-full bg-bg-body flex items-center">
        <div className="w-[900px] max-h-[720px] px-16 pt-8 pb-8 mx-auto mt-8 flex flex-col bg-white">
          <div className="login-page text-center flex gap-8 flex-col">
            <h3 className="text-dark text-3xl font-bold mt-2 mb-0">{type ? 'Đăng nhập' : 'Đăng ký'}</h3>
            <div className="flex flex-col items-start gap-y-1 text-xl font-semibold">
              <label>Tên đăng nhập</label>
              <Form.Item className="w-full" name="username">
                <Input placeholder="Tên đăng nhập" className="h-[44px]" />
              </Form.Item>
            </div>
            <div className="flex flex-col items-start gap-y-1 text-xl font-semibold">
              <label>Mật khẩu</label>
              <Form.Item className="w-full" name="password">
                <Input type="password" placeholder="Password" className="h-[44px]" />
              </Form.Item>
              {type ? <a className="text-sm self-end">Quên mật khẩu?</a> : null}
            </div>
            {!type ? (
              <div className="flex flex-col items-start gap-y-1 text-xl font-semibold">
                <label>Nhập lại mật khẩu</label>
                <Form.Item className="w-full" name="dupPassword">
                  <Input placeholder="Password" className="h-[44px]" />
                </Form.Item>
              </div>
            ) : null}
            {type ? (
              <div className="w-full flex justify-start gap-2">
                <Checkbox></Checkbox> Ghi nhớ mật khẩu
              </div>
            ) : null}
            {type ? (
              <span>
                Nếu bạn chưa có tài khoản vui lòng {' '}
                <a className="text-blue text-lg border" onClick={() => setType((state) => !state)}>
                  đăng ký
                </a>
              </span>
            ) : (
              <span>
                Nếu bạn đã có tài khoản vui lòng {' '}
                <a className="text-blue text-lg border" onClick={() => setType((state) => !state)}>
                  đăng nhập
                </a>
              </span>
            )}
            <Form.Item className="w-full">
              <Button htmlType="submit" size="large" className="self-center btn-login">
                {type ? 'Đăng nhập' : 'Đăng ký'}
              </Button>
            </Form.Item>
          </div>
        </div>
      </div>
    </Form>
  );
}
