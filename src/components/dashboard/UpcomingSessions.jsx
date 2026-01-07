import { useSelector } from "react-redux";

const UpcomingSessions = () => {
  const sessions = useSelector((s) => s.mentor.sessions ?? []);

  return (
    <section className="bg-white rounded-xl border p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">
          Upcoming Sessions
        </h3>
        <span className="text-xs text-blue-600 cursor-pointer">
          View all
        </span>
      </div>

      {/* Empty State */}
      {sessions.length === 0 ? (
        <div className="text-sm text-gray-500 text-center py-10">
          No upcoming sessions
        </div>
      ) : (
        <div className="space-y-4">
          {sessions.map((s) => (
            <SessionCard key={s.id} session={s} />
          ))}
        </div>
      )}
    </section>
  );
};

/* =========================
   Session Card
========================== */
const SessionCard = ({ session }) => {
  const isUrgent = session.daysLeft?.includes("1");

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border p-4 rounded-lg hover:bg-gray-50 transition">
      {/* Left */}
      <div className="min-w-0">
        <p
          className={`text-xs font-medium mb-1 ${
            isUrgent
              ? "text-red-600"
              : "text-gray-500"
          }`}
        >
          {session.daysLeft}
        </p>

        <p className="font-medium truncate">
          {session.title}
        </p>

        <p className="text-xs text-gray-500">
          {session.time}
        </p>
      </div>

      {/* Right */}
      <button className="self-start sm:self-center text-blue-600 text-sm font-medium hover:underline">
        Join →
      </button>
    </div>
  );
};

export default UpcomingSessions;
