import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { HomeIcon } from '@/components/icons';
import { RiBook3Line, RiCalendarEventLine, RiCopperDiamondLine } from 'react-icons/ri';
import { MdOutlineTheaterComedy } from 'react-icons/md';

const navItems = [
  {
    label: 'Trang chủ',
    icon: <HomeIcon />,
    path: '/home',
    key: '/home',
  },
  {
    icon: <RiBook3Line />,
    key: '/overview',
    label: 'Giới thiệu',
    path: '/overview',
  },
  {
    icon: <RiCalendarEventLine />,
    key: '/sukien',
    label: 'Sự kiện',
    path: '/sukien',
  },
  {
    icon: <MdOutlineTheaterComedy />,
    key: '/vodien',
    label: 'Vở diễn',
    path: '/vodien',
  },
  {
    icon: <RiCopperDiamondLine />,
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
