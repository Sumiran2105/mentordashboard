const EventModal = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-2">
          {event.title}
        </h2>

        <span
          className={`inline-block text-xs px-2 py-1 rounded-full mb-4
            ${
              event.type === "class"
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
        >
          {event.type.toUpperCase()}
        </span>

        <div className="space-y-2 text-sm text-gray-600">
          {event.startTime && (
            <p>
              ⏰ {event.startTime} – {event.endTime}
            </p>
          )}
          <p>📅 {event.date}</p>

          {event.type === "assignment" && (
            <p>📝 Due today</p>
          )}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button className="px-4 py-2 text-sm border rounded-lg">
            View Details
          </button>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg">
            Join / Open
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
