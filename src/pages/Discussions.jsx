import { useSelector } from "react-redux";
import DiscussionCard from "../components/discussions/DiscussionCard";

const Discussions = () => {
  const discussions = useSelector(
    (s) => s.mentor.discussions || []
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-6">
        <h1 className="text-2xl font-semibold">
          Video Discussions
        </h1>
        <p className="text-sm opacity-90">
          Student questions & mentor replies
        </p>
      </div>

      {/* List */}
      {discussions.length === 0 ? (
        <div className="bg-white rounded-xl p-6 text-gray-500 text-center">
          No discussions yet
        </div>
      ) : (
        <div className="space-y-4">
          {discussions.map((d) => (
            <DiscussionCard key={d.id} discussion={d} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Discussions;
