import React from 'react';
import PlaceOrderScreen from '../Screen/PlaceOrderScreen';
import Private from '../Components/Private/Private';

const page = () => {
  return (
    <>
      <Private>
        <PlaceOrderScreen />
      </Private>
    </>
  );
};

export default page;
