import { useRouter } from "next/router";

const blogs = {
  "first-post": {
    title: "My First Blog Post",
    content: "This is the content of the first post.",
  },
  "second-post": {
    title: "My Second Blog Post",
    content: "This is the content of the second post.",
  },
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const blog = blogs[slug];

  if (!blog) return <h1>Blog not found</h1>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}
