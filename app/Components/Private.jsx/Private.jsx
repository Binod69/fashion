'use client';
import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import ShippingScreen from '../../Screen/ShippingScreen';
import { useRouter } from 'next/navigation';

const Private = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const router = useRouter();
  return userInfo ? <ShippingScreen /> : router.push('/auth');
};

export default Private;
