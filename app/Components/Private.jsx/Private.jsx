'use client';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import ShippingScreen from '../../Screen/ShippingScreen';

const Private = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const router = useRouter();

  if (!userInfo) {
    typeof window !== 'undefined' && router.push('/auth');
    return null;
  }

  return (
    <>
      <ShippingScreen />
      {children}
    </>
  );
};

export default Private;
