'use client';
import React, { useState } from 'react';
import { Input, Link, Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const Login = ({ onPress }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          isRequired
          isClearable
          label="Email"
          placeholder="Enter your email"
          type="email"
          {...register('email')}
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
          {...register('password')}
        />
        <p className="text-center text-small">
          Need to create an account?{' '}
          <Link className=" cursor-pointer" size="sm" onPress={onPress}>
            Sign up
          </Link>
        </p>
        <div className="flex gap-2 justify-end">
          <Button type="submit" fullWidth color="primary">
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default Login;
