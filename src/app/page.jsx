import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Link href={`/map`}>Open Map</Link>
    </main>
  );
}
