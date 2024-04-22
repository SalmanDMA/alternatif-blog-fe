'use client';
import { toast } from 'react-toastify';

export default function Home() {
  const notify = () => toast.success('Wow so easy !');
  return (
    <main>
      <div>
        <h1 className='font-gelasio text-black'>Home</h1>
        <button onClick={notify}>Notify !</button>
      </div>
    </main>
  );
}
