import { useRouter } from 'next/router';
import Play from '@/modules/plays/play';

export default function PlayPage() {
  const router = useRouter();

  return router?.asPath ? <Play slug={router?.asPath?.split('/')}></Play> : null;
}
