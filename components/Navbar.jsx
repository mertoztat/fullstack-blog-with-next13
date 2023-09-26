import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 rounded-lg">
      <Link className="text-white font-bold" href={"/"}>
        CRUD APP
      </Link>
      <Link
        className="bg-white text-black py-3 px-6 w-fit rounded-md"
        href={"/addTopic"}
      >
        Add Topic
      </Link>
    </nav>
  );
};
