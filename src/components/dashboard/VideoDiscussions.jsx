import { useSelector } from "react-redux";

const MAX_RECENT = 5;

const VideoDiscussions = () => {
  const discussions = useSelector(
    (s) => s.mentor.conversations ?? []
  );

  const recentDiscussions = [...discussions]
    .sort((a, b) => {
      if (!a.createdAt || !b.createdAt) return 0;
      return new Date(b.createdAt) - new Date(a.createdAt);
    })
    .slice(0, MAX_RECENT);

  return (
    <section className="bg-white rounded-xl border p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">
          Recent Video Discussions
        </h3>
        <span className="text-xs text-blue-600 cursor-pointer">
          View all
        </span>
      </div>

      {/* Empty State */}
      {recentDiscussions.length === 0 ? (
        <div className="text-sm text-gray-500 text-center py-10">
          No discussions yet
        </div>
      ) : (
        <div className="space-y-4">
          {recentDiscussions.map((d) => (
            <DiscussionItem key={d.id} discussion={d} />
          ))}
        </div>
      )}
    </section>
  );
};

/* =========================
   Discussion Item
========================== */
const DiscussionItem = ({ discussion }) => {
  return (
    <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
      {/* Avatar */}
      <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold shrink-0">
        {discussion.name.charAt(0)}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <p className="font-medium text-sm truncate">
            {discussion.name}
          </p>
          <span className="text-xs text-gray-400">
            {discussion.time}
          </span>
        </div>

        {/* Video Context */}
        <p className="text-xs text-blue-600 mb-1 truncate">
          {discussion.videoTitle || "Course Video"}
        </p>

        {/* Message */}
        <p className="text-xs text-gray-600 truncate">
          {discussion.message}
        </p>

        {/* Action */}
        <button className="text-xs text-blue-600 mt-1 hover:underline">
          Reply →
        </button>
      </div>
    </div>
  );
};

export default VideoDiscussions;
