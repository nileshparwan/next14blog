import { notFound } from 'next/navigation';

export const metadata = {
  title: "Blog",
};

export default function BlogPage({ params }) {

  if (!['first', 'second'].includes(params.slug)) {
    notFound();
  }

  return (
    <div>page {JSON.stringify(params)}</div>
  );
};