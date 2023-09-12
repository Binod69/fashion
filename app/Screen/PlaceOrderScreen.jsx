'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import {
  Listbox,
  ListboxItem,
  Card,
  CardBody,
  Image,
  ListboxSection,
  Button,
} from '@nextui-org/react';
import ShippingSteps from '../Components/ShippingStep/ShippingSteps';
import toast from 'react-hot-toast';
import { useCreateOrderMutation } from '../redux/slice/orderApiSlice';
import { clearCartItems } from '../redux/slice/cartSlice';

const PlaceOrderScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [createOrder, { isLoading, error }] = useCreateOrderMutation();
  console.log(error);
  useEffect(() => {
    if (!cart.shippingAddress.address) {
      router.push('/shipping');
    } else if (!cart.payment) {
      router.push('/payment');
    }
  }, [cart.payment, cart.shippingAddress.address, router]);

  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        payment: cart.payment,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <>
      <div className="grid place-content-center">
        <ShippingSteps step1 step2 step3 step4 />
        <div className="flex justify-between lg:flex-row flex-col  items-start">
          <div className="w-full max-w-[70%] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
            <Listbox aria-label="Actions" variant="bordered">
              <ListboxSection title="Shipping" showDivider>
                <ListboxItem key="shipping">
                  <p className="font-semibold">
                    {cart.shippingAddress.address},{cart.shippingAddress.city},
                    {cart.shippingAddress.contact},
                    {cart.shippingAddress.postalCode}
                  </p>
                </ListboxItem>
              </ListboxSection>
              <ListboxSection title="Payment" showDivider>
                <ListboxItem key="payment">
                  <p>
                    <span className="font-semibold">{cart.payment} </span>
                  </p>
                </ListboxItem>
              </ListboxSection>
              <ListboxSection title="Orders" showDivider>
                <ListboxItem className="flex" key="order">
                  {/* <h5 className="text-xl font-bold my-1">Order Items</h5> */}
                  {cart.cartItems.length === 0 ? (
                    <>
                      <p>Your cart is empty</p>
                    </>
                  ) : (
                    <>
                      <Listbox variant="bordered">
                        {cart.cartItems.map((item, index) => (
                          <ListboxItem key={index}>
                            <div className="flex gap-3">
                              <figure>
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  width={50}
                                  height={50}
                                  className=" object-cover"
                                />
                              </figure>
                              <div>
                                <Link
                                  className="underline"
                                  href={`/products/${item._id}`}
                                >
                                  {item.title}
                                </Link>
                              </div>
                              <div>
                                {item.qty} x {item.price} ={' '}
                                {item.qty * item.price}
                              </div>
                            </div>
                          </ListboxItem>
                        ))}
                      </Listbox>
                    </>
                  )}
                </ListboxItem>
              </ListboxSection>
            </Listbox>
          </div>
          <div>
            <div className="w-full max-w-[100%] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
              <Listbox aria-label="Actions" variant="bordered">
                <ListboxSection title="Order Summary" showDivider>
                  <ListboxItem key="order summary">
                    <span className="me-2 font-semibold"> Price:</span>
                    {cart.itemsPrice}
                  </ListboxItem>
                </ListboxSection>
                <ListboxSection title="Shipping Cost" showDivider>
                  <ListboxItem key="shipping price">
                    <span className="me-2 font-semibold">Shipping:</span>
                    {cart.shippingPrice}
                  </ListboxItem>
                </ListboxSection>
                <ListboxSection title="Tax" showDivider>
                  <ListboxItem key="tax price">
                    <span className="me-2 font-semibold">Tax:</span>
                    {cart.taxPrice}
                  </ListboxItem>
                </ListboxSection>
                <ListboxSection title="Total" showDivider>
                  <ListboxItem key="total price">
                    <span className="me-2 font-semibold">Total:</span>
                    {cart.totalPrice}
                  </ListboxItem>
                </ListboxSection>
                <ListboxItem>{error && error.data.message}</ListboxItem>
                <ListboxItem>
                  <Button
                    type="submit"
                    isDisabled={cart.cartItems.length === 0}
                    onClick={placeOrderHandler}
                    isLoading={isLoading}
                  >
                    Place Order
                  </Button>
                </ListboxItem>
              </Listbox>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
