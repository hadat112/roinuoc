import { Avatar, Dropdown, MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { ArrowDownIcon, LogOutIcon } from '@/components/icons';

export interface IInfo {
  id: string;
  user_id: string;
  username: string;
  fullname: string;
  avatar: string;
  email: string;
  station_id: number;
  station_name: string;
  province_id: number;
  province_name: string;
}

export default function RightHeader() {
  const items: MenuProps['items'] = [
    {
      key: 'logout',
      label: 'Đăng xuất',
      icon: <LogOutIcon className="text-[1rem] inline-flex" />,
    },
  ];

  const [userInfo, setUserInfo] = useState<IInfo>();

  const handleLogOut = async () => {
    const Auth = await import('@/configs/auth');
    if (typeof window !== 'undefined') localStorage.clear();
    Auth.logout();
  };

  useEffect(() => {
    const meInfo = JSON.parse(localStorage.getItem('me_info'));
    setUserInfo(meInfo);
  }, []);

  return (
    <div className="flex items-center gap-x-10">
      <Dropdown
        trigger={['click']}
        menu={{
          items,
          className: 'custom-menu-dropdown',
          onClick: (menuItem) => {
            if (menuItem.key === 'logout') {
              handleLogOut();
            }
          },
        }}
      >
        <div className="flex items-center gap-x-3 hover:cursor-pointer py-2">
          <Avatar src={userInfo?.avatar} alt="avatar" size="large" />
          <div className="flex flex-col justify-center">
            <p className="text-base text-white font-bold mb-0 whitespace-nowrap">{userInfo?.fullname}</p>
            <p className="text-sm text-white mb-0">{userInfo?.username}</p>
          </div>
          <ArrowDownIcon className="text-xl text-white" />
        </div>
      </Dropdown>
    </div>
  );
}
