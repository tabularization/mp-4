import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-start items-center gap-10 py-10 px-20 w-full bg-[#202124] shadow-none">
      <h1 className="text-white">💸</h1>
      <Link href="/" className="text-[#e8eaed] text-[1.5rem] font-[200] uppercase text-lg">
        Home
      </Link>
      <Link href="/about" className="text-[#e8eaed] text-[1.5rem] font-[200] uppercase text-lg">
        About
      </Link>
    </header>
  );
}
