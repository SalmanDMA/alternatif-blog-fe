'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AnimationWrapper from './AnimationWrapper';
import { useFormik } from 'formik';
import { authInputData } from '@/utils/inputData';
import { useRouter } from 'next/navigation';

interface IProps {
  title: string;
  btnName: string;
  authImageSrc: string;
  styleReverse: boolean;
  redirectLink: string;
  redirectText: string;
  initialValues: any;
  validationSchema: any;
  onSubmit: (values: any, { resetForm, setSubmitting }: any) => void;
}

const FormAuth = ({
  title,
  btnName,
  authImageSrc,
  styleReverse,
  redirectLink,
  redirectText,
  initialValues,
  validationSchema,
  onSubmit,
}: IProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      onSubmit(values, { resetForm, setSubmitting });
    },
  });

  const handleLoginGithub = () => {
    router.push(`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/auth/github`);
  };

  const handleLoginGoogle = () => {
    router.push(`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/auth/google`);
  };

  const filteredInputData =
    btnName === 'Login' ? authInputData.filter((data) => data.name !== 'fullname') : authInputData;

  useEffect(() => {
    formik.resetForm();
    setShowPassword(false);
    formik.setSubmitting(false);
    formik.setErrors({});
    formik.setValues(initialValues);
    formik.setTouched({});
  }, []);

  return (
    <AnimationWrapper keyValue={title} transition={{ duration: 1 }}>
      <form className='form-auth' onSubmit={formik.handleSubmit}>
        <h1 className='font-inter font-bold text-black text-3xl text-center mb-10'>{title}</h1>
        <div className={`block md:flex md:items-center md:gap-10 ${styleReverse ? 'md:flex-row-reverse' : ''}`}>
          <div className='flex flex-col gap-4 min-w-[250px]'>
            {filteredInputData.map((data) => (
              <div key={data.id}>
                <label htmlFor={data.name} className='text-black font-medium font-gelasio'>
                  {data.placeholder}
                </label>
                <div className='relative'>
                  <input
                    type={data.type === 'password' ? (showPassword ? 'text' : 'password') : data.type}
                    name={data.name}
                    id={data.name}
                    placeholder={data.placeholder}
                    className={`w-full bg-black/10 rounded-lg pr-3 pl-[2.75rem] py-2 focus:outline-none focus:right-0 font-gelasio text-gray-500`}
                    autoComplete={data.autoComplete}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[data.name] || ''}
                  />
                  {data.name !== 'password' && (
                    <i className={`${data.icon} absolute left-3 top-[56%] -translate-y-1/2 text-gray-500 text-lg`}></i>
                  )}

                  {data.name === 'password' && (
                    <>
                      {showPassword ? (
                        <i
                          className={`${data.iconUnlock} absolute left-3 top-[56%] -translate-y-1/2 text-gray-500 text-lg`}
                        ></i>
                      ) : (
                        <i
                          className={`${data.iconLock} absolute left-3 top-[56%] -translate-y-1/2 text-gray-500 text-lg`}
                        ></i>
                      )}

                      {showPassword ? (
                        <i
                          className={`${data.iconEye} absolute right-0 px-4 top-[56%] -translate-y-1/2 text-gray-500 text-lg bg-[#C1C4C9] cursor-pointer`}
                          onClick={() => setShowPassword((prev) => !prev)}
                        ></i>
                      ) : (
                        <i
                          className={`${data.iconEyeSlash} absolute right-0 px-4 top-[56%] -translate-y-1/2 text-gray-500 text-lg bg-[#C1C4C9] cursor-pointer`}
                          onClick={() => setShowPassword((prev) => !prev)}
                        ></i>
                      )}
                    </>
                  )}
                </div>

                {formik.touched[data.name] && formik.errors[data.name] && (
                  <p className='text-red-500 text-xs'>{formik.errors[data.name] as string}</p>
                )}
              </div>
            ))}

            <Link
              href={'/auth/forgot-password'}
              className='text-black/30 font-medium font-gelasio max-w-max hover:underline -mt-4'
            >
              Forgot password ?
            </Link>

            <button
              type='submit'
              className='w-full bg-black/10 rounded-lg py-2 font-gelasio text-gray-600 flex items-center gap-2 justify-center hover:bg-black/15 hover:text-white duration-300 ease-in-out mt-2'
            >
              {formik.isSubmitting ? 'Loading...' : btnName}
            </button>

            <div className='flex items-center'>
              <hr className='w-full border border-black/10 ' />
              <p className='text-black/30 font-medium font-gelasio mx-2'>or</p>
              <hr className='w-full border border-black/10' />
            </div>

            <div className='flex flex-col gap-4'>
              <button
                type='button'
                onClick={handleLoginGoogle}
                className='w-full bg-black/10 rounded-lg py-2 font-gelasio text-gray-600 flex items-center gap-2 justify-center hover:bg-black/15 hover:text-white duration-300 ease-in-out'
              >
                <Image
                  src={'/images/google-logo.png'}
                  alt='Google Logo'
                  width={100}
                  height={100}
                  priority
                  className='w-10 h-auto'
                />
                <span>{btnName} with Google</span>
              </button>

              <button
                type='button'
                onClick={handleLoginGithub}
                className='w-full bg-black/10 rounded-lg py-4 font-gelasio text-gray-600 flex items-center gap-2 justify-center hover:bg-black/15 hover:text-white duration-300 ease-in-out'
              >
                <Image
                  src={'/images/github-logo.png'}
                  alt='github Logo'
                  width={100}
                  height={100}
                  priority
                  className='w-10 h-auto'
                />
                <span>{btnName} with Github</span>
              </button>
            </div>
          </div>
          <div className='max-w-sm mx-auto hidden md:block'>
            <Image
              src={authImageSrc}
              alt={`${btnName} logo`}
              width={100}
              height={100}
              priority
              className='w-full h-full'
            />
            <p className='text-black/30 font-medium font-gelasio text-center mt-6'>
              {redirectText}{' '}
              <Link href={redirectLink} className='text-black underline'>
                {btnName === 'Register' ? 'Login' : 'Register'}
              </Link>
            </p>
          </div>
        </div>
      </form>
    </AnimationWrapper>
  );
};

export default FormAuth;
