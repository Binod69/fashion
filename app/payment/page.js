import React from 'react';
import PaymentScreen from '../Screen/PaymentScreen';
import Private from '../Components/Private/Private';

const page = () => {
  return (
    <>
      <Private>
        <PaymentScreen />
      </Private>
    </>
  );
};

export default page;
