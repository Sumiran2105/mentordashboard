const WelcomeCard = () => {
  return (
    <div
      className="
        bg-blue-50 rounded-xl
        p-6 md:p-8
        flex flex-col md:flex-row
        items-center md:items-center
        justify-between
        gap-6
      "
    >
      {/* Text Section */}
      <div className="text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold">
          Welcome Back,{" "}
          <span className="text-blue-600">Hardik</span>
        </h2>

        <p className="text-gray-600 mt-2 max-w-md mx-auto md:mx-0 text-sm md:text-base">
          Manage all the things from a single dashboard. See latest
          info sessions, conversations and recommendations.
        </p>
      </div>

      {/* Image (hidden on small screens) */}
      <img
        src="/assets/welcome.png"
        alt="welcome"
        className="
          hidden md:block
          w-48 lg:w-60
          flex-shrink-0
        "
      />
    </div>
  );
};

export default WelcomeCard;
