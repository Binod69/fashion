'use client';
import Products from '../Products/Products';
import { useGetProductsQuery } from '@/app/redux/slice/productsApi.slice';
const FetchProducts = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>{isError?.data?.message || isError?.error}</p>;
  }
  return (
    <>
      <div className="max-w-[85%] mx-auto">
        <h2>Latest Products</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
          {products.map((product) => (
            <div key={product.id}>
              <Products product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FetchProducts;
