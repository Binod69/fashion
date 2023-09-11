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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from '@nextui-org/react';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Navbars = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const handleLogout = () => {
    console.log('logout');
  };
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
            {userInfo ? (
              <>
                <div className="flex items-center gap-4">
                  <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                      <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                      />
                    </DropdownTrigger>
                    <DropdownMenu
                      textValue="dropdown-menu"
                      aria-label="Profile Actions"
                      variant="flat"
                    >
                      <DropdownItem
                        key="profile"
                        textValue="profile"
                        className="h-14 gap-2"
                      >
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">{userInfo.email}</p>
                      </DropdownItem>

                      <DropdownItem textValue="user-profile" key="user-profile">
                        <Link href="/profile">Profile</Link>
                      </DropdownItem>

                      {/* <DropdownItem key="team_settings">
                      Team Settings
                    </DropdownItem>
                    <DropdownItem key="analytics">Analytics</DropdownItem>
                    <DropdownItem key="system">System</DropdownItem>
                    <DropdownItem key="configurations">
                      Configurations
                    </DropdownItem>
                    <DropdownItem key="help_and_feedback">
                      Help & Feedback
                    </DropdownItem> */}
                      <DropdownItem
                        textValue="logout"
                        onClick={handleLogout}
                        key="logout"
                        color="danger"
                      >
                        Log Out
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </>
            ) : (
              <>
                <Button
                  variant="bordered"
                  aria-label="login or sign up"
                  endContent={<AiOutlineUser />}
                >
                  <Link href="/auth" className="ms-3">
                    Login
                  </Link>
                </Button>
              </>
            )}
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
