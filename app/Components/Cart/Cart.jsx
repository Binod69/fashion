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
  Divider,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@nextui-org/react';
import { IoMdTrash } from 'react-icons/io';
import { AiFillCarryOut } from 'react-icons/ai';
import { Rating } from '..';
import { addToCart, removeFromCart } from '../../redux/slice/cartSlice';

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };
  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id));
  };
  const checkOutHandler = () => {
    router.push('/login?redirect=/shipping');
  };
  return (
    <>
      <div className="container mx-auto h-screen my-10 ">
        <h2 className="text-3xl font-bold text-gray-400 my-5">Shopping Cart</h2>

        <div className="">
          {cartItems.length === 0 ? (
            <>
              <Link href="/">Go back</Link>
              <p>Cart is empty</p>
            </>
          ) : (
            <>
              <div className="flex justify-between items-start">
                <Card
                  isBlurred
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
                              <h3 className="font-semibold text-foreground/90">
                                <Link
                                  href={`/products/${item._id}`}
                                  className="underline"
                                >
                                  {item.title}
                                </Link>
                              </h3>
                              <p className="text-small text-foreground/80 mt-1">
                                <Rating
                                  value={item.rating}
                                  text={`${item.numReviews} reviews`}
                                />
                              </p>
                              <p className="text-sm font-medium mt-2">
                                Price: {item.price}
                              </p>
                              <div className="flex">
                                <p className="me-2">Qty:</p>
                                <select
                                  value={item.qty}
                                  onChange={(e) =>
                                    addToCartHandler(
                                      item,
                                      Number(e.target.value)
                                    )
                                  }
                                >
                                  {[...Array(item.countInStock).keys()].map(
                                    (x) => (
                                      <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                            </div>

                            <Button
                              isIconOnly
                              className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2 "
                              radius="full"
                              variant="light"
                              aria-label="delete"
                              onPress={onOpen}
                            >
                              <IoMdTrash size={15} />
                              <Modal
                                isOpen={isOpen}
                                onOpenChange={onOpenChange}
                                isDismissable={false}
                              >
                                <ModalContent>
                                  {(onClose) => (
                                    <>
                                      <ModalHeader className="flex flex-col gap-1">
                                        Delete from cart ?
                                      </ModalHeader>
                                      <ModalBody></ModalBody>
                                      <ModalFooter>
                                        <Button
                                          color="danger"
                                          variant="light"
                                          onPress={onClose}
                                        >
                                          Cancel
                                        </Button>
                                        <Button
                                          color="primary"
                                          onPress={onClose}
                                          onClick={() =>
                                            removeFromCartHandler(item._id)
                                          }
                                        >
                                          Delete
                                        </Button>
                                      </ModalFooter>
                                    </>
                                  )}
                                </ModalContent>
                              </Modal>
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Divider />
                    </CardBody>
                  ))}
                </Card>

                <Card className="max-w-[400px]">
                  <CardHeader className="flex gap-3">
                    <Image
                      alt="nextui logo"
                      height={40}
                      radius="sm"
                      src="/images/cart.svg"
                      width={40}
                    />
                    <div className="flex flex-col">
                      <p className="text-md">
                        {' '}
                        Subtotal:{' '}
                        {cartItems.reduce(
                          (acc, item) => acc + item.qty,
                          0
                        )}{' '}
                        items
                      </p>
                      <p className="text-small text-default-500">
                        Happy shopping
                      </p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <p>
                      Price :{' '}
                      {cartItems
                        .reduce((acc, item) => acc + item.qty * item.price, 0)
                        .toFixed(2)}
                    </p>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Button
                      endContent={<AiFillCarryOut size={16} />}
                      isDisabled={cartItems.length === 0}
                      onClick={checkOutHandler}
                    >
                      Proceed to checkout
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
