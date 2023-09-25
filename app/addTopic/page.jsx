import Input from "@/components/Input";

export default function AddTopic() {
  return (
    <form className="flex flex-col gap-3">
      <Input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Topic Title"
        value=""
      />

      <Input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Topic Description"
        value=""
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
