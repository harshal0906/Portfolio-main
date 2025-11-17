import FadeContent from "../components/FadeContent";

const Achivment = () => {
  const achievements = [
    "Completed 12th standard",
    "Currently pursuing BCA from VNSGU (DRB College)",
    "Learning Full Stack Development from Red & White Institute",
    "Built Template UI Design Web Page",
    "Built Commercial Add-to-Cart Project",
    "Built Calculator App",
    "Built Portfolio Website",
    "Built Employee Management System",
    "Built Course Management System (Latest Project)",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 ">
            {" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent border-b-2 border-purple-500">
              My Achievements
            </span>
          </h2>
        </FadeContent>

        {/* Achievements List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <FadeContent
              key={index}
              blur={true}
              duration={800 + index * 120}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="group relative bg-gray-900/70 border border-gray-700 p-6 rounded-2xl hover:bg-gray-800/80 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg">
                <div className="absolute top-3 right-4 text-purple-500 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  🏆
                </div>
                <p className="text-lg text-gray-300 leading-relaxed group-hover:text-white">
                  - {item}
                </p>
              </div>
            </FadeContent>
          ))}
        </div>

        {/* Decorative Divider */}
        <FadeContent blur={true} duration={1200} easing="ease-out" initialOpacity={0}>
          <div className="mt-16 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </FadeContent>
      </div>
    </div>
  );
};

export default Achivment;
