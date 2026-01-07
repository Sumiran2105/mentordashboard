const WeeklyAssignments = ({ assignments }) => {
  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="font-semibold mb-4">Weekly Assignments</h3>

      <table className="w-full text-sm">
        <thead className="text-gray-500">
          <tr>
            <th className="text-left">Week</th>
            <th>Title</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {assignments.map((a, i) => (
            <tr key={i} className="border-t">
              <td>{a.week}</td>
              <td>{a.title}</td>
              <td>{a.score || "-"}</td>
              <td
                className={
                  a.status === "Submitted"
                    ? "text-green-600"
                    : "text-yellow-600"
                }
              >
                {a.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyAssignments;
