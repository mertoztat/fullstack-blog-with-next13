import Input from "./Input";

export default function EditForm() {
  return (
    <form className="flex flex-col gap-3">
      <Input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Edit Title"
        value=""
      />

      <Input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Edit Description"
        value=""
      />

      <button
        type="submit"
        className="bg-black font-bold text-white py-3 px-6 w-fit rounded-md"
      >
        Update Topic
      </button>
    </form>
  );
}
