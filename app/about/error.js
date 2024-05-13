'use client' // Error components must be Client Components
 
import { useRouter } from 'next/navigation';
import { useTransition, useEffect } from 'react'
 
export default function Error({ error, reset }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  
  return (
    <div className={`${isPending ? 'opacity-5' : 'opacity-100'}`}>
      <h2>Something went wrong!</h2>
      {/* Attempt to recover by trying to re-render the segment */}
      <button type='button' onClick={() => {
        startTransition(() => {
          router.refresh();
          reset();
        });
      }}>
        Try again
      </button>
    </div>
  );
}