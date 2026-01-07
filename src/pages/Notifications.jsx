import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  UserPlus,
  MessageCircle,
  Video,
} from "lucide-react";
import { markNotificationRead } from "../features/mentor/mentorSlice";

const Notifications = () => {
  const notifications = useSelector(
    (s) => s.mentor.notifications || []
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-6">
        <h1 className="text-2xl font-semibold">
          Notifications
        </h1>
        <p className="text-sm opacity-90">
          Stay updated with student and course activity
        </p>
      </div>

      {/* List */}
      <div className="bg-white rounded-2xl border divide-y">
        {notifications.length === 0 ? (
          <p className="p-6 text-sm text-gray-500 text-center">
            No notifications
          </p>
        ) : (
          notifications.map((n) => (
            <NotificationItem key={n.id} notif={n} />
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;

/* =========================
   Notification Item
========================== */
const NotificationItem = ({ notif }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(markNotificationRead(notif.id));
    navigate(notif.link);
  };

  const iconMap = {
    student: <UserPlus className="text-blue-600" />,
    discussion: (
      <MessageCircle className="text-purple-600" />
    ),
    video: <Video className="text-green-600" />,
  };

  return (
    <div
      onClick={handleClick}
      className={`flex gap-4 p-5 cursor-pointer transition
        ${
          notif.read
            ? "bg-white"
            : "bg-blue-50 hover:bg-blue-100"
        }`}
    >
      {/* Icon */}
      <div className="p-3 bg-white rounded-full border">
        {iconMap[notif.type]}
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="font-medium text-sm">
          {notif.title}
        </p>
        <p className="text-xs text-gray-600">
          {notif.message}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {new Date(
            notif.createdAt
          ).toLocaleString()}
        </p>
      </div>

      {!notif.read && (
        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
      )}
    </div>
  );
};
