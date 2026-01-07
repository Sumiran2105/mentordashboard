import { useState } from "react";
import { X, Plus, Clock, Users, Link as LinkIcon, Calendar } from "lucide-react";

const CreateSessionModal = ({ isOpen, onClose, onCreateSession }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    meetLink: "",
    sessionDate: "",
    maxParticipants: "30",
    selectedDays: [],
    startTime: "10:00",
    endTime: "11:00",
  });

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const handleDayToggle = (day) => {
    setFormData((prev) => ({
      ...prev,
      selectedDays: prev.selectedDays.includes(day)
        ? prev.selectedDays.filter((d) => d !== day)
        : [...prev.selectedDays, day],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || formData.selectedDays.length === 0) {
      alert("Please fill in all required fields");
      return;
    }

    onCreateSession(formData);
    setFormData({
      title: "",
      description: "",
      meetLink: "",
      sessionDate: "",
      maxParticipants: "30",
      selectedDays: [],
      startTime: "10:00",
      endTime: "11:00",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-2xl">
          <h2 className="text-2xl font-bold">Create Live Session</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Session Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Session Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Web Development Masterclass"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe what you'll cover in this session..."
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Meet Link */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Meet Link
            </label>
            <div className="flex items-center gap-2">
              <LinkIcon size={18} className="text-gray-500" />
              <input
                type="text"
                name="meetLink"
                value={formData.meetLink}
                onChange={handleInputChange}
                placeholder="e.g., https://meet.google.com/xyz-abc-def"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Session Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Session Date *
            </label>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-gray-500" />
              <input
                type="date"
                name="sessionDate"
                value={formData.sessionDate}
                onChange={handleInputChange}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Days Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Schedule Days (2 times per week) *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {daysOfWeek.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleDayToggle(day)}
                  className={`p-3 rounded-lg font-semibold transition-all text-center ${
                    formData.selectedDays.includes(day)
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {day.slice(0, 3)}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Selected: {formData.selectedDays.length > 0
                ? formData.selectedDays.join(", ")
                : "None"}
            </p>
          </div>

          {/* Time Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Start Time *
              </label>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-gray-500" />
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                End Time *
              </label>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-gray-500" />
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Max Participants */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Maximum Participants
            </label>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-gray-500" />
              <input
                type="number"
                name="maxParticipants"
                value={formData.maxParticipants}
                onChange={handleInputChange}
                min="1"
                max="500"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Summary */}
          {formData.selectedDays.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Your sessions will be scheduled:</span>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                📅 {formData.selectedDays.join(", ")}
              </p>
              <p className="text-sm text-gray-600">
                🕐 {formData.startTime} - {formData.endTime}
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Plus size={18} />
              Create Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSessionModal;
