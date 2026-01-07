import { useDispatch, useSelector } from "react-redux";
import { selectConversation } from "../../features/mentor/mentorSlice";

const ConversationList = () => {
  const dispatch = useDispatch();
  const { conversations, activeConversationId } = useSelector(
    (s) => s.mentor.messages
  );

  return (
    <div className="bg-gradient-to-b from-blue-600 to-purple-600 text-white overflow-y-auto">
      <h3 className="p-5 font-semibold text-lg border-b border-white/20">
        Messages
      </h3>

      {conversations.map((c) => {
        const isActive = activeConversationId === c.id;

        return (
          <div
            key={c.id}
            onClick={() => dispatch(selectConversation(c.id))}
            className={`px-5 py-4 cursor-pointer transition
              ${
                isActive
                  ? "bg-white/20"
                  : "hover:bg-white/10"
              }`}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium text-sm truncate">
                {c.name}
              </p>

              {c.unreadCount > 0 && (
                <span className="bg-yellow-400 text-black text-xs px-2 rounded-full">
                  {c.unreadCount}
                </span>
              )}
            </div>

            <p className="text-xs text-white/80 truncate">
              {c.lastMessage}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ConversationList;
