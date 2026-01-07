import { useSelector } from "react-redux";

const StudentTable = () => {
  const students = useSelector((state) => state.mentor.students);

  return (
    <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">My Students</h2>

      <table className="min-w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Parent</th>
            <th className="p-3 text-left">Assignment</th>
            <th className="p-3 text-left">Quiz</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <tr key={stu.id} className="border-b">
              <td className="p-3 font-medium">{stu.fullName}</td>
              <td className="p-3">{stu.phone}</td>
              <td className="p-3">{stu.email}</td>
              <td className="p-3">
                {stu.parentName} <br />
                <span className="text-gray-500 text-xs">
                  {stu.parentPhone}
                </span>
              </td>
              <td className="p-3">{stu.assignmentScore}%</td>
              <td className="p-3">{stu.quizScore}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
