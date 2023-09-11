'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import ShippingSteps from '../Components/ShippingStep/ShippingSteps';

const PlaceOrderScreen = () => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      router.push('/shipping');
    } else if (!cart.payment) {
      router.push('/payment');
    }
  }, [cart.payment, cart.shippingAddress.address, router]);
  return (
    <>
      <div className="grid place-content-center">
        <ShippingSteps step1 step2 step3 step4 />
        <div className="flex justify-between  items-center">
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
