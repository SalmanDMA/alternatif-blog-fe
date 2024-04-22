'use client';
import { toast } from 'react-toastify';
import FormAuth from './FormAuth';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useCookies } from 'next-client-cookies';

const SignInComponent = () => {
  const cookie = useCookies();
  const router = useRouter();
  const initialValuesFormik = {
    email: '',
    password: '',
  };

  const validationSchemaFormik = Yup.object({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSignIn = async (values: any, { resetForm, setSubmitting }: any) => {
    setSubmitting(true);
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/auth/signin`, {
        ...values,
      });

      if (!data.success) {
        throw new Error(data.message || 'An error occurred. Please try again later.');
      }
      const oneDay = 24 * 60 * 60 * 1000;
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + oneDay);
      cookie.set('access_token', data.data.token, { path: '/', expires: expirationDate });
      resetForm();
      toast.success(data.message + ' Redirecting to home page...');
      setTimeout(() => {
        return router.push('/');
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data.message || 'An error occurred. Please try again later.');
      } else {
        toast.error('An error occurred. Please try again later.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='relative w-full max-w-2xl'>
      <div className='shape shape-1'></div>
      <div className='shape shape-2'></div>
      <FormAuth
        title='Sign In'
        btnName='Login'
        styleReverse={false}
        authImageSrc='/images/signin.svg'
        key={Math.random() + 'signin'}
        redirectLink='/auth/signup'
        redirectText="Don't have an account?"
        initialValues={initialValuesFormik}
        onSubmit={handleSignIn}
        validationSchema={validationSchemaFormik}
      />
    </div>
  );
};

export default SignInComponent;
