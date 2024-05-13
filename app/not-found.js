import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2 className='text-2xl'>404</h2>
      <p>Page was not found</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}