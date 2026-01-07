import { useState } from "react";
import { CheckCircle, Clock } from "lucide-react";

const WeeklyAssignments = ({ assignments, quizzes }) => {
  const [activeTab, setActiveTab] = useState("assignments");

  return (
    <div className="bg-white rounded-2xl border p-6 shadow-sm">
      {/* Tabs */}
      <div className="flex gap-1 mb-6 border-b">
        <button
          onClick={() => setActiveTab("assignments")}
          className={`px-4 py-3 font-semibold transition border-b-2 ${
            activeTab === "assignments"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-800"
          }`}
        >
          📝 Assignments
        </button>
        <button
          onClick={() => setActiveTab("quizzes")}
          className={`px-4 py-3 font-semibold transition border-b-2 ${
            activeTab === "quizzes"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-800"
          }`}
        >
          ❓ Quizzes
        </button>
      </div>

      {/* Assignments Tab */}
      {activeTab === "assignments" && (
        <div className="space-y-3">
          {assignments.map((a, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-lg border hover:border-blue-300 hover:bg-blue-50 transition"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    {a.week}
                  </span>
                  <p className="font-semibold text-gray-900">{a.title}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {a.status === "Submitted" ? "✓ Completed" : "⏳ Pending"}
                </p>
              </div>

              <div className="text-right">
                <p
                  className={`text-sm font-bold ${
                    a.score >= 80
                      ? "text-green-600"
                      : a.score >= 60
                      ? "text-yellow-600"
                      : a.score
                      ? "text-red-600"
                      : "text-gray-400"
                  }`}
                >
                  {a.score ? `${a.score}%` : "—"}
                </p>
                {a.status === "Submitted" && (
                  <CheckCircle size={18} className="text-green-600 mt-1" />
                )}
                {a.status === "Pending" && (
                  <Clock size={18} className="text-yellow-600 mt-1" />
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quizzes Tab */}
      {activeTab === "quizzes" && (
        <div className="space-y-4">
          {quizzes.map((q, i) => (
            <div key={i} className="p-4 rounded-lg border hover:border-purple-300 hover:bg-purple-50 transition">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-gray-900">{q.week}</p>
                <p className="text-sm font-bold text-purple-600">{q.score}%</p>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    q.score >= 85
                      ? "bg-green-500"
                      : q.score >= 70
                      ? "bg-blue-500"
                      : q.score >= 60
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${q.score}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {q.score >= 85
                  ? "🎉 Excellent!"
                  : q.score >= 70
                  ? "✅ Good"
                  : q.score >= 60
                  ? "⚠️ Acceptable"
                  : "❌ Need improvement"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeeklyAssignments;
