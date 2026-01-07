const WeeklyQuizzes = ({ quizzes }) => {
  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="font-semibold mb-4">Weekly Quizzes</h3>

      <div className="space-y-3">
        {quizzes.map((q, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm">
              <span>{q.week}</span>
              <span>{q.score || 0}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-blue-600 rounded"
                style={{ width: `${q.score || 0}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyQuizzes;
