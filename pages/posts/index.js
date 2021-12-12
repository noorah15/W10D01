import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

function Posts({ posts }) {
  //console.log(posts);
  return (
    <ul>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </ul>
  );
}

export default Posts;
