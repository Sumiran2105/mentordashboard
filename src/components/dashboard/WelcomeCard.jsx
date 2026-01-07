import { useSelector } from "react-redux";
import { ArrowRight } from "lucide-react";

const WelcomeCard = () => {
  const mentorName = useSelector(
    (state) => state.mentor.mentorInfo.name
  );

  return (
    <div
      className="
        relative overflow-hidden
        rounded-2xl
        bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50
        p-6 md:p-8
        flex flex-col md:flex-row
        items-center justify-between
        gap-6
        border
      "
    >
      {/* Decorative blur */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl" />

      {/* Text Section */}
      <div className="relative text-center md:text-left max-w-xl">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
          Welcome back,{" "}
          <span className="text-blue-600">
            {mentorName.split(" ")[0]}
          </span>{" "}
          👋
        </h2>

        <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
          Manage your students, sessions, discussions, and progress
          — all from one powerful mentor dashboard.
        </p>

        {/* CTA */}
        <div className="mt-5 flex justify-center md:justify-start">
          <button
            className="
              inline-flex items-center gap-2
              bg-blue-600 hover:bg-blue-700
              text-white text-sm font-medium
              px-5 py-2.5
              rounded-lg
              transition
              shadow-sm
            "
          >
            View Today’s Schedule
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Image */}
      <img
        src="/assets/welcome.png"
        alt="welcome"
        className="
          hidden md:block
          w-44 lg:w-60
          flex-shrink-0
          drop-shadow-md
        "
      />
    </div>
  );
};

export default WelcomeCard;
