import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <h1>Hello Next Js</h1>
    <a href="/about/profile">Go to profile</a>
    <Link href="/about/profile">Go to profile</Link>
   </div>
  );
}
