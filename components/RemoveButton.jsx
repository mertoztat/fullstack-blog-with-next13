"use client";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RemoveBtn({ id }) {
  const router = useRouter();

  const deletePost = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.error("Deleted!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000, // 2 saniye sonra otomatik olarak kapanır
        });
        setTimeout(() => {
          router.refresh();
        }, 2500);
      }
    }
  };

  return (
    <button onClick={deletePost} className="text-red-400">
      <HiOutlineTrash size={24} />
      <ToastContainer />
    </button>
  );
}
