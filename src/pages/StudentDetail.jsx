import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowLeft, Send } from "lucide-react";
import { useState } from "react";

const StudentDetail = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [toast, setToast] = useState({ show: false, message: "" });

  const students = useSelector(
    (state) => state.mentor?.students || []
  );

  const student = students.find(
    (s) => s.id === studentId
  );

  const handleSendMessage = () => {
    setToast({ show: true, message: `Message sent successfully to ${student.parentName}` });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  if (!student) {
    return (
      <div className="bg-white rounded-xl p-6 text-center text-gray-500">
        Student not found
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Toast */}
      {toast.show && (
        <div aria-live="polite" className="fixed right-4 bottom-6 z-50">
          <div className="bg-green-600 text-white px-4 py-2 rounded shadow">
            {toast.message}
          </div>
        </div>
      )}

      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"
      >
        <ArrowLeft size={16} />
        Back to Students
      </button>

      {/* ======================
          STUDENT BASIC INFO
      ====================== */}
      <div className="bg-white rounded-xl border p-6 flex justify-between items-start">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">
            {student.name}
          </h2>
          <p className="text-sm text-gray-500">
            {student.email} • {student.phone}
          </p>

          <div className="mt-4 text-sm">
            <p>
              <span className="font-medium">Parent:</span>{" "}
              {student.parentName}
            </p>
            <p className="text-gray-500">
              {student.parentPhone}
            </p>
          </div>
        </div>

        <button
          onClick={handleSendMessage}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium whitespace-nowrap ml-4"
        >
          <Send size={16} />
          Send Message
        </button>
      </div>

      {/* ======================
          PERFORMANCE STATS
      ====================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border p-6">
          <p className="text-sm text-gray-500">
            Assignment Score
          </p>
          <p className="text-2xl font-semibold text-green-600">
            {student.assignmentScore}%
          </p>
        </div>

        <div className="bg-white rounded-xl border p-6">
          <p className="text-sm text-gray-500">
            Quiz Score
          </p>
          <p className="text-2xl font-semibold text-blue-600">
            {student.quizScore}%
          </p>
        </div>
      </div>

      {/* ======================
          WEEKLY ASSIGNMENTS
      ====================== */}
      <div className="bg-white rounded-xl border p-6">
        <h3 className="font-semibold mb-4">
          Weekly Assignments
        </h3>

        <div className="space-y-3">
          {student.weeklyAssignments.map((a, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border rounded-lg p-3"
            >
              <div>
                <p className="font-medium text-sm">
                  {a.week} – {a.title}
                </p>
                <p className="text-xs text-gray-500">
                  Status: {a.status}
                </p>
              </div>

              <span className="text-sm font-semibold">
                {a.score !== null ? `${a.score}%` : "—"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ======================
          WEEKLY QUIZZES
      ====================== */}
      <div className="bg-white rounded-xl border p-6">
        <h3 className="font-semibold mb-4">
          Weekly Quizzes
        </h3>

        <div className="space-y-3">
          {student.weeklyQuizzes.map((q, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border rounded-lg p-3"
            >
              <p className="font-medium text-sm">
                {q.week}
              </p>

              <span className="text-sm font-semibold">
                {q.score > 0 ? `${q.score}%` : "—"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
