import Link from "next/link";

export default function Nav() {
  return (
    <>
      <ul>
        <Link href={`/`}>
          <li>Home</li>
        </Link>
        <Link href={`/posts`}>
          <li>Posts</li>
        </Link>
        <Link href={`/contact`}>
          <li>Contact</li>
        </Link>
        <Link href={`/about`}>
          <li>About</li>
        </Link>
      </ul>
    </>
  );
}
