import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveButton";

async function getData() {
  const res = await fetch("http://localhost:3000/api/topics");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const TopicsList = async () => {
  const data = await getData();

  return (
    <div className=" flex-col p-4 border border-slate-300 my-3 flex justify-between gap-5">
      {data?.topics?.map((item) => (
        <>
          <div className=" w-full flex justify-between">
            <div className="mt-2  w-full">
              <h2 className="font-bold text-2xl">{item.title}</h2>
              <div>{item.description}</div>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <RemoveBtn />
              <Link href={"/editTopic"}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
