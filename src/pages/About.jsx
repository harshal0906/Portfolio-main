import FadeContent from "../components/FadeContent";
import myResume from "/resumePDF.pdf";
import myPhoto from "/my-img.jpg";

const About = () => {
  return (
    <div className="text-white py-16 bg-[#0d1425]">
      <div className="container mx-auto px-6">
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <h2 className="text-4xl font-bold text-center mb-12">
            Quick Facts <span className="text-purple-400">About Me</span>
          </h2>

          <div className="grid grid-cols-1 mb-10 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              {
                icon: "ri-briefcase-line",
                title: "Software Engineer",
                text: "Building scalable web applications using MERN stack and AI-powered solutions",
              },
              {
                icon: "ri-code-line",
                title: "Problem Solver",
                text: "Solved 200+ DSA problems on LeetCode, mastering algorithms & data structures",
              },
              {
                icon: "ri-team-line",
                title: "Open Source Contributor",
                text: "Collaborating on projects like Zero Hunger, improving social impact tech",
              },
              {
                icon: "ri-award-line",
                title: "Hackathon Enthusiast",
                text: "Participated in coding competitions and continuously learning new technologies",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <div className="bg-purple-400/20 p-4 rounded-xl mb-4 text-purple-400">
                  <i className={`${item.icon} text-2xl`}></i>
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-[#111a2e] rounded-2xl p-8 shadow-lg border border-purple-600/20">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative group">
                <img
                  src={myPhoto}
                  alt="Harshal Profile"
                  className="w-full max-w-sm md:max-w-md rounded-3xl object-cover border-4 border-purple-500/70 shadow-xl group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Hi, I'm <span className="text-purple-400 font-bold">Harshal</span> — a
                passionate <span className="text-purple-400 font-bold">Frontend Developer</span> skilled in modern web technologies like{" "}
                <span className="text-purple-400 font-bold">React</span>,{" "}
                <span className="text-purple-400 font-bold">JavaScript</span>, and{" "}
                <span className="text-purple-400 font-bold">Tailwind CSS</span>. I specialize in crafting responsive, user-friendly, and visually engaging web interfaces. I love transforming creative ideas into interactive digital experiences and continuously improving my skills to stay aligned with the latest frontend trends.
              </p>

              <a
                href={myResume}
                download="Resume.pdf"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
              >
                📄 Download Resume
              </a>
            </div>
          </div>


        </FadeContent>
      </div>
    </div>
  );
};

export default About;
