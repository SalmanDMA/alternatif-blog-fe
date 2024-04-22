'use client';
import FormAuth from './FormAuth';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const SignUpComponent = () => {
  const router = useRouter();
  const initialValuesFormik = {
    fullname: '',
    email: '',
    password: '',
  };

  const validationSchemaFormik = Yup.object({
    fullname: Yup.string().required('Fullname is required'),
    email: Yup.string().required('Email is required').email('Invalid email address'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        regexPassword,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
  });

  const handleSignUp = async (values: any, { resetForm, setSubmitting }: any) => {
    setSubmitting(true);
    try {
      const type = 'email';
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/auth/signup`, {
        ...values,
        type,
      });

      if (!data.success) {
        throw new Error(data.message || 'An error occurred. Please try again later.');
      }

      resetForm();
      toast.success(data.message);
      setTimeout(() => {
        return router.push('/auth/signin');
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
        title='Sign Up'
        btnName='Register'
        styleReverse={true}
        authImageSrc='/images/signup.svg'
        key={Math.random() + 'signup'}
        redirectLink='/auth/signin'
        redirectText='Already have an account?'
        initialValues={initialValuesFormik}
        onSubmit={handleSignUp}
        validationSchema={validationSchemaFormik}
      />
    </div>
  );
};

export default SignUpComponent;
