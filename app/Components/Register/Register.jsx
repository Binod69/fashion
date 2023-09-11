'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Link, Button } from '@nextui-org/react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { setCredentials } from '../../redux/slice/authSlice';
import { useRegisterMutation } from '@/app/redux/slice/usersApiSlice';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';

const Register = ({ onPress }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const toggleConfrimPasswordVisibility = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

  const router = useRouter();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Name is required')
      .min(3, 'Name must be at least 2 characters'),
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),

    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol'),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const [registers, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { search } = router;
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      router.push(redirect);
    }
  }, [userInfo, redirect, navigator]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { name, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      toast.error('Password do not match');
    } else {
      try {
        await registers({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...data }));
        router.push(redirect);
        console.log(data);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 h-[400px]"
      >
        <Input
          isRequired
          isClearable
          label="Name"
          placeholder="Enter your name"
          type="text"
          {...register('name')}
          errorMessage={errors.name && errors.name.message}
        />
        <Input
          isRequired
          isClearable
          label="Email"
          placeholder="Enter your email"
          type="email"
          {...register('email')}
          errorMessage={errors.email && errors.email.message}
        />
        <Input
          isRequired
          label="Password"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <BsEyeSlash className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <BsEye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isPasswordVisible ? 'text' : 'password'}
          className="max-w-xs"
          {...register('password')}
          errorMessage={errors.password && errors.password.message}
        />
        <Input
          isRequired
          label="Confrim Password"
          placeholder="Confirm  password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleConfrimPasswordVisibility}
            >
              {isConfirmPasswordVisible ? (
                <BsEyeSlash className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <BsEye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isConfirmPasswordVisible ? 'text' : 'password'}
          className="max-w-xs"
          {...register('confirmPassword')}
          errorMessage={
            errors.confirmPassword && errors.confirmPassword.message
          }
        />
        <p className="text-center text-small">
          Already have an account?{' '}
          <Link
            href={redirect ? `/login?redirect=${redirect}` : '/login'}
            className=" cursor-pointer"
            size="sm"
            onPress={onPress}
          >
            Login
          </Link>
        </p>
        <div className="flex gap-2 justify-end">
          <Button isLoading={isLoading} type="submit" fullWidth color="primary">
            Register
          </Button>
        </div>
      </form>
    </>
  );
};

export default Register;
