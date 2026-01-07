import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layout/DashboardLayout";

/* Pages */
import MentorDashboard from "./pages/MentorDashboard";
import Students from "./pages/Students";
import StudentDetail from "./pages/StudentDetail";
import LiveSessions from "./pages/LiveSessions";
import Calendar from "./pages/Calendar";
import InfoSessions from "./pages/InfoSessions";
import Notifications from "./pages/Notifications";
import Discussions from "./pages/Discussions";
import Profile from "./pages/Profile";
import Security from "./pages/Security";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* =========================
           Dashboard Layout
        ========================== */}
        <Route element={<DashboardLayout />}>
          
          {/* Dashboard */}
          <Route index element={<MentorDashboard />} />

          {/* Students */}
          <Route path="students" element={<Students />} />
          <Route path="students/:studentId" element={<StudentDetail />} />

          {/* Communication */}
          <Route path="messages" element={<LiveSessions />} />
          <Route path="discussions" element={<Discussions />} />
          <Route path="notifications" element={<Notifications />} />

          {/* Calendar & Sessions */}
          <Route path="calendar" element={<Calendar />} />
          <Route path="info-sessions" element={<InfoSessions />} />

          {/* Account Settings */}
          <Route path="settings/profile" element={<Profile />} />
          <Route path="settings/security" element={<Security />} />
        </Route>

    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
