import { login, register } from '@/services/auth';
import { getUserInfo } from '@/services/puppetService';
import { setUserName } from '@/store/auth';
import { useAppDispatch } from '@/store/hook';
import { Input, Button, Checkbox, Form, message } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const [type, setType] = useState<boolean>(true);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const getAuth = async () => {
    const result: any = await getUserInfo();
    if (result.error) message.error(result.error);
    dispatch(setUserName(result.data));
  };

  const handleFinish = async (values) => {
    if (!values || !values?.username || !values?.password)
      return message.error('Bạn cần điền đầy đủ tên đăng nhập và mật khẩu');

    if (!type) {
      const result: any = await register(values);
      if (result?.error) return message.error(result?.error);

      localStorage.setItem('token', result?.data?.token);
      localStorage.setItem('refresh_token', result?.data?.refreshToken);
    } else {
      const result: any = await login(values);
      if (result?.error) return message.error(result?.error);

      localStorage.setItem('token', result?.data?.token);
      localStorage.setItem('refresh_token', result?.data?.refreshToken);
    }
    getAuth();

    router.push('/');
  };

  return (
    <Form onFinish={handleFinish}>
      <div className="home w-full bg-bg-body flex items-center">
        <div className="w-[900px] max-h-[720px] px-16 pt-8 pb-8 mx-auto mt-8 flex flex-col bg-white">
          <div className="login-page text-center flex gap-8 flex-col">
            <h3 className="text-dark text-3xl font-bold mt-2 mb-0">{type ? 'Đăng nhập' : 'Đăng ký'}</h3>
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
              {type ? <a className="text-sm self-end">Quên mật khẩu?</a> : null}
            </div>
            {!type ? (
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
            ) : null}
            {type ? (
              <div className="w-full flex justify-start gap-2">
                <Checkbox></Checkbox> Ghi nhớ mật khẩu
              </div>
            ) : null}
            {type ? (
              <span>
                Nếu bạn chưa có tài khoản vui lòng{' '}
                <a className="text-blue text-lg border" onClick={() => setType((state) => !state)}>
                  đăng ký
                </a>
              </span>
            ) : (
              <span>
                Nếu bạn đã có tài khoản vui lòng{' '}
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
