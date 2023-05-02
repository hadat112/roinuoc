import { Avatar, Button, Dropdown, MenuProps, message } from 'antd';
import { useEffect } from 'react';
import { ArrowDownIcon, LogOutIcon } from '@/components/icons';
import { useRouter } from 'next/router';
import { setUserName } from '@/store/auth';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { getUserInfo } from '@/services/puppetService';

export default function RightHeader() {
  const items: MenuProps['items'] = [
    {
      key: 'questions',
      label: 'Quản lý câu hỏi',
    },
    {
      key: 'users',
      label: 'Quản lý tài khoản',
    },
    {
      key: 'logout',
      label: 'Đăng xuất',
      icon: <LogOutIcon className="text-[1rem] inline-flex" />,
    },
  ];

  const userItems: MenuProps['items'] = [
    {
      key: 'logout',
      label: 'Đăng xuất',
      icon: <LogOutIcon className="text-[1rem] inline-flex" />,
    },
  ];
  const dispatch = useAppDispatch();
  const router = useRouter();
  const getAuth = async () => {
    const result: any = await getUserInfo();
    if (result.error) message.error(result.error);
    dispatch(setUserName(result.data));
  };
  const { username, role } = useAppSelector((state) => state.auth);

  const handleLogOut = async () => {
    if (typeof window !== 'undefined') localStorage.clear();
    dispatch(setUserName({ user_name: null, role: null }));

    router.push('/login');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const meInfo = localStorage.getItem('token');
      if (meInfo) getAuth();
    }
  }, []);

  return (
    <div className="flex items-center gap-x-10">
      {username ? (
        <Dropdown
          trigger={['click']}
          menu={{
            items: role === 112 ? items : userItems,
            className: 'custom-menu-dropdown',
            onClick: (menuItem) => {
              if (menuItem.key === 'logout') {
                handleLogOut();
              } else {
                router.push(`/${menuItem.key}`);
              }
            },
          }}
        >
          <div className="flex items-center gap-x-3 hover:cursor-pointer py-2">
            <Avatar alt="avatar" size="large" />
            <div className="flex flex-col justify-center">
              <p className="text-sm text-yellow mb-0">{username}</p>
            </div>
            <ArrowDownIcon className="text-xl text-white" />
          </div>
        </Dropdown>
      ) : (
        <Button href="/login">Đăng nhập/ đăng ký</Button>
      )}
    </div>
  );
}
