'use client';
import Link from 'next/link';
import { useGetOrderDetailsQuery } from '../redux/slice/orderApiSlice';
import { SingleProductLoader } from '../Components';

const OrderScreen = ({ id }) => {
  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(id);

  console.log(order);

  if (isLoading) {
    return (
      <>
        <div className="container mx-auto py-20 lg:h-screen">
          <SingleProductLoader />
        </div>
      </>
    );
  }

  if (error) {
    return <p>{error?.data?.message || error?.error}</p>;
  }

  return (
    <>
      <div>
        <h2>Order {order._id}</h2>
      </div>
    </>
  );
};

export default OrderScreen;
