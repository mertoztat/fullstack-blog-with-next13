"use client";
import { useState } from "react";
import Input from "./Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function EditForm({ id, description, title }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      if (!res.ok) {
        throw new Error("Update Error");
      } else {
        toast.success("Edit Succesful!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        setTimeout(() => {
          router.refresh();
          router.push("/");
        }, 2500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Edit Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />

      <Input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Edit Description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />

      <button
        type="submit"
        className="bg-black font-bold text-white py-3 px-6 w-fit rounded-md"
      >
        Update Topic
      </button>
      <ToastContainer />
    </form>
  );
}
