import React from 'react';
import ShippingScreen from '../Screen/ShippingScreen';
import Private from '../Components/Private/Private';

const page = () => {
  return (
    <>
      <Private>
        <ShippingScreen />
      </Private>
    </>
  );
};

export default page;
