import SingleProductScreen from '@/app/Screen/SingleProduct.Screen';

const page = ({ params: { id } }) => {
  return (
    <>
      <SingleProductScreen id={id} />
    </>
  );
};

export default page;
