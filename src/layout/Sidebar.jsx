import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Calendar,
  Video,
  User,
  Shield,
  Bell,
  MessagesSquare,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const Sidebar = ({ isOpen, onClose }) => {
  const mentor = useSelector((state) => state.mentor.mentorInfo);
  const [isMobile, setIsMobile] = useState(false);

  /* ======================
     Auto detect mobile
  ======================= */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Overlay (mobile only) */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -320 }}
        animate={{
          x: isMobile ? (isOpen ? 0 : -320) : 0,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="
          fixed md:static z-50
          top-4 left-4 bottom-4
          w-72
          bg-white rounded-3xl shadow-xl
          flex flex-col
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h1 className="text-lg font-bold text-blue-600">
            DV SKILLHUB
          </h1>

          {isMobile && (
            <button onClick={onClose}>
              <X size={22} />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          {/* Mentor */}
          <div className="text-center mb-8">
            <img
              src={mentor.avatar}
              alt="mentor"
              className="w-20 h-20 rounded-full mx-auto border"
            />
            <h3 className="mt-3 font-semibold">
              {mentor.name}
            </h3>
            <p className="text-sm text-gray-500">
              {mentor.role}
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            <NavItem to="/" icon={LayoutDashboard} label="Dashboard" onClick={onClose} />
            <NavItem to="/students" icon={Users} label="Students" onClick={onClose} />
            <NavItem to="/messages" icon={Video} label="Live Sessions" badge="2" onClick={onClose} />
            <NavItem to="/discussions" icon={MessagesSquare} label="Discussions" onClick={onClose} />
            <NavItem to="/notifications" icon={Bell} label="Notifications" onClick={onClose} />
            <NavItem to="/calendar" icon={Calendar} label="Calendar" onClick={onClose} />
            <NavItem to="/info-sessions" icon={MessageSquare} label="Info Sessions" onClick={onClose} />

            <p className="mt-6 mb-2 text-xs uppercase text-gray-400 px-3">
              Account
            </p>

            <NavItem to="/settings/profile" icon={User} label="Profile" onClick={onClose} />
            <NavItem to="/settings/security" icon={Shield} label="Logout" danger onClick={onClose} />
          </nav>
        </div>

        {/* Bottom Illustration */}
        
      </motion.aside>
    </>
  );
};

/* =========================
   Nav Item
========================== */
const NavItem = ({
  to,
  icon: Icon,
  label,
  badge,
  danger,
  onClick,
}) => (
  <NavLink to={to} onClick={onClick}>
    {({ isActive }) => (
      <motion.div
        whileHover={{ x: 4 }}
        className={`
          relative flex items-center gap-3
          px-4 py-3 rounded-xl
          transition
          ${
            isActive
              ? "bg-blue-50 text-blue-600"
              : danger
              ? "text-red-500 hover:bg-red-50"
              : "text-gray-600 hover:bg-gray-100"
          }
        `}
      >
        {/* Active Indicator */}
        {isActive && (
          <span className="absolute left-0 top-2 bottom-2 w-1 bg-blue-600 rounded-r" />
        )}

        <Icon size={20} />
        <span className="text-sm font-medium flex-1">{label}</span>

        {badge && (
          <span className="bg-yellow-400 text-black text-xs px-2 rounded-full">
            {badge}
          </span>
        )}
      </motion.div>
    )}
  </NavLink>
);

export default Sidebar;
