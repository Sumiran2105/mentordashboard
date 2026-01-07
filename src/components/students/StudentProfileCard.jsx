const StudentProfileCard = ({ student }) => {
  return (
    <div className="bg-white rounded-xl border p-6 flex justify-between">
      <div>
        <h2 className="text-xl font-semibold">{student.name}</h2>
        <p className="text-sm text-gray-500">{student.email}</p>
        <p className="text-sm">{student.phone}</p>
      </div>

      <div className="text-right">
        <p className="text-sm font-medium">Parent</p>
        <p className="text-sm">{student.parentName}</p>
        <p className="text-sm text-gray-500">
          {student.parentPhone}
        </p>
      </div>
    </div>
  );
};

export default StudentProfileCard;
