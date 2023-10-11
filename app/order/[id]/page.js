import OrderScreen from '@/app/Screen/OrderScreen';
import React from 'react';

const page = ({ params: id }) => {
  return (
    <>
      <OrderScreen id={id} />
    </>
  );
};

export default page;
