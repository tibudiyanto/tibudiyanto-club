import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";

export type PostMarkdownAttributes = {
  title: string;
  date: string;
};
function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title && attributes?.date;
}

// relative to the server output not the source!
const postsPath = path.join(__dirname, "../..", "posts");

export async function getPosts() {
  const dir = await fs.readdir(postsPath);
  return Promise.all(
    dir
      .filter((filename) => {
        return filename !== "index.tsx";
      })
      .map(async (filename) => {
        const file = await fs.readFile(path.join(postsPath, filename));
        const { attributes, body } = parseFrontMatter(file.toString());

        invariant(isValidPostAttributes(attributes));
        const excerpt = marked(body.slice(0, 500) + " ...");
        return {
          slug: filename.replace(/\.md$/, ""),
          title: attributes.title,
          date: attributes.date,
          excerpt,
        };
      })
  );
}

export async function getPost(slug: string) {
  const filepath = path.join(postsPath, slug + ".md");
  const file = await fs.readFile(filepath);
  const { attributes, body } = parseFrontMatter(file.toString());
  invariant(
    isValidPostAttributes(attributes),
    `Post ${filepath} is missing attributes`
  );
  const html = marked(body);
  return {
    slug,
    body: html,
    title: attributes.title,
    date: attributes.date,
  };
}
