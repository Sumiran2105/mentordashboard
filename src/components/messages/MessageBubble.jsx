const MessageBubble = ({ message }) => {
  const isMentor = message.sender === "mentor";

  return (
    <div
      className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl text-sm shadow
        ${
          isMentor
            ? "ml-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            : "bg-white"
        }`}
    >
      {message.text}
      <div className="text-[10px] opacity-70 mt-1 text-right">
        {message.time}
      </div>
    </div>
  );
};

export default MessageBubble;
