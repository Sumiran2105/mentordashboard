import { useSelector } from "react-redux";
import { Users, ClipboardList, HelpCircle } from "lucide-react";

const StudentStats = () => {
  const students = useSelector((s) => s.mentor.students || []);

  const avgAssignment =
    students.length > 0
      ? Math.round(
          students.reduce((a, s) => a + s.assignmentScore, 0) /
            students.length
        )
      : 0;

  const avgQuiz =
    students.length > 0
      ? Math.round(
          students.reduce((a, s) => a + s.quizScore, 0) /
            students.length
        )
      : 0;

  return (
    <div
      className="
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-4 sm:gap-6
      "
    >
      <StatCard
        icon={Users}
        label="Total Students"
        value={students.length}
        gradient="from-blue-500 to-blue-600"
      />
      <StatCard
        icon={ClipboardList}
        label="Avg Assignment Score"
        value={`${avgAssignment}%`}
        gradient="from-green-500 to-emerald-600"
      />
      <StatCard
        icon={HelpCircle}
        label="Avg Quiz Score"
        value={`${avgQuiz}%`}
        gradient="from-purple-500 to-indigo-600"
      />
    </div>
  );
};

const StatCard = ({ icon: Icon, label, value, gradient }) => (
  <div
    className={`
      rounded-2xl
      p-4 sm:p-6
      text-white
      bg-gradient-to-r ${gradient}
      shadow-md
      flex items-center justify-between
      min-h-[110px]
    `}
  >
    {/* Text */}
    <div>
      <p className="text-xs sm:text-sm opacity-90">{label}</p>
      <p className="text-2xl sm:text-3xl font-semibold mt-1">
        {value}
      </p>
    </div>

    {/* Icon */}
    <div className="bg-white/20 p-2 sm:p-3 rounded-xl">
      <Icon size={20} className="sm:w-6 sm:h-6" />
    </div>
  </div>
);

export default StudentStats;
