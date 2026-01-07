import { useState } from "react";
import StudentStats from "../components/students/StudentStats";
import StudentTable from "../components/students/StudentTable";

const Students = () => {
  const [search, setSearch] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("All");

  const batches = ["All", "Batch 1", "Batch 2", "Batch 3", "Batch 4"];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Page Header */}
      <div
        className="
          bg-gradient-to-r from-blue-500 to-purple-500
          text-white rounded-2xl
          p-5 md:p-6
        "
      >
        <h1 className="text-xl md:text-2xl font-semibold">
          My Students
        </h1>
        <p className="text-sm opacity-90 mt-1">
          Track performance, assignments, and engagement
        </p>
      </div>

      {/* Stats */}
      <StudentStats />

      {/* Search & Filters */}
      <div
        className="
          bg-white/80 backdrop-blur
          rounded-xl p-4 border
          flex flex-col gap-4
          md:flex-row md:items-center md:justify-between
        "
      >
        {/* Search */}
        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            border rounded-full px-4 py-2
            w-full md:w-72
            focus:ring-2 focus:ring-blue-400
            outline-none text-sm
          "
        />

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          {/* Batch Filter */}
          <select 
            value={selectedBatch} 
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="border rounded-full px-4 py-2 text-sm w-full sm:w-auto">
            {batches.map((batch) => (
              <option key={batch} value={batch}>
                {batch}
              </option>
            ))}
          </select>

          <select className="border rounded-full px-4 py-2 text-sm w-full sm:w-auto">
            <option>All</option>
            <option>On Track</option>
            <option>Needs Attention</option>
          </select>

          <select className="border rounded-full px-4 py-2 text-sm w-full sm:w-auto">
            <option>Sort by</option>
            <option>Assignment Score</option>
            <option>Quiz Score</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <StudentTable search={search} batch={selectedBatch} />
    </div>
  );
};

export default Students;
