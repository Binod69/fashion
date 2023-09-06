import Link from 'next/link';
import React from 'react';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

const Products = ({ product }) => {
  return (
    <>
      <div>
        <Card
          radius="sm"
          shadow="sm"
          isPressable
          isHoverable
          className="py-4 max-w-[100%]"
        >
          <CardBody className="overflow-visible py-2">
            <Link href={`/products/${product._id}`}>
              <Image
                radius="sm"
                alt={product.title}
                className="object-cover "
                src={product.image}
                width={270}
              />
            </Link>
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{product.title}</p>
            <small className="text-default-500">
              Price: रु‎ {product.price}
            </small>
            {/* <h4 className="font-bold text-large">{product.title}</h4> */}
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Products;
