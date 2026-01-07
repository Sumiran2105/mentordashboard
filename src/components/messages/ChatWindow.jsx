import { useSelector } from "react-redux";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

const ChatWindow = () => {
  const { conversations, activeConversationId } = useSelector(
    (s) => s.mentor.messages
  );

  const activeChat = conversations.find(
    (c) => c.id === activeConversationId
  );

  if (!activeChat) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Select a conversation
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold">
        {activeChat.name}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-br from-blue-50 to-purple-50">
        {activeChat.messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
      </div>

      {/* Input */}
      <MessageInput conversationId={activeChat.id} />
    </div>
  );
};

export default ChatWindow;
