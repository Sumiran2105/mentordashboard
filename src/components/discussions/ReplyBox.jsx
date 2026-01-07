import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDiscussionReply } from "../../features/mentor/mentorSlice";

const ReplyBox = ({ discussionId }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleReply = () => {
    if (!text.trim()) return;

    dispatch(
      addDiscussionReply({
        discussionId,
        text,
      })
    );

    setText("");
  };

  return (
    <div className="flex gap-2 mt-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Reply as mentor..."
        className="flex-1 border rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <button
        onClick={handleReply}
        className="bg-blue-600 text-white px-4 rounded-full text-sm"
      >
        Reply
      </button>
    </div>
  );
};

export default ReplyBox;
