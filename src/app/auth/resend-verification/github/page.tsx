import FormResenVerification from '@/components/FormResenVerification';

const ResendVerificationGithub = () => {
  return (
    <main className='bg-gray-300 h-screen flex justify-center items-center max-w-[1440px] mx-auto'>
      <FormResenVerification
        type={'github'}
        shortDescription={"You haven't set your email on your GitHub account"}
        imgSrc='/images/sad.svg'
      />
    </main>
  );
};

export default ResendVerificationGithub;
