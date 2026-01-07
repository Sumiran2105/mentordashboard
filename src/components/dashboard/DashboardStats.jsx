import { useSelector } from "react-redux";
import {
  Users,
  ClipboardList,
  HelpCircle,
  Video,
} from "lucide-react";

const DashboardStats = () => {
  const students = useSelector((s) => s.mentor.students ?? []);
  const sessions = useSelector((s) => s.mentor.sessions ?? []);

  const avgAssignment =
    students.length > 0
      ? Math.round(
          students.reduce(
            (sum, s) => sum + (s.assignmentScore ?? 0),
            0
          ) / students.length
        )
      : 0;

  const avgQuiz =
    students.length > 0
      ? Math.round(
          students.reduce(
            (sum, s) => sum + (s.quizScore ?? 0),
            0
          ) / students.length
        )
      : 0;

  const stats = [
    {
      label: "Students",
      value: students.length,
      icon: Users,
      color: "blue",
    },
    {
      label: "Avg Assignment",
      value: `${avgAssignment}%`,
      icon: ClipboardList,
      color: "green",
    },
    {
      label: "Avg Quiz",
      value: `${avgQuiz}%`,
      icon: HelpCircle,
      color: "purple",
    },
    {
      label: "Upcoming Sessions",
      value: sessions.length,
      icon: Video,
      color: "orange",
    },
  ];

  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">
        Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
};

/* =========================
   Stat Card
========================== */
const StatCard = ({ icon: Icon, label, value, color }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
    orange: "bg-orange-50 text-orange-600",
  };

  return (
    <div className="bg-white rounded-xl p-6 border flex items-center gap-4 hover:shadow-md transition">
      <div
        className={`p-3 rounded-lg ${colors[color]}`}
      >
        <Icon size={22} />
      </div>

      <div>
        <p className="text-sm text-gray-500">
          {label}
        </p>
        <p className="text-2xl font-semibold">
          {value}
        </p>
      </div>
    </div>
  );
};

export default DashboardStats;
