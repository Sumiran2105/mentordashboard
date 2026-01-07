import { useDispatch, useSelector } from "react-redux";
import {
  setCalendarView,
  nextMonth,
  prevMonth,
} from "../../features/mentor/mentorSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CalendarHeader = () => {
  const dispatch = useDispatch();
  const { view, currentDate } = useSelector(
    (s) => s.mentor.calendar
  );

  const date = new Date(currentDate);
  const monthLabel = date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 md:p-8 text-white">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold">
        My Calendar
      </h1>
      <p className="mt-2 text-sm md:text-base opacity-90">
        Track live classes, assignments, and sessions.
      </p>

      {/* Controls */}
      <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        {/* Month / Week Toggle (Mobile-safe) */}
        <div className="flex bg-white/20 rounded-lg overflow-hidden w-full md:w-auto">
          <button
            onClick={() => dispatch(setCalendarView("month"))}
            className={`px-4 py-2 text-sm flex-1 transition
              ${
                view === "month"
                  ? "bg-white text-purple-600 font-medium"
                  : "text-white"
              }`}
          >
            Month
          </button>

          <button
            onClick={() => dispatch(setCalendarView("week"))}
            className={`px-4 py-2 text-sm flex-1 transition
              ${
                view === "week"
                  ? "bg-white text-purple-600 font-medium"
                  : "text-white"
              }`}
          >
            Week
          </button>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center justify-between md:justify-start gap-3 bg-white/20 px-4 py-2 rounded-lg">
          <button
            onClick={() => dispatch(prevMonth())}
            className="hover:bg-white/20 p-1 rounded transition"
          >
            <ChevronLeft />
          </button>

          <span className="font-semibold whitespace-nowrap">
            {monthLabel}
          </span>

          <button
            onClick={() => dispatch(nextMonth())}
            className="hover:bg-white/20 p-1 rounded transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Filter (optional – safe on mobile) */}
        <select className="px-4 py-2 rounded-lg text-black w-full md:w-auto">
          <option>All</option>
          <option>Classes</option>
          <option>Assignments</option>
        </select>
      </div>
    </div>
  );
};

export default CalendarHeader;
