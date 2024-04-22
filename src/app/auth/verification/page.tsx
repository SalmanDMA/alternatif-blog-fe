'use client';
import axios from 'axios';
import { useCookies } from 'next-client-cookies';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const VerificationEmail = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');
  const type = searchParams.get('type');
  const [countdown, setCountdown] = useState(3);
  const cookie = useCookies();
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      if (token && type) {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/email/verification/${token}`,
          {
            token,
            type,
          }
        );
        console.log(data);

        if (data.success) {
          setError(false);
          if (type === 'github') {
            const oneDay = 24 * 60 * 60 * 1000;
            const expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + oneDay);
            cookie.set('access_token', data.token, { path: '/', expires: expirationDate });
            toast.success(data.message + ' Redirecting to home page...');
            setTimeout(() => {
              router.push('/');
            }, 3000);
          } else {
            toast.success(data.message + ' Redirecting to sign in page...');
            setTimeout(() => {
              router.push('/auth/signin');
            }, 3000);
          }
        }
      }
    } catch (error) {
      setError(true);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || 'Something went wrong, please try again later.');
      } else {
        toast.error('Something went wrong, please try again later.');
      }
      if (type === 'github') {
        setTimeout(() => {
          router.push('/auth/resend-verification/github');
        }, 3000);
      } else {
        setTimeout(() => {
          router.push('/auth/resend-verification/email');
        }, 3000);
      }
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className='bg-gray-300 h-screen flex justify-center items-center max-w-[1440px] mx-auto'>
      <div className='w-full max-w-2xl'>
        <div className='form-auth relative'>
          <i
            className={`${
              error ? 'fi fi-sr-times-hexagon text-red-500' : 'fi fi-ss-badge-check text-green-500'
            } absolute text-[8rem] top-[-65px] sm:top-[-80px] left-1/2 -translate-x-1/2 sm:text-[10rem]`}
          ></i>
          <h1 className='font-inter font-bold text-black text-4xl sm:text-6xl text-center mb-2 pt-[90px]'>
            {error ? 'UPSSS SORRY!!!' : 'AWESOME!!!'}
          </h1>
          <p className='text-black text-xl font-medium font-gelasio mx-2 text-center mb-6'>
            {error
              ? 'Your token is invalid, please send a new verification email.'
              : 'Your email has been successfully verified.'}
          </p>

          {error ? (
            <p className='text-black/30 font-medium font-gelasio mx-2 text-center'>
              {countdown <= 0
                ? 'Redirect...'
                : `You will be redirected to resend verification page in ${countdown} seconds`}
            </p>
          ) : (
            <>
              {type === 'github' ? (
                <p className='text-black/30 font-medium font-gelasio mx-2 text-center'>
                  {countdown <= 0 ? 'Redirect...' : `You will be redirected to home page in ${countdown} seconds`}
                </p>
              ) : (
                <>
                  <p className='text-black/30 font-medium font-gelasio mx-2 text-center'>
                    Please login to your account
                  </p>
                  <p className='text-black/30 font-medium font-gelasio mx-2 text-center'>
                    {countdown <= 0 ? 'Redirect...' : `You will be redirected to home page in ${countdown} seconds`}
                  </p>
                </>
              )}
            </>
          )}

          <div className='flex items-center my-6'>
            <hr className='w-full border border-black/10 ' />
            <p className='text-black/30 font-medium font-gelasio mx-2 text-center'>or</p>
            <hr className='w-full border border-black/10' />
          </div>

          <p className='text-black/30 font-medium font-gelasio mx-2 text-center'>
            Click here to redirect to{' '}
            {error ? 'resend verification page' : type === 'github' ? 'home page' : 'login page'}
          </p>
          <Link
            href={error ? '/auth/resend-verification' : type === 'github' ? '/' : '/auth/signin'}
            className='w-full bg-black/10 rounded-lg py-2 font-gelasio text-gray-600 flex items-center gap-2 justify-center hover:bg-black/15 hover:text-white duration-300 ease-in-out'
          >
            {error ? 'Resend Verification Page' : type === 'github' ? 'Home Page' : 'Login Page'}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default VerificationEmail;
