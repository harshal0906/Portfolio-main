import BlurText from "../components/BlurText";
import FadeContent from "../components/FadeContent";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";

const HomePage = () => {
    return (
        <div className="main-bg">
            {/* Wrapper */}
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 md:px-8 py-10">
                {/* Row */}
                <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between w-full gap-10">
                    {/* Left Content */}
                    <div className="w-full md:w-7/12 text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 leading-snug">
                            Hi, I'm{" "}
                            <BlurText
                                text="Harshal Gadher"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-purple-400 inline-block"
                            />
                        </h2>

                        <p className="text-white text-base sm:text-lg leading-relaxed">
                            I am a Software Engineering student passionate about building impactful
                            solutions. I specialize in developing software that bridges technology and
                            real-world challenges, ensuring efficiency, usability, and meaningful impact.
                        </p>

                        <p className="text-white text-base sm:text-lg mt-4 leading-relaxed">
                            My work spans web development, cloud computing, DevOps, and cybersecurity,
                            driven by a belief that technology should solve problems, not create them. I
                            am dedicated to crafting scalable, effective, and user-centric solutions while
                            fostering a culture of collaboration, knowledge-sharing, and continuous
                            improvement.
                        </p>

                        <div className="my-6 font-semibold p-4 border-l-4 border-purple-400 bg-white/5 rounded-md text-white">
                            <p className="italic text-blue-200 text-sm sm:text-base">
                                A Student Fueled By Curiosity, Innovative Ideas And Continuous Learning,
                                Figuring Out Stuff!!
                            </p>
                        </div>

                        {/* Social Links */}
                        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                            <div className="flex justify-center md:justify-start space-x-5 mt-8">
                                <a href="#" className="text-2xl text-white opacity-60 hover:opacity-100 transition-all">
                                    <i className="ri-github-fill"></i>
                                </a>
                                <a href="#" className="text-2xl text-white opacity-60 hover:opacity-100 transition-all">
                                    <i className="ri-twitter-fill"></i>
                                </a>
                                <a href="#" className="text-2xl text-white opacity-60 hover:opacity-100 transition-all">
                                    <i className="ri-linkedin-fill"></i>
                                </a>
                                <a href="#" className="text-2xl text-white opacity-60 hover:opacity-100 transition-all">
                                    <i className="ri-mail-fill"></i>
                                </a>
                            </div>
                        </FadeContent>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                            <img
                                src="/my-img.jpg"
                                alt="Harshal"
                                className="rounded-xl w-8/12 sm:w-6/12 md:w-10/12 lg:w-9/12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
                            />
                        </FadeContent>
                    </div>
                </div>
            </div>

            {/* Other Sections */}
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default HomePage;
