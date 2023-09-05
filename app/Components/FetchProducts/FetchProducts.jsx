'use client';
import Products from '../Products/Products';
import { useGetProductsQuery } from '@/app/redux/slice/productsApi.slice';
import HomeLoader from './HomeLoader';
const FetchProducts = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return (
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        <HomeLoader card={8} />
      </div>
    );
  }

  if (isError) {
    return <p>{isError?.data?.message || isError?.error}</p>;
  }
  return (
    <>
      <div className="container mx-auto">
        <h2 className="font-bold text-2xl text-slate-500 my-5">
          Latest Products
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
