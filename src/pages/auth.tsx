import { Input, Button, Checkbox } from 'antd';

export default function Login() {
  const type = 'login';

  return (
    <div className="home w-full bg-bg-body flex items-center">
      <div className="w-[900px] max-h-[720px] px-16 pt-8 pb-8 mx-auto mt-8 flex flex-col bg-white">
        <div className="login-page text-center flex gap-8 flex-col">
          <h3 className="text-dark text-3xl font-bold mt-2 mb-0">
            {type === 'login' ? 'Đăng nhập' : 'Đăng ký'}
          </h3>
          <div className="flex flex-col items-start gap-y-1 text-xl font-semibold">
            <label>Tên đăng nhập</label>
            <Input placeholder="Tên đăng nhập" className="h-[44px]" />
          </div>
          <div className="flex flex-col items-start gap-y-1 text-xl font-semibold">
            <label>Mật khẩu</label>
            <Input placeholder="Password" className="h-[44px]" />
            <a v-if="type === 'login'" className="text-sm self-end">
              Quên mật khẩu?
            </a>
          </div>
          <div v-if="type !== 'login'" className="flex flex-col items-start gap-y-1 text-xl font-semibold">
            <label>Nhập lại mật khẩu</label>
            <Input placeholder="Password" className="h-[44px]" />
          </div>
          <div v-if="type === 'login'" className="w-full flex justify-start gap-2">
            <Checkbox></Checkbox> Ghi nhớ mật khẩu
          </div>
          <span v-if="type === 'login'">
            Nếu bạn chưa có tài khoản vui lòng
            <a className="text-blue text-lg border" href="">
              đăng ký
            </a>
          </span>
          <span v-else>
            Nếu bạn đã có tài khoản vui lòng
            <a className="text-blue text-lg border" href="">
              đăng nhập
            </a>
          </span>
          <Button size="large" className="self-center btn-login">
            {type === 'login' ? 'Đăng nhập' : 'Đăng ký'}
          </Button>
        </div>
      </div>
    </div>
  );
}
