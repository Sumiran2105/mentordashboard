import ReplyBox from "./ReplyBox";

const DiscussionCard = ({ discussion }) => {
  return (
    <div className="bg-white rounded-2xl border p-6 space-y-4">
      {/* Student Question */}
      <div>
        <p className="font-medium">
          {discussion.studentName}
        </p>
        <p className="text-xs text-blue-600">
          {discussion.videoTitle}
        </p>
        <p className="text-sm text-gray-700 mt-1">
          {discussion.message}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {new Date(
            discussion.createdAt
          ).toLocaleString()}
        </p>
      </div>

      {/* Replies */}
      {discussion.replies.length > 0 && (
        <div className="pl-4 border-l space-y-2">
          {discussion.replies.map((r) => (
            <div key={r.id}>
              <p className="text-sm font-medium text-blue-600">
                Mentor
              </p>
              <p className="text-sm text-gray-700">
                {r.text}
              </p>
              <p className="text-xs text-gray-400">
                {new Date(
                  r.createdAt
                ).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Reply Input */}
      <ReplyBox discussionId={discussion.id} />
    </div>
  );
};

export default DiscussionCard;
