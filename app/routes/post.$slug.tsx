import { RichText } from "@graphcms/rich-text-react-renderer";
import { json, LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { gql } from "graphql-request";
import { hygraph } from "~/utils/hygraph.server";
import { PostId } from "~/utils/interface";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import { useEffect, useRef } from "react";
import ScrollToTop from "react-scroll-to-top";
import ScrollToTopButton from "~/components/ScrollToTop";
export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-tomorrow.min.css",
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/line-numbers/prism-line-numbers.min.css",
  },
];

interface IAppProps {
  post: PostId;
}

export async function loader({ params }: LoaderFunctionArgs) {
  const query = gql`
    query Post {
      post(where: { slug: "${params.slug}" }) {
        id
        overview
        publishedAt
        slug
        title
        body {
          raw
        }
      }
    }
  `;

  const post = await hygraph.request(query);
  return json({ post });
}
const PostSlug = () => {
  const { post } = useLoaderData() as IAppProps;
  const contentRef = useRef(null);

  useEffect(() => {
    if (post.post.body.raw) {
      Prism.highlightAll();
    }
  }, [post.post.body.raw]);

  return (
    <div className='xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700 lg:px-48'>
      <header className='pt-6 xl:pb-6'>
        <div className='space-y-1 text-center'>
          <div className='space-y-10'>
            <p className='text-base font-medium leading-6 text-red-500'>
              {new Date(post.post.publishedAt).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <div>
          <h1
            className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl
            md:leading-14
            '
          >
            {post.post.title}
          </h1>
        </div>
      </header>
      <div className='divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0'>
        <div className='divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0'>
          <div
            ref={contentRef}
            className='prose max-w-none pt-10 pb-8 dark:prose-invert'
          >
            <RichText
              content={post.post.body.raw}
              renderers={{
                code_block: ({ children }) => {
                  return (
                    <pre className='line-numbers'>
                      <code className='language-javascript'>{children}</code>
                    </pre>
                  );
                },
                img: ({ src, altText, height, width }) => (
                  <img
                    src={src}
                    alt={altText}
                    width={width}
                    height={height}
                    className='rounded-lg'
                  />
                ),
                a: ({ children, openInNewTab, href, rel, ...rest }) => (
                  <a
                    href={href}
                    target={openInNewTab ? "_blank" : "_self"}
                    {...rest}
                    rel='noreferrer'
                    className='text-red-600'
                  >
                    {children}
                  </a>
                ),
              }}
            />
          </div>
        </div>
      </div>
      <ScrollToTop
        smooth
        color='#6f00ff'
        component={<ScrollToTopButton />}
        style={{ background: "none", boxShadow: "none" }}
      />
    </div>
  );
};

export default PostSlug;
