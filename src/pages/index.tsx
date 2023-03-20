import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  typeof window !== 'undefined' && router.push('/home');
  return null;
}
