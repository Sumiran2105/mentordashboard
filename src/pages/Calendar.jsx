import { useSelector } from "react-redux";
import CalendarHeader from "../components/calendar/CalendarHeader";
import MonthView from "../components/calendar/MonthView";
import WeekView from "../components/calendar/WeekView";

const Calendar = () => {
  const { view, events } = useSelector(
    (state) => state.mentor.calendar
  );

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header (NO white wrapper here) */}
      <CalendarHeader />

      {/* Calendar Body */}
      <div className="bg-white rounded-xl border p-2 md:p-4 overflow-x-auto">
        <div className="min-w-[320px]">
          {view === "month" ? (
            <MonthView events={events} />
          ) : (
            <WeekView events={events} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
