import { Link, MetaFunction, Outlet, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPosts } from "~/post.server";
import { Hero } from "~/components/Hero";

type PostListProps = {
  slug: string;
  title: string;
  excerpt: string;
};

export const meta: MetaFunction = () => {
  return { title: "Blog | tibudiyanto.club" };
};

export const loader: LoaderFunction = async () => {
  return getPosts();
};

const PostList = ({ slug, title, excerpt }: PostListProps) => {
  return (
    <div className="mb-2">
      <h2 className="text-md uppercase font-bold border-b border-solid border-black mb-1">
        <Link to={slug} className="text-lg uppercase no-underline">
          {title}
        </Link>
      </h2>
      <main className="prose" dangerouslySetInnerHTML={{ __html: excerpt }} />
      <Link className="italic" to={slug}>
        more...
      </Link>
    </div>
  );
};

export default function PostIndex() {
  const posts = useLoaderData<PostListProps[]>();

  return (
    <div>
      <Hero className="mb-2">
        <h1 className="border-0 font-normal text-center">Blog Posts</h1>
        <p className="text-sm text-center">All of my thoughts and ramblings</p>
      </Hero>

      {posts.map(({ slug, title, excerpt }) => {
        return (
          <PostList key={slug} slug={slug} title={title} excerpt={excerpt} />
        );
      })}
    </div>
  );
}
