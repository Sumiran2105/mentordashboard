import WelcomeCard from "../components/dashboard/WelcomeCard";
import DashboardStats from "../components/dashboard/DashboardStats";
import UpcomingSessions from "../components/dashboard/UpcomingSessions";
import VideoDiscussions from "../components/dashboard/VideoDiscussions";

const MentorDashboard = () => {
  return (
    <div className="space-y-10">
      {/* 1️⃣ Welcome */}
      <WelcomeCard />

      {/* 2️⃣ Key Metrics */}
      <DashboardStats />

      {/* 3️⃣ Actions & Communication */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingSessions />
        <VideoDiscussions />
      </div>
    </div>
  );
};

export default MentorDashboard;
