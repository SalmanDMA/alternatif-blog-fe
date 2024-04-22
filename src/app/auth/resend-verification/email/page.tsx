import FormResenVerification from '@/components/FormResenVerification';

const ResendVerificationEmail = () => {
  return (
    <main className='bg-gray-300 h-screen flex justify-center items-center max-w-[1440px] mx-auto'>
      <FormResenVerification
        type={'email'}
        shortDescription={"Look's like verification link has expired"}
        imgSrc='/images/envelope.svg'
      />
    </main>
  );
};

export default ResendVerificationEmail;
