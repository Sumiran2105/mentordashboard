import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Calendar,
  Video,
  User,
  Shield,
  X,
  Bell,
  MessagesSquare,
} from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  const mentor = useSelector((state) => state.mentor.mentorInfo);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-50
          top-0 left-0 h-screen w-72
          bg-gradient-to-b from-blue-600 to-purple-600
          text-white
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          flex flex-col
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <h1 className="text-xl font-bold">DV SKILLHUB</h1>
          <button
            className="md:hidden"
            onClick={onClose}
          >
            <X size={22} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-4 pb-6">
          {/* Mentor */}
          <div className="text-center mb-8">
            <img
              src={mentor.avatar}
              alt="mentor"
              className="w-20 h-20 rounded-full mx-auto border-4 border-white/20"
            />
            <h3 className="mt-3 font-semibold">
              {mentor.name}
            </h3>
            <p className="text-sm text-white/70">
              {mentor.role}
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-2 text-sm">
            <NavItem to="/" icon={LayoutDashboard} label="Dashboard" onClick={onClose} />
            <NavItem to="/students" icon={Users} label="Students" onClick={onClose} />
            <NavItem to="/messages" icon={Video} label="Live Sessions" badge="2" onClick={onClose} />
            <NavItem to="/discussions" icon={MessagesSquare} label="Discussions" onClick={onClose} />
            <NavItem to="/notifications" icon={Bell} label="Notifications" onClick={onClose} />
            <NavItem to="/calendar" icon={Calendar} label="Calendar" onClick={onClose} />
            <NavItem to="/info-sessions" icon={MessageSquare} label="Info Sessions" onClick={onClose} />

            <div className="mt-6 text-xs uppercase text-white/50">
              Account
            </div>

            <NavItem to="/settings/profile" icon={User} label="Personal Info" onClick={onClose} />
            <NavItem to="/settings/security" icon={Shield} label="Logout" onClick={onClose} />
          </nav>
        </div>
      </aside>
    </>
  );
};

const NavItem = ({ to, icon: Icon, label, badge, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-lg transition
      ${
        isActive
          ? "bg-white/20 font-medium"
          : "hover:bg-white/10"
      }`
    }
  >
    <Icon size={18} />
    <span className="flex-1">{label}</span>
    {badge && (
      <span className="bg-yellow-400 text-black text-xs px-2 rounded-full">
        {badge}
      </span>
    )}
  </NavLink>
);

export default Sidebar;
