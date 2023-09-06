import SingleProductScreen from '../../Screen/SingleProduct.Screen';

const page = ({ params: { id } }) => {
  return (
    <>
      <SingleProductScreen id={id} />
    </>
  );
};

export default page;
