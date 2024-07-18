import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { gql } from "graphql-request";
import { hygraph } from "~/utils/hygraph.server";
import { Post } from "~/utils/interface";
import Pagination from "~/components/Pagination";

interface IAppProps {
  posts: Post[];
  totalPosts: number;
  currentPage: number;
  totalPages: number;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const pageSize = 5;
  const offset = (page - 1) * pageSize;

  const query = gql`
    query Post($limit: Int, $offset: Int) {
      posts(first: $limit, skip: $offset, orderBy: createdAt_DESC) {
        createdAt
        id
        overview
        slug
        title
        updatedAt
      }
      postsConnection {
        aggregate {
          count
        }
      }
    }
  `;

  const { posts, postsConnection }: any = await hygraph.request(query, {
    limit: pageSize,
    offset,
  });
  const totalPosts = postsConnection.aggregate.count;
  const totalPages = Math.ceil(totalPosts / pageSize);

  return json({ posts, totalPosts, currentPage: page, totalPages });
}

const Blog = () => {
  const { posts, currentPage, totalPages } = useLoaderData<IAppProps>();

  return (
    <div>
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='space-2 pt-6 pb-8 md:space-y-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl'>
            All Blog Posts
          </h1>
        </div>
        <ul>
          {posts.map((post: any) => (
            <li key={post.id} className='py-4'>
              <article className='space-y-2 xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
                <div>
                  <p className='text-base font-medium leading-6 text-red-500'>
                    {new Date(post.createdAt).toISOString().split("T")[0]}
                  </p>
                </div>
                <Link
                  to={`/post/${post.slug}`}
                  className='space-y-3 xl:col-span-3'
                  prefetch='intent'
                >
                  <div>
                    <h3 className='text-2xl leading-8 tracking-tight text-gray-900 dark:text-gray-100'>
                      {post.title}
                    </h3>
                  </div>
                  <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                    {post.overview}
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
        <div className='my-8'>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            baseUrl='/blog'
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
