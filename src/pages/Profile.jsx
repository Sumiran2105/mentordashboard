import React, { useState } from "react";
import { Pencil, Check, Camera } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const tabs = ["Profile Details", "Password", "Social"];

export default function MentorProfile() {
  const [activeTab, setActiveTab] = useState("Profile Details");
  const [profile, setProfile] = useState({
    name: "Sarah Anderson",
    phone: "+1 234 567 8900",
    email: "sarah.anderson@example.com",
    gender: "Female",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    password: "••••••••",
    newPassword: "",
  });

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">

          {/* ===== Page Header ===== */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              My Profile
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage your personal information and social links
            </p>
          </div>

          {/* ===== Profile Header ===== */}
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-10">
            <div className="relative">
              <img
                src={profile.avatar}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border"
              />
              <button className="absolute -bottom-1 -right-1 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full shadow">
                <Camera size={14} />
              </button>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {profile.name}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Phone: <span className="font-medium text-gray-900">{profile.phone}</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Email: <span className="font-medium text-gray-900">{profile.email}</span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EditableField
                label="Name"
                value={profile.name}
                onSave={(val) => setProfile({ ...profile, name: val })}
              />
              <EditableField
                label="Phone Number"
                value={profile.phone}
                onSave={(val) => setProfile({ ...profile, phone: val })}
              />
              <EditableField
                label="Email"
                value={profile.email}
                onSave={(val) => setProfile({ ...profile, email: val })}
              />
              <EditableField
                label="Gender"
                value={profile.gender}
                options={["Male", "Female", "Other"]}
                onSave={(val) => setProfile({ ...profile, gender: val })}
              />
            </div>
          )}

          {/* ===== Password ===== */}
          {activeTab === "Password" && (
            <div className="mt-6 space-y-4">
              <EditableField
                label="Current Password"
                value={profile.password}
                onSave={(val) => setProfile({ ...profile, password: val })}
              />
              <EditableField
                label="New Password"
                value={profile.newPassword}
                onSave={(val) => setProfile({ ...profile, newPassword: val })}
              />
            </div>
          )}

          {/* ===== Social ===== */}
          {activeTab === "Social" && (
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-4">
                Connect your social profiles
              </p>
              <div className="flex gap-4">
                <SocialIcon icon={<FaFacebook />} label="Facebook" />
                <SocialIcon icon={<FaTwitter />} label="Twitter" />
                <SocialIcon icon={<FaInstagram />} label="Instagram" />
                <SocialIcon icon={<FaLinkedin />} label="LinkedIn" />
              </div>
            </div>
          )}
        </div>
      );
    }

/* ================= Editable Field ================= */

const EditableField = ({ label, value, onSave, options }) => {
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSave = () => {
    onSave(tempValue);
    setEditing(false);
  };

  const handleOptionSelect = (option) => {
    setTempValue(option);
    setDropdownOpen(false);
    onSave(option);
    setEditing(false);
  };

  return (
    <div className="relative border rounded-xl p-4 bg-gray-50">
      <p className="text-sm text-gray-500">{label}</p>

      {editing ? (
        options ? (
          <div className="relative mt-1">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full border-2 border-indigo-300 rounded-lg px-3 py-2 text-gray-800 bg-white shadow-sm text-left flex items-center justify-between hover:border-indigo-400 transition"
            >
              <span>{tempValue || `Select ${label}`}</span>
              <span className="text-indigo-500">▼</span>
            </button>
            
            {dropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-indigo-300 rounded-lg shadow-lg z-10 overflow-hidden">
                <div className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium">
                  {label}
                </div>
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionSelect(option)}
                    className={`w-full px-4 py-2 text-left text-sm transition ${
                      tempValue === option
                        ? "bg-indigo-500 text-white font-medium"
                        : "text-gray-700 hover:bg-indigo-50"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <input
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            className="mt-1 w-full border-2 border-indigo-300 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none bg-white"
            autoFocus
          />
        )
      ) : (
        <p className="font-medium text-gray-800 mt-1">{value}</p>
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

/* ================= Social Icon ================= */

const SocialIcon = ({ icon, label }) => (
  <div title={label} className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 cursor-pointer hover:bg-indigo-100 hover:text-indigo-600 transition text-lg">
    {icon}
  </div>
);
