import { notFound } from 'next/navigation';

const BlogPage = ({ params }) => {

  if (!['first', 'second'].includes(params.slug)) {
    notFound();
  }

  return (
    <div>page {JSON.stringify(params)}</div>
  );
};

export default BlogPage;