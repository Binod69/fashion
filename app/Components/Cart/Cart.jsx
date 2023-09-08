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

        <div className="flex justify-between items-start flex-col">
          {cartItems.length === 0 ? (
            <>
              <p>Cart is empty</p>
              <Link href="/">Go back</Link>
            </>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between items-start"
                >
                  <div className="flex justify-between items-start gap-10">
                    <Card className="w-[100%] my-3">
                      <CardBody className="flex">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={150}
                          height={150}
                          className="object-cover"
                          shadow="sm"
                        />
                      </CardBody>
                      <h5>{item.title}</h5>
                    </Card>
                    <Card>
                      <CardBody>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={150}
                          height={150}
                          className="object-cover"
                          shadow="sm"
                        />
                      </CardBody>
                    </Card>
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
