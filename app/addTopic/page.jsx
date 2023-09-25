"use client";
import Input from "@/components/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = {
        title,
        description,
      };
      await fetch("http://localhost:3000/api/topics/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      }).then((response) => {
        if (response.status === 200) {
          router.push("/");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Topic Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Topic Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        type="submit"
        className="bg-black font-bold text-white py-3 px-6 w-fit rounded-md"
      >
        Add Topic
      </button>
    </form>
  );
}
