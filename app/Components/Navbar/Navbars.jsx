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
} from '@nextui-org/react';
import { motion } from 'framer-motion';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';

const Navbars = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        isBordered
        shouldHideOnScroll
        isBlurred={true}
        className="max-w-[100%] mx-auto"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <NavbarBrand>
              <Link href="/">
                <p className="text-inherit font-extrabold hover:text-colors6">
                  Fashion
                </p>
              </Link>
            </NavbarBrand>
          </motion.div>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-5  hover:text-colors6"
          justify="center"
        >
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <NavbarItem>
              <Link color="foreground" href="/">
                Home
              </Link>
            </NavbarItem>
          </motion.div>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.1 }}
          >
            <NavbarItem>
              <Link href="/men">Men</Link>
            </NavbarItem>
          </motion.div>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.2 }}
          >
            <NavbarItem>
              <Link color="foreground" href="/women">
                Women
              </Link>
            </NavbarItem>
          </motion.div>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.3 }}
          >
            <NavbarItem>
              <Link color="foreground" href="/categories">
                Categories
              </Link>
            </NavbarItem>
          </motion.div>
        </NavbarContent>

        <NavbarContent justify="end">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.3 }}
          >
            <NavbarItem>
              <Link href="/">
                <Button
                  variant="bordered"
                  aria-label="Add to cart"
                  endContent={<AiOutlineShoppingCart />}
                >
                  Cart
                </Button>
              </Link>
              <Link href="/" className="ms-3">
                <Button
                  variant="bordered"
                  aria-label="login or sign up"
                  endContent={<AiOutlineUser />}
                >
                  Login
                </Button>
              </Link>
            </NavbarItem>
          </motion.div>
        </NavbarContent>
        <NavbarMenu className="bg-yellow max-h-36 border-b-3  border-colors5">
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
