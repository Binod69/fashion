'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Link, Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLoginMutation } from '../../redux/slice/usersApiSlice';
import { setCredentials } from '../../redux/slice/authSlice';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import toast from 'react-hot-toast';

const Login = ({ onPress }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();
  const dispatch = useDispatch();

  // const schema = yup.object({
  //   email: yup.string().email().required(),
  //   password: yup
  //     .string()
  //     .min(8, 'Password must be 8 characters long')
  //     .matches(/[0-9]/, 'Password requires a number')
  //     .matches(/[a-z]/, 'Password requires a lowercase letter')
  //     .matches(/[A-Z]/, 'Password requires an uppercase letter')
  //     .matches(/[^\w]/, 'Password requires a symbol'),
  // });

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = usePathname();
  const sp = new useSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      router.push(redirect);
    }
  }, [userInfo, redirect, router]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      router.push(redirect);
      toast.success('Login successful');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });

  // const onSubmit = async (data) => {
  //   const { email, password } = data;
  //   try {
  //     await login({ email, password }).unwrap();
  //     dispatch(setCredentials({ ...data }));
  //     router.push(redirect);
  //     console.log(data);
  //   } catch (err) {
  //     toast.error(err?.data?.message || err.error);
  //   }
  // };
  return (
    <>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <Input
          isRequired
          isClearable
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-center text-small">
          Need to create an account?{' '}
          <Link
            href={redirect ? `/sign-up?redirect=${redirect}` : '/sign-up'}
            className=" cursor-pointer"
            size="sm"
            onPress={onPress}
          >
            Sign up
          </Link>
        </p>
        <div className="flex gap-2 justify-end">
          <Button type="submit" fullWidth color="primary" isLoading={isLoading}>
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default Login;
