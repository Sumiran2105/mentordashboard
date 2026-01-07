import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import Topbar from "../layout/Topbar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar (hidden on mobile handled inside Topbar) */}
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        {/* PAGE CONTENT (THIS WAS MISSING / BROKEN) */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
