'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const GoogleCallback = () => {
  const search = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    if (search.get('error')) {
      toast.error('Something went wrong. Please try another google account. Redirecting to sign page...');
      router.push('/auth/signin');
    } else {
      toast.success('Login success. Redirecting to home page...');
      router.push('/');
    }
  }, []);

  return;
};

export default GoogleCallback;
