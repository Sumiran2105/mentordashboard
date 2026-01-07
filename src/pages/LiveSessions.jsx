import { useState } from "react";
import { Plus } from "lucide-react";
import CreateSessionModal from "../components/liveSessions/CreateSessionModal";
import MySessionsList from "../components/liveSessions/MySessionsList";

const LiveSessions = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Created Sessions
  const [createdSessions, setCreatedSessions] = useState([
    {
      id: 101,
      title: "JavaScript Advanced Concepts",
      description: "Deep dive into closures, prototypes, and async programming",
      topic: "web-development",
      selectedDays: ["Monday", "Wednesday"],
      startTime: "10:00",
      endTime: "11:00",
      maxParticipants: "30",
      participants: 15,
      status: "scheduled",
    },
    {
      id: 102,
      title: "React Hooks Workshop",
      description: "Learn useState, useEffect, useContext, and custom hooks",
      topic: "web-development",
      selectedDays: ["Tuesday", "Thursday"],
      startTime: "14:00",
      endTime: "15:00",
      maxParticipants: "25",
      participants: 20,
      status: "scheduled",
    },
  ]);

  const handleCreateSession = (formData) => {
    const newSession = {
      id: Date.now(),
      ...formData,
      participants: 0,
      status: "scheduled",
    };
    setCreatedSessions([...createdSessions, newSession]);
    setShowCreateModal(false);
    alert("✅ Live session created successfully!");
  };

  const handleEditSession = (session) => {
    console.log("Edit session:", session);
    // TODO: Implement edit functionality
    alert("Edit functionality coming soon!");
  };

  const handleDeleteSession = (sessionId) => {
    if (window.confirm("Are you sure you want to delete this session?")) {
      setCreatedSessions(
        createdSessions.filter((session) => session.id !== sessionId)
      );
      alert("Session deleted successfully");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Create Button */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h1 className="text-2xl font-bold text-gray-900">My Live Sessions</h1>

        <button
          onClick={() => setShowCreateModal(true)}
          className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Plus size={18} />
          Create New Session
        </button>
      </div>

      {/* My Sessions */}
      <div>
        <MySessionsList
          sessions={createdSessions}
          onEdit={handleEditSession}
          onDelete={handleDeleteSession}
        />
      </div>

      {/* Create Session Modal */}
      <CreateSessionModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreateSession={handleCreateSession}
      />
    </div>
  );
};

export default LiveSessions;
