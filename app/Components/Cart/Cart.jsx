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

        <div className="flex justify-between  items-start">
          {cartItems.length === 0 ? (
            <>
              <p>Cart is empty</p>
              <Link href="/">Go back</Link>
            </>
          ) : (
            <>
              <Card
                sBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
                shadow="sm"
              >
                {cartItems.map((item) => (
                  <CardBody key={item._id}>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                      <div className="relative col-span-6 md:col-span-4">
                        <Image
                          alt={item.title}
                          className="object-cover"
                          height={200}
                          shadow="md"
                          src={item.image}
                          width="100%"
                        />
                      </div>

                      <div className="flex flex-col col-span-6 md:col-span-8">
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col gap-0">
                            <h3 className="font-semibold underline text-foreground/90">
                              <Link href={`/products/${item._id}`}>
                                {item.title}
                              </Link>
                            </h3>
                            <p className="text-small text-foreground/80">
                              Price रु‎: {item.price}
                            </p>
                            <h5 className="text-large font-medium mt-2">
                              Qty:
                              <select value={item.qty}>
                                {[...Array(item.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </select>
                            </h5>
                          </div>
                          <Button
                            isIconOnly
                            className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                            radius="full"
                            variant="light"
                            onPress={() => setLiked((v) => !v)}
                          >
                            <IoMdTrash />
                          </Button>
                        </div>

                        <div className="flex flex-col mt-3 gap-1">
                          <Progress
                            aria-label="Music progress"
                            classNames={{
                              indicator: 'bg-default-800 dark:bg-white',
                              track: 'bg-default-500/30',
                            }}
                            color="default"
                            size="sm"
                            value={33}
                          />
                          <div className="flex justify-between">
                            <p className="text-small">1:23</p>
                            <p className="text-small text-foreground/50">
                              4:32
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                ))}
              </Card>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
