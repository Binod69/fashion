'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card, CardBody, Input, Link } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../redux/slice/cartSlice';
import ShippingSteps from '../Components/ShippingStep/ShippingSteps';

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress?.address || '');
  const [city, setCity] = useState(shippingAddress?.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ''
  );
  const [phoneNumber, setPhoneNumber] = useState(
    shippingAddress?.phoneNumber || ''
  );

  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, phoneNumber, postalCode }));
    router.push('/payment');
  };

  return (
    <>
      <div className="flex flex-col content-center my-10 items-center  w-full">
        <ShippingSteps step1 step2 />
        <Card className="max-w-full flex lg:w-[400px] w-[350px] h-[400px]">
          <CardBody className="overflow-hidden">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                isRequired
                label="Address"
                placeholder="Enter your address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Input
                isRequired
                label="City"
                placeholder="Enter your city name"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Input
                isRequired
                label="Contact"
                placeholder="Enter your contact number"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Input
                isRequired
                label="Postal Code"
                placeholder="Enter your postal code"
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />

              <div className="flex gap-2 justify-end">
                <Button type="submit" fullWidth color="primary">
                  Continue
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ShippingScreen;
