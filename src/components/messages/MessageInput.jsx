import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../features/mentor/mentorSlice";

const MessageInput = ({ conversationId }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    dispatch(sendMessage({ conversationId, text }));
    setText("");
  };

  return (
    <div className="p-4 bg-white border-t flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleSend}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 rounded-full text-sm"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
