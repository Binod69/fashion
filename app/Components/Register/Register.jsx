'use client';
import React, { useState } from 'react';
import { Input, Link, Button } from '@nextui-org/react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const Register = ({ onPress }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
      <form className="flex flex-col gap-4 h-[300px]">
        <Input
          isRequired
          isClearable
          label="Name"
          placeholder="Enter your name"
          type="text"
        />
        <Input
          isRequired
          isClearable
          label="Email"
          placeholder="Enter your email"
          type="email"
        />
        <Input
          isRequired
          label="Password"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <BsEyeSlash className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <BsEye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? 'text' : 'password'}
          className="max-w-xs"
        />
        <p className="text-center text-small">
          Already have an account?{' '}
          <Link className=" cursor-pointer" size="sm" onPress={onPress}>
            Login
          </Link>
        </p>
        <div className="flex gap-2 justify-end">
          <Button type="submit" fullWidth color="primary">
            Sign up
          </Button>
        </div>
      </form>
    </>
  );
};

export default Register;
