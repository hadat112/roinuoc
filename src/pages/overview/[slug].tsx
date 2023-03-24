import { useRouter } from 'next/router';
import Post from '@/modules/overview/post';

export default function PostPage() {
  const router = useRouter();

  return router?.asPath ? <Post slug={router?.asPath?.split('/')}></Post> : null;
}
