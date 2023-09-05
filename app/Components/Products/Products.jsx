import Link from 'next/link';
import React from 'react';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

const Products = ({ product }) => {
  return (
    <>
      <div>
        <Card shadow="sm" isPressable isHoverable className="max-w-[100%]">
          <CardBody className="overflow-visible p-0">
            <Link href={`/products/${product._id}`}>
              <Image
                shadow="sm"
                radius="md"
                width="100%"
                alt={product.name}
                className="w-full object-cover h-[240px]"
                src={product.image}
              />
            </Link>
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col  items-start">
            <p className="text-tiny uppercase font-bold">{product.title}</p>
            <small className="text-default-500">{product.price}</small>
            <span className=" overflow-hidden">{product.description}</span>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Products;
