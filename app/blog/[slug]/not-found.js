import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2 className='text-2xl'>404</h2>
      <p>Blog post was not found</p>
      
      <div className='mt-4'>
        <p>You might want to checkout some blog posts:</p>

        <ul>
            <li>First</li>
            <li>Second</li>
        </ul>
      </div>
    </div>
  )
}