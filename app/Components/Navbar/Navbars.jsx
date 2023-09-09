'use client';
import Link from 'next/link';
import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Badge,
} from '@nextui-org/react';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Navbars = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <Navbar
        isBordered
        shouldHideOnScroll
        className="max-w-[100%] mx-auto"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />

          <NavbarBrand>
            <Link href="/">
              <p className="text-inherit font-extrabold hover:text-colors6">
                Fashion
              </p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-5  hover:text-colors6"
          justify="center"
        >
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link href="/men">Men</Link>
          </NavbarItem>

          <NavbarItem>
            <Link color="foreground" href="/women">
              Women
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link color="foreground" href="/categories">
              Categories
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="flex gap-3 items-center">
            <Button
              className=" relative"
              radius="full"
              isIconOnly
              aria-label="add to cart"
              variant="light"
            >
              <Link href="/cart">
                <AiOutlineShoppingCart size={24} />
              </Link>
            </Button>
            {cartItems.length > 0 && (
              <Badge
                content={cartItems.reduce((a, c) => a + c.qty, 0)}
                shape="circle"
                color="danger"
                className=" absolute right-5 -top-4"
              ></Badge>
            )}

            <Link href="/" className="ms-3">
              <Button
                variant="bordered"
                aria-label="login or sign up"
                endContent={<AiOutlineUser />}
                onClick={(e) => e.preventDefault()}
              >
                Login
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className=" max-h-36 border-b-3  border-colors5">
          <NavbarMenuItem>
            <Link href="/home">Home</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/men">Men</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/women">Women</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/categories">Categories</Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};
export default Navbars;
