'use client';
import Link from 'next/link';
import NextImage from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Listbox, ListboxItem, Card, CardBody, Image } from '@nextui-org/react';

import { IoMdTrash } from 'react-icons/io';

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <>
      <div className="container mx-auto h-screen my-10">
        <div>
          <h2>Shopping</h2>
          {cartItems.length === 0 ? (
            <>
              <p>Cart is empty</p>
              <Link href="/">Go back</Link>
            </>
          ) : (
            <>
              <Card className="w-[50%]">
                <CardBody>
                  <Listbox>
                    {cartItems.map((item) => (
                      <ListboxItem key={item._id} className="flex">
                        <Image
                          src={item.image}
                          alt={item.title}
                          height={100}
                          width={100}
                        />
                        {item.title}
                      </ListboxItem>
                    ))}
                  </Listbox>
                </CardBody>
              </Card>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
