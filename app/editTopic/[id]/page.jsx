import EditForm from "@/components/EditForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { description, title } = topic;

  return (
    <div>
      <EditForm id={id} title={title} description={description} />
    </div>
  );
}
