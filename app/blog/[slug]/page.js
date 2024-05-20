import { notFound } from 'next/navigation';

const titles = {
  first: 'hello First!',
  second: 'Hello Second!'
}

export async function generateMetadata({ params, searchParams }, parent) {
  const description = (await parent).description ?? 'Default description';
  return {
    title: titles[params.slug],
    description
  };
}

export default function BlogPage({ params }) {

  if (!['first', 'second'].includes(params.slug)) {
    notFound();
  }

  return (
    <div>page {JSON.stringify(params)}</div>
  );
};