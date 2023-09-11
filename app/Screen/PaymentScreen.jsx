'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, Checkbox } from '@nextui-org/react';
import { savePaymentMethod } from '../redux/slice/cartSlice';
import ShippingSteps from '../Components/ShippingStep/ShippingSteps';

const PaymentScreen = () => {
  const [paymentMethodPaypal, setPaymentMethodPaypal] = useState('Paypal');
  const [paymentMethodCod, setPaymentMethodCod] = useState('Cash on delivery');

  const dispatch = useDispatch();
  const router = useRouter();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  useEffect(() => {
    if (!shippingAddress) {
      router.push('/shipping');
    }
  }, [shippingAddress, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethodPaypal));
    router.push('/placeorder');
  };

  return (
    <>
      <div className="grid place-content-center">
        <ShippingSteps step1 step2 step3 />
        <Card className="w-[300px] mx-auto">
          <CardBody>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <Checkbox
                radius="full"
                id="Paypal"
                name="paymentMethod"
                value="Paypal"
                onChanged={(e) => setPaymentMethodPaypal(e.target.value)}
                className="mt-2 mb-3"
              >
                Paypal or Credit Card
              </Checkbox>
              <Checkbox
                radius="full"
                id="Cash on Delivery"
                name="paymentMethod"
                value="Cash on Delivery"
                onChanged={(e) => setPaymentMethodCod(e.target.value)}
              >
                Cash on Delivery
              </Checkbox>
              <Button
                className="my-5"
                type="submit"
                color="primary"
                variant="solid"
              >
                Continue
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default PaymentScreen;
