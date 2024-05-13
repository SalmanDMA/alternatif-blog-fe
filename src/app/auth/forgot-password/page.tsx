'use client';
import AnimationWrapper from '@/components/AnimationWrapper';
import axios from 'axios';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const ForgotPassword = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [temporaryValues, setTemporaryValues] = useState({ email: '', password: '' });
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const formikEmail = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/users/${values.email}`);
        if (!data.success) {
          throw new Error(data.message || 'an error occurred');
        }
        setIsValidEmail(true);
        setTemporaryValues((prev) => ({ ...prev, email: values.email }));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error?.response?.data.message || 'An error occurred. Please try again later.');
        } else {
          toast.error('An error occurred. Please try again later.');
        }
        setIsValidEmail(false);
      }
    },
  });

  const formikPassword = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/auth/forgot-password`, {
          email: temporaryValues.email,
          newPassword: values.password,
        });
        if (!data.success) {
          throw new Error(data.message || 'an error occurred');
        }
        setIsValidEmail(true);
        setTemporaryValues((prev) => ({ email: '', password: '' }));
        toast.success(data.message + ' Redirecting to sign in page...');
        setIsSuccess(true);
        setTimeout(() => {
          router.push('/auth/signin');
        }, 3000);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error?.response?.data.message || 'An error occurred. Please try again later.');
        } else {
          toast.error('An error occurred. Please try again later.');
        }
        setIsSuccess(false);
      }
    },
  });

  return (
    <main className='bg-gray-300 h-screen flex justify-center items-center max-w-[1440px] mx-auto'>
      <form onSubmit={isValidEmail ? formikPassword.handleSubmit : formikEmail.handleSubmit} className='form-auth'>
        <h1 className='text-3xl font-bold mb-4 text-center font-inter'>Forgot Password</h1>
        <div className='flex justify-center w-[300px] h-[300px] mx-auto'>
          <Image
            src={'/images/forgot-password.svg'}
            width={300}
            height={300}
            className='mb-4 w-full h-full object-contain'
            alt='forgot password'
            priority
          />
        </div>
        <p className='mb-4 font-gelasio'>
          {isValidEmail ? 'Enter your new password' : 'Enter your email address to reset your password'}
        </p>

        {!isValidEmail && (
          <AnimationWrapper
            keyValue='email'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='mb-4 relative'
          >
            {' '}
            <EmailField formik={formikEmail} />
          </AnimationWrapper>
        )}

        {isValidEmail && (
          <AnimationWrapper
            keyValue='password'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='mb-4 relative'
          >
            <PasswordField formik={formikPassword} />
          </AnimationWrapper>
        )}

        {isSuccess ? (
          <AnimationWrapper
            keyValue='success'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={'/auth/signin'}>
              <button className='w-full bg-black/10 rounded-lg py-2 font-gelasio text-gray-600 flex items-center gap-2 justify-center hover:bg-black/15 hover:text-white duration-300 ease-in-out mt-2'>
                Continue to Sign In
              </button>
            </Link>
          </AnimationWrapper>
        ) : (
          <AnimationWrapper
            keyValue='success'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button
              type='submit'
              className='w-full bg-black/10 rounded-lg py-2 font-gelasio text-gray-600 flex items-center gap-2 justify-center hover:bg-black/15 hover:text-white duration-300 ease-in-out mt-2'
              disabled={formikEmail.isSubmitting || formikPassword.isSubmitting}
            >
              {formikEmail.isSubmitting || formikPassword.isSubmitting
                ? 'Loading...'
                : isValidEmail
                ? 'Reset Password'
                : 'Continue'}
            </button>
          </AnimationWrapper>
        )}
      </form>
    </main>
  );
};

export default ForgotPassword;

const EmailField = ({ formik }: { formik: any }) => {
  return (
    <>
      <input
        className='w-full bg-black/10 rounded-lg pr-3 pl-[2.75rem] py-2 focus:outline-none focus:right-0 font-gelasio text-gray-500'
        type='email'
        placeholder='Email'
        {...formik.getFieldProps('email')}
      />
      <i
        className={`fi fi-rr-envelope absolute left-3 ${
          formik.errors.email ? 'top-[40%]' : 'top-[56%]'
        } -translate-y-1/2 text-gray-500 text-lg`}
      ></i>

      {formik.touched.email && formik.errors.email && <p className='text-red-500 text-xs'>{formik.errors.email}</p>}
    </>
  );
};

const PasswordField = ({ formik }: { formik: any }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <input
        className='w-full bg-black/10 rounded-lg pr-3 pl-[2.75rem] py-2 focus:outline-none focus:right-0 font-gelasio text-gray-500'
        type={showPassword ? 'text' : 'password'}
        placeholder='Password'
        {...formik.getFieldProps('password')}
      />
      <i
        className={`${showPassword ? 'fi fi-rr-unlock' : 'fi fi-rr-lock'} absolute left-3 ${
          formik.errors.password ? 'top-[40%]' : 'top-[56%]'
        } -translate-y-1/2 text-gray-500 text-lg`}
      ></i>
      <i
        className={`${showPassword ? 'fi fi-rr-eye' : 'fi fi-rr-eye-crossed'} absolute right-0 px-4 ${
          formik.errors.password ? 'top-[40%]' : 'top-[56%]'
        } -translate-y-1/2 text-gray-500 text-lg bg-[#C1C4C9] cursor-pointer`}
        onClick={() => setShowPassword(!showPassword)}
      ></i>

      {formik.touched.password && formik.errors.password && (
        <p className='text-red-500 text-xs'>{formik.errors.password}</p>
      )}
    </>
  );
};
