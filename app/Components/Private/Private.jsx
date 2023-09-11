'use client';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const Private = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const router = useRouter();

  if (!userInfo) {
    typeof window !== 'undefined' && router.push('/auth');
    return null;
  }

  return <>{children}</>;
};

export default Private;
