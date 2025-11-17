import SpotlightCard from "../components/SpotlightCard";
import FadeContent from "../components/FadeContent";

const Skills = () => {
    return (
        <>
            <div className="bg-[#111827] text-white py-16 px-4 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Heading */}
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <h1 className="text-4xl font-bold text-center mb-4">
                            Skills & <span className="text-purple-400">Expertise</span>
                        </h1>
                    </FadeContent>

                    {/* Subheading */}
                    <FadeContent blur={true} duration={1200} easing="ease-out" initialOpacity={0}>
                        <p className="text-gray-300 text-center font-semibold max-w-2xl mx-auto mb-12">
                            Here's a quick overview of my skills including frontend magic, backend wizardry, and everything in between. I am always eager to learn new technologies.
                        </p>
                    </FadeContent>

                    {/* Skill Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Frontend Development",
                                desc: "Designing and developing modern, responsive user interfaces",
                                skills: ["React + Vite", "Next.js", "Redux", "Tailwind CSS", "Figma", "ShadCN"],
                            },
                            {
                                title: "Backend Development",
                                desc: "Architecting and maintaining scalable and secure backend systems",
                                skills: ["Node.js", "Express.js", "REST APIs", "Web Sockets"],
                            },
                            {
                                title: "Database Management",
                                desc: "Building and deploying AI-driven solutions to solve real-world problems",
                                skills: ["MySQL", "MongoDB", "Firebase", "PhpMyAdmin"],
                            },
                        ].map((section, index) => (
                            <FadeContent
                                key={index}
                                blur={true}
                                duration={800 + index * 200}
                                easing="ease-out"
                                initialOpacity={0}
                            >
                                <div className="relative h-full">
                                    <div className="relative rounded-3xl overflow-hidden custom-spotlight-card bg-gradient-to-br from-[#0a101f] to-[#131c35]">
                                        <SpotlightCard
                                            className="custom-spotlight-card"
                                            spotlightColor="rgba(232, 33, 248, 0.20)"
                                        >
                                            <div className="rounded-lg flex flex-col">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="text-white">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide lucide-monitor w-6 h-6"
                                                        >
                                                            <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                                                            <line x1="8" x2="16" y1="21" y2="21"></line>
                                                            <line x1="12" x2="12" y1="17" y2="21"></line>
                                                        </svg>
                                                    </div>
                                                    <h2 className="text-xl font-semibold">{section.title}</h2>
                                                </div>

                                                <p className="text-gray-300 mb-6">{section.desc}</p>

                                                <div className="grid grid-cols-2 gap-3 mt-auto">
                                                    {section.skills.map((skill, i) => (
                                                        <div
                                                            key={i}
                                                            className="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer hover:bg-purple-900/20 transition-all duration-200"
                                                        >
                                                            <span>{skill}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </SpotlightCard>
                                    </div>
                                </div>
                            </FadeContent>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;
