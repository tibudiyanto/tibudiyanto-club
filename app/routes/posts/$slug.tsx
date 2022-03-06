import { Link, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { getPost } from "~/post.server";
import { Hero } from "~/components/Hero";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export default function Post() {
  const post = useLoaderData();

  return (
    <div>
      <Hero>
        <h1 className="no-underline border-0">{post.title}</h1>
        <h2 className="font-normal no-underline border-0">{post.date}</h2>
      </Hero>

      <main className="prose" dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
}
