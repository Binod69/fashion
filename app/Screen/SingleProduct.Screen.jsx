'use client';
// import { Image } from '@nextui-org/react';
// import { Image } from 'next/image';
import {
  Card,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  CardBody,
  Link,
  Button,
} from '@nextui-org/react';
import { useGetProductDetailQuery } from '../redux/slice/productsApi.slice';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Rating from '../Components/Rating/Rating';
import SingleProductLoader from '../Components/SingleProductLoader/SingleProductLoader';

const SingleProductScreen = ({ id }) => {
  const { data: product, isLoading, isError } = useGetProductDetailQuery(id);

  if (isLoading) {
    return (
      <>
        <div className="container mx-auto py-20 lg:h-screen">
          <SingleProductLoader />
        </div>
      </>
    );
  }

  if (isError) {
    return <p>{isError?.data?.message || isError?.error}</p>;
  }

  return (
    <>
      <div className="container mx-auto py-20">
        <div className="flex justify-between  flex-col lg:flex-row lg:h-screen">
          <figure className=" max-w-[300px] mx-auto md:max-w-[500px] lg:max-w-[500px]">
            <Image
              radius="sm"
              alt={product.title}
              className="object-cover"
              src={product.image}
            />
          </figure>

          <div className="lg:w-[30%] mx-auto">
            <article className="ms-5">
              <h2 className="text-2xl font-bold text-gray-500">
                {product.title}
              </h2>
              <Divider className="my-3" />
            </article>
            <div className="ms-5">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
              <Divider className="my-3" />
              <h5>
                <span className="font-bold">Price:</span> रु‎ {product.price}
              </h5>
              <Divider className="my-3" />
            </div>
            <article className="max-w-[90%]">
              <p className=" text-sm ms-5">
                <span className="font-bold">Description:</span>{' '}
                {product.description}
              </p>
            </article>
          </div>

          <div>
            <Card radius="sm" className="w-[300px] ms-3 mx-auto">
              <CardHeader className="flex gap-3">
                <Image
                  alt={product.title}
                  height={50}
                  radius="sm"
                  src={product.image}
                  width={50}
                />
                <div className="flex flex-col">
                  <p className="text-md">{product.title}</p>
                  <p className="text-small text-default-500">
                    <span className="font-bold">Status:</span>{' '}
                    {product.countInStock < 1 ? 'Out of Stock' : 'In Stock'}
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                  <span className="font-bold">Price: </span>रु‎ {product.price}
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button endContent={<AiOutlineShoppingCart />}>
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductScreen;
