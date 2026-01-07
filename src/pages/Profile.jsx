import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pencil, Check, Camera, Lock } from "lucide-react";
import { updateMentorProfile } from "../features/mentor/mentorSlice";

const tabs = ["Profile Details", "Password"];

const MentorProfile = () => {
  const dispatch = useDispatch();
  const mentor = useSelector((state) => state.mentor.mentorInfo);

  const [activeTab, setActiveTab] = useState("Profile Details");
  const [previewAvatar, setPreviewAvatar] = useState(mentor.avatar);

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create a preview
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result;
      setPreviewAvatar(result);
      dispatch(updateMentorProfile({ avatar: result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm max-w-4xl">
      {/* ===== Page Header ===== */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
          My Profile
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          View and manage your mentor profile
        </p>
      </div>

      {/* ===== Profile Header ===== */}
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-10">
        <div className="relative">
          <img
            src={previewAvatar}
            alt="Mentor"
            className="w-24 h-24 rounded-full object-cover border"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
            id="avatar-upload"
          />
          <label
            htmlFor="avatar-upload"
            title="Change avatar"
            className="absolute -bottom-1 -right-1 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full shadow cursor-pointer transition"
          >
            <Camera size={14} />
          </label>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {mentor.name}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Role: <span className="font-medium">{mentor.role}</span>
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Mentor ID: {mentor.id}
          </p>
        </div>
      </div>

      {/* ===== Tabs ===== */}
      <div className="flex gap-8 border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium border-b-2 transition ${
              activeTab === tab
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ===== Profile Details ===== */}
      {activeTab === "Profile Details" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <EditableField
            label="Full Name"
            value={mentor.name}
            onSave={(val) =>
              dispatch(updateMentorProfile({ name: val }))
            }
          />

          <EditableField
            label="Phone Number"
            value={mentor.phone}
            onSave={(val) =>
              dispatch(updateMentorProfile({ phone: val }))
            }
          />

          <SelectableField
            label="Gender"
            value={mentor.gender}
            options={["Male", "Female", "Other"]}
            onSave={(val) =>
              dispatch(updateMentorProfile({ gender: val }))
            }
          />

          <ReadOnlyField label="Role" value={mentor.role} />
          <ReadOnlyField label="Mentor ID" value={mentor.id} />
        </div>
      )}

      {/* ===== Password ===== */}
      {activeTab === "Password" && (
        <div className="max-w-md space-y-5">
          <PasswordField label="Current Password" />
          <PasswordField label="New Password" />
          <PasswordField label="Confirm New Password" />

          <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
            <Lock size={16} />
            Update Password
          </button>

          <p className="text-xs text-gray-400">
            Password change will be handled securely by backend
          </p>
        </div>
      )}
    </div>
  );
};

export default MentorProfile;

/* ================= Editable Field ================= */

const EditableField = ({ label, value, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value || "");

  const handleSave = () => {
    if (tempValue.trim()) {
      onSave(tempValue.trim());
    }
    setEditing(false);
  };

  return (
    <div className="relative border rounded-xl p-4 bg-gray-50">
      <p className="text-sm text-gray-500">{label}</p>

      {editing ? (
        <input
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          className="mt-1 w-full border-2 border-indigo-300 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
          autoFocus
        />
      ) : (
        <p className="font-medium text-gray-800 mt-1">
          {value || "—"}
        </p>
      )}

      <button
        onClick={() => (editing ? handleSave() : setEditing(true))}
        className="absolute top-4 right-4 text-indigo-500 hover:text-indigo-700"
      >
        {editing ? <Check size={16} /> : <Pencil size={16} />}
      </button>
    </div>
  );
};

/* ================= Selectable Field ================= */

const SelectableField = ({ label, value, options, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value || "");

  const handleSave = () => {
    if (tempValue.trim()) {
      onSave(tempValue.trim());
    }
    setEditing(false);
  };

  return (
    <div className="relative border rounded-xl p-4 bg-gray-50">
      <p className="text-sm text-gray-500">{label}</p>

      {editing ? (
        <select
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          onBlur={handleSave}
          className="mt-1 w-full border-2 border-indigo-300 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
          autoFocus
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <p className="font-medium text-gray-800 mt-1">
          {value || "—"}
        </p>
      )}

      <button
        onClick={() => (editing ? handleSave() : setEditing(true))}
        className="absolute top-4 right-4 text-indigo-500 hover:text-indigo-700"
      >
        {editing ? <Check size={16} /> : <Pencil size={16} />}
      </button>
    </div>
  );
};

/* ================= Password Field ================= */

const PasswordField = ({ label }) => (
  <div className="border rounded-xl p-4 bg-gray-50">
    <p className="text-sm text-gray-500 mb-1">{label}</p>
    <input
      type="password"
      placeholder="••••••••"
      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
    />
  </div>
);

/* ================= Read Only Field ================= */

const ReadOnlyField = ({ label, value }) => (
  <div className="border rounded-xl p-4 bg-gray-50">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-medium text-gray-800 mt-1">{value}</p>
  </div>
);
