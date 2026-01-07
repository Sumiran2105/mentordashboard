import { Edit2, Trash2, Users, Calendar, Clock } from "lucide-react";

const MySessionsList = ({ sessions, onEdit, onDelete }) => {
  if (sessions.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
        <Calendar size={48} className="mx-auto text-gray-300 mb-3" />
        <p className="text-gray-600 font-medium">No sessions created yet</p>
        <p className="text-gray-400 text-sm">Create your first live session to get started</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sessions.map((session) => (
        <div
          key={session.id}
          className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start justify-between gap-4">
            {/* Session Info */}
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-lg">{session.title}</h3>
              {session.description && (
                <p className="text-gray-600 text-sm mt-1">{session.description}</p>
              )}

              {/* Details */}
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar size={16} className="text-blue-600" />
                  <span>{session.selectedDays.join(", ")}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} className="text-blue-600" />
                  <span>{session.startTime} - {session.endTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} className="text-blue-600" />
                  <span>{session.participants || 0} participants</span>
                </div>
              </div>

              {/* Topic Badge */}
              {session.topic && (
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {session.topic}
                  </span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => onEdit(session)}
                className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors"
                title="Edit session"
              >
                <Edit2 size={18} />
              </button>
              <button
                onClick={() => onDelete(session.id)}
                className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                title="Delete session"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MySessionsList;
