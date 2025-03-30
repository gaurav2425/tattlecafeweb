// pages/index.js
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";

const blogs = [
  {
    slug: "first-post",
    title: "UX review presentations",
    date: "20 Jan 2022",
    author: "Olivia Rhye",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tags: ["Design", "Research", "Presentation"],
    image: "/pexels-tara-winstead-7666088.jpg",
  },
  {
    slug: "second-post",
    title: "The Future of Web Design",
    date: "10 Feb 2022",
    author: "John Doe",
    description: "Exploring the next trends in web design and user experience.",
    tags: ["Web", "Trends", "Design"],
    image: "/blog-2.jpg",
  },
  {
    slug: "second-post",
    title: "The Future of Web Design",
    date: "10 Feb 2022",
    author: "John Doe",
    description: "Exploring the next trends in web design and user experience.",
    tags: ["Web", "Trends", "Design"],
    image: "/blog-2.jpg",
  },
  {
    slug: "second-post",
    title: "The Future of Web Design",
    date: "10 Feb 2022",
    author: "John Doe",
    description: "Exploring the next trends in web design and user experience.",
    tags: ["Web", "Trends", "Design"],
    image: "/blog-2.jpg",
  },
  {
    slug: "second-post",
    title: "The Future of Web Design",
    date: "10 Feb 2022",
    author: "John Doe",
    description: "Exploring the next trends in web design and user experience.",
    tags: ["Web", "Trends", "Design"],
    image: "/blog-2.jpg",
  },
  {
    slug: "second-post",
    title: "The Future of Web Design",
    date: "10 Feb 2022",
    author: "John Doe",
    description: "Exploring the next trends in web design and user experience.",
    tags: ["Web", "Trends", "Design"],
    image: "/blog-2.jpg",
  },
];

export default function page() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h2>The Blog</h2>
        <h1>Writings from our team</h1>
        <p>
          The latest industry news, interviews, technologies, and resources.
        </p>
      </header>

      <section className={styles.featured}>
        <Image
          src={blogs[0].image}
          width={800}
          height={400}
          alt={blogs[0].title}
        />
        <div className={styles.featuredContent}>
          <p>
            {blogs[0].author} • {blogs[0].date}
          </p>
          <h2>
            <Link href={`/blog/${blogs[0].slug}`}>{blogs[0].title}</Link>
          </h2>
          <p>{blogs[0].description}</p>
          <div className={styles.tags}>
            {blogs[0].tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.blogGrid}>
        {blogs.slice(1).map((blog) => (
          <div key={blog.slug} className={styles.blogCard}>
            <Image src={blog.image} width={400} height={250} alt={blog.title} />
            <p>
              {blog.author} • {blog.date}
            </p>
            <h3>
              <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
            </h3>
            <p>{blog.description}</p>
            <div className={styles.tags}>
              {blog.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
