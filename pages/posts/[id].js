export async function getStaticPaths() {
  // ...

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  //console.log(posts);

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return { props: { post } };
}

function Post({ post }) {
  return (
    <ul>
      <li>{post.title}</li>
    </ul>
  );
}

export default Post;
