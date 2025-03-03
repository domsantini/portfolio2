import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';


function ContactButton({ label, href }) {
  return (
    <Link href={href} target='_blank' className="group uppercase sm:text-lg md:text-xl lg:text-2xl flex cursor-pointer">
      <span className="px-4 py-1 border-2 border-solid border-zinc-700 rounded-full">
        {label}
      </span>
      <span className="p-2 border-2 border-solid border-zinc-700 rounded-full grid place-content-center ">
        <FaArrowRight className="group-hover:rotate-[-30deg] transition-all ease-in-out duration-[500ms]" />
      </span>
    </Link>
  );
}

export default ContactButton;