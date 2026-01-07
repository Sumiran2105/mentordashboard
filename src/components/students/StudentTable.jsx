import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectStudents } from "../../features/mentor/mentorSelectors";

const StudentTable = ({ search = "" }) => {
  const students = useSelector(selectStudents);

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredStudents.length === 0) {
    return (
      <div className="bg-white rounded-xl border p-8 text-center text-gray-500">
        No students found
      </div>
    );
  }

  return (
    <>
      {/* =======================
          MOBILE CARDS
      ======================== */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {filteredStudents.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-xl border p-4 space-y-4"
          >
            {/* Header */}
            <div>
              <p className="font-semibold">{s.name}</p>
              <p className="text-xs text-gray-500">{s.email}</p>
              <p className="text-xs text-gray-500">{s.phone}</p>
            </div>

            {/* Parent */}
            <div className="text-xs">
              <p className="font-medium">Parent</p>
              <p className="text-gray-600">
                {s.parentName} · {s.parentPhone}
              </p>
            </div>

            {/* Scores */}
            <div className="space-y-2">
              <ProgressBar score={s.assignmentScore} label="Assignment" />
              <ProgressBar score={s.quizScore} label="Quiz" />
            </div>

            {/* Status + Actions */}
            <div className="flex items-center justify-between">
              <StatusBadge
                assignment={s.assignmentScore}
                quiz={s.quizScore}
              />

              <div className="flex gap-4 text-xs">
                <Link
                  to={`/students/${s.id}`}
                  className="text-blue-600 font-medium"
                >
                  View
                </Link>
                <button className="text-gray-500">
                  Message
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* =======================
          DESKTOP TABLE
      ======================== */}
      <div className="hidden md:block bg-white/90 backdrop-blur rounded-2xl border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Parent</th>
              <th className="p-4">Assignment</th>
              <th className="p-4">Quiz</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((s) => (
              <tr
                key={s.id}
                className="border-t hover:bg-gray-50 group transition"
              >
                <td className="p-4 font-medium">{s.name}</td>
                <td className="p-4">{s.email}</td>
                <td className="p-4">{s.phone}</td>
                <td className="p-4">
                  {s.parentName}
                  <br />
                  <span className="text-xs text-gray-500">
                    {s.parentPhone}
                  </span>
                </td>
                <td className="p-4">
                  <ProgressBar score={s.assignmentScore} />
                </td>
                <td className="p-4">
                  <ProgressBar score={s.quizScore} />
                </td>
                <td className="p-4">
                  <StatusBadge
                    assignment={s.assignmentScore}
                    quiz={s.quizScore}
                  />
                </td>
                <td className="p-4 text-center">
                  <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                    <Link
                      to={`/students/${s.id}`}
                      className="text-blue-600 text-xs font-medium hover:underline"
                    >
                      View
                    </Link>
                    <button className="text-gray-500 text-xs hover:text-black">
                      Message
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

/* =========================
   Progress Bar
========================== */
const ProgressBar = ({ score, label }) => {
  const color =
    score >= 85
      ? "bg-green-500"
      : score >= 60
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="w-full">
      {label && (
        <p className="text-xs font-medium mb-1">
          {label} · {score}%
        </p>
      )}
      {!label && (
        <div className="text-xs font-medium mb-1">
          {score}%
        </div>
      )}
      <div className="w-full h-2 bg-gray-200 rounded">
        <div
          className={`h-2 rounded ${color}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
};

/* =========================
   Status Badge
========================== */
const StatusBadge = ({ assignment, quiz }) => {
  const isAtRisk = assignment < 60 || quiz < 60;

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${
        isAtRisk
          ? "bg-red-100 text-red-700"
          : "bg-green-100 text-green-700"
      }`}
    >
      {isAtRisk ? "Needs Attention" : "On Track"}
    </span>
  );
};

export default StudentTable;
