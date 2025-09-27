import Link from "next/link";

export default function NavVerticalBar() {
  return (
    <div className="flex flex-col gap-2 h-fit bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 rounded-4xl px-2 py-2 w-fit text-white my-auto">
      <Link href="/">
        <i className="fa-solid fa-house active:text-orange-500" />
      </Link>
      <Link href="/aboutme">
        <i className="fa-solid fa-address-card active:text-orange-500" />
      </Link>
      <Link href="/eduexp">
        <i className="fa-solid fa-folder active:text-orange-500" />
      </Link>
      <Link href="/spec">
        <i className="fa-solid fa-sheet-plastic active:text-orange-500" />
      </Link>
      <Link href="/projects">
        <i className="fa-solid fa-suitcase active:text-orange-500" />
      </Link>
      <Link href="/skills">
        <i className="fa-solid fa-terminal active:text-orange-500" />
      </Link>
      <Link href="/contactme">
        <i className="fa-solid fa-comment active:text-orange-500" />
      </Link>
    </div>
  );
}