import Link from "next/link";

function Navbar() {
  return (
    // <nav className='absolute top-5 left-0 right-0 inline-block space-x-4 rounded-full border-2 border-solid border-zinc-200 p-4 uppercase'>
    <nav className="absolute top-5 left-1/2 -translate-x-1/2  border-2 border-solid border-black rounded-full uppercase px-4 py-2">
      <ul className="flex gap-4">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#work">Work</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
