import { motion } from "framer-motion";
const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Porfolio-web",
            description:
                "A full-stack online store with payment integration and inventory management.",
            image:'/public/images/img-1.jpg',
            url: "https://portfolio-main-pi-one.vercel.app/",
        },
        {
            id: 2, 
            title: "lab-tracker-react",
            description:
                "Helps automate daily lab tasks and saves time for teachers and students.",
            image:'/public/images/img-2.jpg',
            url: "https://lab-tracker-react.vercel.app/",
        },
        {
            id: 3,
            title: "Calculator",
            description:
                "Designed with a clean interface to help users solve everyday calculations effortlessly.",
            image:"/public/images/img-3.jpg",
            url: "https://task-3-iota-five.vercel.app/",
        },
        {
            id: 4,
            title: "To-Do-List-firestore",
            description:
                "Keeps work organized and boosts productivity with a clean and simple interface.",
            image:'/public/images/img-4.jpg',
            url: "https://todo-list-firebase-eight.vercel.app/",
        },
        {
            id: 5,
            title: "To-Do-List in js",
            description:
                "Make to-so-list  using html,css, java-script. This project inprove my javascript fundamentals.",
            image:'/public/images/img-5.jpg',
            url: "https://harshal0906.github.io/task-2/",
        },
        {
            id: 6,
            title: "Course-management-react",
            description:'A system that allows users to create, update, and manage courses with smooth navigation and easy controls.',
            image:'/public/images/img-6.jpg',
            url: "https://course-management-react.vercel.app/",
        },
        {
            id: 7,
            title: "Cafe management firebase ",
            description:
                "A system that manages orders, menu items, billing, and customer service in one smooth workflow.",
            image:'/public/images/img-7.jpg',
            url: "https://pr-firebase-crud.vercel.app/",
        },
        {
            id: 8,
            title: "weather-API",
            description:
                "Gives users quick and accurate weather updates with a clean and easy-to-understand interface.",
            image:'/public/images/img-8.jpg',
            url: "https://harshal0906.github.io/pr-10-weatherAPI/",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section className="py-20 px-6 bg-[#0d1425]">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-extrabold text-center mb-4 text-white"
                >
                    My <span className="text-purple-400">Projects</span>
                </motion.h2>

                <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
                    A showcase of the projects I’ve built, covering frontend, backend, and
                    full-stack solutions.
                </p>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#111827] border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)] rounded-xl overflow-hidden transition-all"
                        >
                            {/* Image */}
                            <div className="relative h-44 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform transition-all"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <a
                                    href={project.url}
                                    className="block w-full text-center bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                                >
                                    View Project
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
