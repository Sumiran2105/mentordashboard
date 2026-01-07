import ConversationList from "../components/messages/ConversationList";
import ChatWindow from "../components/messages/ChatWindow";

const Messages = () => {
  return (
    <div className="h-[80vh] rounded-2xl overflow-hidden border bg-gradient-to-br from-blue-50 to-purple-50 grid grid-cols-1 md:grid-cols-3">
      {/* Left */}
      <ConversationList />

      {/* Right */}
      <div className="md:col-span-2 bg-white/80 backdrop-blur-sm">
        <ChatWindow />
      </div>
    </div>
  );
};

export default Messages;
