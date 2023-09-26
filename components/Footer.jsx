import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center bg-slate-800 px-8 py-3 rounded-lg text-white w-full">
      <div className="flex justify-center items-center w-full gap-12">
        <Link href={`https://github.com/mertoztat`}>
          <FaGithub size="25" />
        </Link>
        <Link href={`https://www.linkedin.com/in/mertoztat`}>
          <FaLinkedin size="25" />
        </Link>
        <Link href={`https://twitter.com/mertoztat`}>
          <FaTwitter size="25" />
        </Link>
      </div>
    </footer>
  );
}
