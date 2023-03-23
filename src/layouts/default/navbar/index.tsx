import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { HomeIcon } from '@/components/icons';

const navItems = [
  {
    label: 'Trang chủ',
    icon: <HomeIcon />,
    path: '/',
    key: '/',
  },
  {
    icon: <HomeIcon />,
    key: '/overview',
    label: 'Giới thiệu',
    path: '/overview',
  },
  {
    icon: <HomeIcon />,
    key: '/sukien',
    label: 'Sự kiện',
    path: '/sukien',
  },
  {
    icon: <HomeIcon />,
    key: '/vodien',
    label: 'Vở diễn',
    path: '/vodien',
  },
  {
    icon: <HomeIcon />,
    key: '/giatri',
    label: 'Giá trị',
    path: '/giatri',
  },
];

export default function Navbar() {
  const router = useRouter();
  const [current, setCurrent] = useState(router.pathname);
  const onClick: MenuProps['onClick'] = (e) => {
    router.push(e.key);
    setCurrent(e.key);
  };

  useEffect(() => {
    const routes = router.pathname.split('/');
    setCurrent(`/${routes[1]}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  return (
    <Menu
      className="bg-primary text-yellow border-none custom-menu text-[16px] h-full"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={navItems}
    />
  );
}
