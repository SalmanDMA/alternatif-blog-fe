import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-gray-100 px-8 py-16'>
      <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Logo and Description */}
        <div className='flex flex-col items-start'>
          <div className='flex items-center mb-4'>
            <img src='/logo.png' alt='Education Logo' className='w-10 h-10' />
            <span className='ml-2 text-lg font-semibold text-gray-700'>Education</span>
          </div>
          <p className='text-gray-500'>
            Anywhere, anytime. Start learning today! And get an Exceptional Education Experience.
          </p>
          <p className='text-gray-500 mt-4'>© Education Theme 2024</p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className='font-bold text-teal-700 mb-4'>COMPANY</h4>
          <ul className='text-gray-500'>
            <li>
              <Link href='/team'>Team</Link>
            </li>
            <li>
              <Link href='/history'>History</Link>
            </li>
            <li>
              <Link href='/contact'>Contact us</Link>
            </li>
            <li>
              <Link href='/locations'>Locations</Link>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className='font-bold text-teal-700 mb-4'>RESOURCES</h4>
          <ul className='text-gray-500'>
            <li>
              <Link href='/resources'>Resource</Link>
            </li>
            <li>
              <Link href='/resource-name'>Resource name</Link>
            </li>
            <li>
              <Link href='/another-resource'>Another resource</Link>
            </li>
            <li>
              <Link href='/final-resource'>Final resource</Link>
            </li>
          </ul>
        </div>

        {/* Legal Links and Social Media */}
        <div>
          <h4 className='font-bold text-teal-700 mb-4'>LEGAL</h4>
          <ul className='text-gray-500 mb-6'>
            <li>
              <Link href='/privacy-policy'>Privacy policy</Link>
            </li>
            <li>
              <Link href='/terms-of-use'>Terms of use</Link>
            </li>
          </ul>
          {/* Social Media Icons */}
          <div className='flex space-x-4 mb-4'>
            <a href='https://facebook.com' className='bg-gray-200 p-2 rounded-full'>
              <i className='fi fi-brands-facebook text-teal-700 text-xl'></i>
            </a>
            <a href='https://twitter.com' className='bg-gray-200 p-2 rounded-full'>
              <i className='fi fi-brands-twitter text-teal-700 text-xl'></i>
            </a>
            <a href='https://instagram.com' className='bg-gray-200 p-2 rounded-full'>
              <i className='fi fi-brands-instagram text-teal-700 text-xl'></i>
            </a>
            <a href='https://linkedin.com' className='bg-gray-200 p-2 rounded-full'>
              <i className='fi fi-brands-linkedin text-teal-700 text-xl'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
