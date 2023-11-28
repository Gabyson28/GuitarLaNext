import Layout from "@/components/layout";
import Post from "@/components/post";
import styles from "../styles/blog.module.css"

export default function Blog({ posts }) {
  return (
    <Layout title={"Blog"} description="Blog">
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div className={styles.grid}>
          {posts?.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.api_url}/posts?populate=imagen`);
  const { data: posts } = await response.json();

  return {
    props: {
      posts,
    },
  };
}
