import { PlayCircle, Clock } from "lucide-react";

const VideoCard = ({ video }) => {
  return (
    <div className="bg-white rounded-xl border p-5 hover:shadow-md transition">
      <div className="flex justify-between items-start">
        {/* Left */}
        <div>
          <p className="text-xs text-blue-600">
            {video.module}
          </p>
          <h3 className="font-semibold mt-1">
            {video.title}
          </h3>
        </div>

        {/* Status */}
        <span
          className={`text-xs px-3 py-1 rounded-full
            ${
              video.status === "Published"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
        >
          {video.status}
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Clock size={14} />
          {video.duration}
        </div>

        <button className="flex items-center gap-1 text-blue-600 hover:underline">
          <PlayCircle size={16} />
          View
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
