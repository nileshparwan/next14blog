'use client'
 
export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body>
        <h2>Ouups</h2>
        <button type='button' onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
};

// works only in the production mode