import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.svg" />
        <meta name="keywords" content="game news, gaming" />
        <meta
          name="description"
          content="Amazing stuffs about your favorite game"
        />
        <title>Gamecyclopedia</title>
      </Head>
      <nav className="w-full h-[60px] flex items-center sm:justify-evenly bg-amber-400 justify-around fixed top-0">
        <div className="logo">
          <Link href="/">
            <Image
              className="w-auto"
              src="/logo.png"
              placeholder="blur"
              blurDataURL="/logo.png"
              width={100}
              height={100}
              alt="logo"
              property="priority"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-8">
          <Link href="/" className="hover:bg-stale-300">Upcoming</Link>
          <Link href="/fame">Hall Of Fame</Link>
        </div>
      </nav>
    </>
  );
}
