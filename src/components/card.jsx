import Button2 from "./button2";

function Card({ title, desc, status, onEdit, onDelete }) {
  // Map status ke warna
  const statusColors = {
    "To do": "bg-red-100 text-red-600",
    "In Progress": "bg-yellow-100 text-yellow-700",
    "Done": "bg-green-100 text-green-600",
  };

  return (
    <div
      className="
        flex flex-col gap-4 bg-white shadow-lg rounded-lg p-4 text-start
        transition-transform duration-300 ease-in-out
        hover:scale-105 hover:shadow-xl
      "
    >
      <div className="flex flex-col gap-0.5">
        <h3 className="font-medium text-lg">{title}</h3>
        <div className="flex flex-col gap-3">
          <p className="text-sm text-gray-600">{desc}</p>
          {/* Badge Status */}
          <p
            className={`text-sm px-3 py-1 rounded-full font-medium w-fit ${
              statusColors[status] || "bg-gray-100 text-gray-600"
            }`}
          >
            {status}
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <Button2 variant="warning" onClick={onEdit}>
          Edit
        </Button2>
        <Button2 variant="danger" onClick={onDelete}>
          Hapus
        </Button2>
      </div>
    </div>
  );
}

export default Card;
