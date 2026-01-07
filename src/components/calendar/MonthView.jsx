const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const MonthView = ({ events }) => {
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="bg-white rounded-xl p-2 sm:p-4 mt-4">
      {/* Horizontal scroll wrapper (mobile) */}
      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          {/* Day headers */}
          <div className="grid grid-cols-7 text-xs sm:text-sm font-medium border-b pb-2">
            {days.map((d) => (
              <div
                key={d}
                className="text-center text-gray-600"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Dates */}
          <div className="grid grid-cols-7 text-xs sm:text-sm">
            {daysInMonth.map((day) => {
              const dayEvents = events.filter(
                (e) =>
                  Number(e.date.split("-")[2]) === day
              );

              return (
                <div
                  key={day}
                  className="
                    border
                    min-h-[90px] sm:min-h-[110px]
                    p-1 sm:p-2
                    hover:bg-gray-50
                    transition
                  "
                >
                  {/* Date */}
                  <div className="text-xs font-semibold mb-1">
                    {day}
                  </div>

                  {/* Events */}
                  {dayEvents.slice(0, 2).map((ev) => (
                    <div
                      key={ev.id}
                      className={`
                        mt-1 px-1.5 py-0.5
                        rounded
                        text-[10px] sm:text-xs
                        truncate
                        ${
                          ev.type === "class"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                        }
                      `}
                    >
                      {ev.title}
                    </div>
                  ))}

                  {/* More indicator */}
                  {dayEvents.length > 2 && (
                    <div className="text-[10px] text-blue-600 mt-1">
                      +{dayEvents.length - 2} more
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthView;
