'use client';
import Link from 'next/link';
import NextImage from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
  Button,
  Progress,
  Divider,
} from '@nextui-org/react';
import { IoMdTrash } from 'react-icons/io';

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <>
      <div className="container mx-auto h-screen my-10 ">
        <h2 className="text-3xl font-bold text-gray-400 my-5">Shopping</h2>

        <div className="">
          {cartItems.length === 0 ? (
            <>
              <Link href="/">Go back</Link>
              <p>Cart is empty</p>
            </>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item._id} className="flex justify-between ">
                  <div>
                    <Card radius="sm" className=" my-2 flex w-[200px]">
                      <div>
                        <CardBody className="flex">
                          <Image
                            radius="sm"
                            src={item.image}
                            alt={item.title}
                            className=" object-cover"
                          />
                          <CardHeader>
                            <Link
                              href={`/products/${item._id}`}
                              className="underline"
                            >
                              <h2>{item.title}</h2>
                            </Link>
                          </CardHeader>
                        </CardBody>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <h2>
                      subtotal:
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                    </h2>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
