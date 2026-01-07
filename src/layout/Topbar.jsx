import { Menu, Bell, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Topbar = ({ title, onMenuClick }) => {
  const navigate = useNavigate();

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden"
          onClick={onMenuClick}
        >
          <Menu size={22} />
        </button>
        <h2 className="text-lg font-semibold">
          {title}
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={() => navigate("/messages")}>
          <MessageSquare size={18} />
        </button>
        <button onClick={() => navigate("/notifications")}>
          <Bell size={18} />
        </button>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </header>
  );
};

export default Topbar;
