import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: IProps) {
  return <main className="overflow-y-scroll px-4 mt-4 content pb-4 flex flex-col">{children}</main>;
}
