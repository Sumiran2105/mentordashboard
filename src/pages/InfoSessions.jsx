import { useSelector } from "react-redux";
import VideoCard from "../components/videos/VideoCard"; // ✅ ADD THIS

const InfoSessions = () => {
  const videos = useSelector(
    (s) => s.mentor.videos || []
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-6">
        <h1 className="text-2xl font-semibold">
          Course Videos
        </h1>
        <p className="text-sm opacity-90">
          All your uploaded sessions & learning content
        </p>
      </div>

      {/* Video List */}
      {videos.length === 0 ? (
        <div className="bg-white rounded-xl p-6 text-center text-gray-500">
          No videos uploaded yet
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      )}
    </div>
  );
};

export default InfoSessions;
