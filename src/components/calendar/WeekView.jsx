import { useState } from "react";
import EventModal from "./EventModal";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const hours = Array.from({ length: 24 }, (_, i) => i);

// helper: "19:00" → 19
const getHour = (time) => Number(time.split(":")[0]);

const CELL_HEIGHT = 56; // mobile-friendly
const DAY_WIDTH = 140;  // fixed width per day

const WeekView = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="bg-white rounded-xl mt-4 p-2 sm:p-4">
      {/* Horizontal scroll wrapper */}
      <div className="relative overflow-x-auto">
        <div className="min-w-[1100px] relative">
          {/* GRID */}
          <div className="grid grid-cols-8 text-xs sm:text-sm border">
            {/* Header row */}
            <div className="border bg-gray-50"></div>
            {days.map((d) => (
              <div
                key={d}
                className="border p-2 text-center font-medium bg-gray-50"
              >
                {d}
              </div>
            ))}

            {/* Time rows */}
            {hours.map((hour) => (
              <div key={hour} className="contents">
                <div className="border p-2 text-xs text-gray-500 h-[56px] bg-white">
                  {hour}:00
                </div>

                {days.map((d) => (
                  <div
                    key={d + hour}
                    className="border h-[56px]"
                  />
                ))}
              </div>
            ))}
          </div>

          {/* EVENTS LAYER */}
          <div className="absolute inset-0 pointer-events-none">
            {events
              .filter((e) => e.startTime)
              .map((event) => {
                const dayIndex =
                  new Date(event.date).getDay() - 1;
                if (dayIndex < 0) return null;

                const startHour = getHour(event.startTime);
                const endHour = getHour(
                  event.endTime || event.startTime
                );

                const height =
                  (endHour - startHour + 1) * CELL_HEIGHT;

                return (
                  <div
                    key={event.id}
                    className={`absolute pointer-events-auto cursor-pointer
                      rounded-lg p-2 text-[11px] sm:text-xs shadow
                      ${
                        event.type === "class"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    style={{
                      top:
                        40 +
                        startHour * CELL_HEIGHT,
                      left:
                        80 +
                        dayIndex * DAY_WIDTH,
                      width: DAY_WIDTH - 12,
                      height,
                    }}
                    onClick={() =>
                      setSelectedEvent(event)
                    }
                  >
                    <p className="font-medium truncate">
                      {event.title}
                    </p>
                    <p className="opacity-70">
                      {event.startTime} –{" "}
                      {event.endTime}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() =>
            setSelectedEvent(null)
          }
        />
      )}
    </div>
  );
};

export default WeekView;
