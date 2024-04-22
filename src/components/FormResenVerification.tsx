'use client';
import Image from 'next/image';
import AnimationWrapper from './AnimationWrapper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

interface IProps {
  type: 'email' | 'github';
  shortDescription: string;
  imgSrc: string;
}

const FormResenVerification = ({ type, shortDescription, imgSrc }: IProps) => {
  const searchParams = useSearchParams();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        setSubmitting(true);
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/email/resend-verification`, {
          email: values.email,
          type,
          githubId: searchParams.get('github') ? searchParams.get('github') : undefined,
        });

        if (data.success) {
          resetForm();
          setSubmitting(false);
          toast.success(data.message);
        }
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    },
  });
  return (
    <AnimationWrapper keyValue={type} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <form onSubmit={formik.handleSubmit} className='form-auth'>
        <h1 className='font-inter font-bold text-black text-3xl text-center mb-10'>
          {type === 'email' ? 'Email Verification Link Expired' : 'Resend Verification Email Github'}
        </h1>
        <div className='mx-auto mb-5 w-48 h-auto sm:w-80 sm:h-auto'>
          <Image
            src={imgSrc}
            width={144}
            height={144}
            alt={type === 'email' ? 'Icon Email Verification' : 'Sad Face'}
            className='w-full h-full'
            priority
          />
        </div>
        <p className='text-gray-500 font-medium mb-5 font-gelasio text-center'>{shortDescription}</p>

        <label htmlFor='email' className='text-black font-medium font-gelasio mb-1'>
          Email
        </label>
        <div className={`relative ${formik.touched.email && formik.errors.email ? '' : 'mb-4'}`}>
          <input
            type='email'
            id='email'
            className={`w-full bg-black/10 rounded-lg pr-3 pl-[2.75rem] py-2 focus:outline-none focus:right-0 font-gelasio text-gray-500`}
            placeholder='Please enter your email here...'
            {...formik.getFieldProps('email')}
          />
          <i className={`fi fi-rr-envelope absolute left-3 top-[56%] -translate-y-1/2 text-gray-500 text-lg`}></i>
        </div>
        {formik.touched.email && formik.errors.email && (
          <div className='text-red-500 text-xs mb-4'>{formik.errors.email}</div>
        )}
        <button
          type='submit'
          className='w-full bg-black/10 rounded-lg py-2 text-gray-600 flex items-center gap-2 justify-center hover:bg-black/15 hover:text-white duration-300 ease-in-out font-inter'
        >
          Submit
        </button>
      </form>
    </AnimationWrapper>
  );
};

export default FormResenVerification;
