import Yoga from "../assets/Images/Yoga.webp";
import Advisecube from "../assets/Images/Advisecube.webp";
import Kodie from "../assets/Images/Kodie.png";
import HRMSINFO from "../assets/Images/HRMSINFO.jpeg";
import uti from "../assets/Images/Uti.jpeg";
const projectsData = [
  {
    title: "Yoga Mobile Application",
    description:
      "Convenient access to yoga: Users can practice yoga from the comfort of their own home or any location of their choice.Flexible scheduling: Yoga apps allow users to practice at their own pace and fit sessions into their busy schedulesd.",
    image: Yoga,
    tags: ["React Native", "Redux", "Video sdk"],
    detailsLink:
      "https://play.google.com/store/apps/details?id=com.nuage_hot_yogaa_app",
    githubLink:
      "https://play.google.com/store/apps/details?id=com.nuage_hot_yogaa_app",
  },
  {
    title: "ADVISECUBE",
    description:
      "Diverse finance courses: The e-learning app offers a wide range of finance courses covering topics such as investment strategies, financial planning, accounting principles, risk management, and more.Interactive quizzes: Users can engage with the material through interactive quizzes that reinforce learning and assess understanding of key concepts covered in the courses.",
    image: Advisecube,
    tags: ["React Native", "Redux", "payment Gateways", "in-App-Purchase"],
    detailsLink:
      "https://play.google.com/store/apps/details?id=com.advicecube_project",
    githubLink:
      "https://play.google.com/store/apps/details?id=com.advicecube_project",
  },
  {
    title: "KODIE",
    description:
      "Kodie is a cutting-edge mobile app developed to address the challenges faced by property owners, tenants, and contractors in managing rental properties efficiently. It is built on the premise of making property management more accessible, collaborative, and streamlined. Whether you are an individual property owner, a tenant seeking the perfect rental, or a contractor offering services, Kodie is designed to cater to your unique needs.",
    image: Kodie,
    tags: [
      "React Native",
      "Firebase",
      "Google Map",
      "Chat sdk",
      "Redux",
      "Dynamic Questionire",
    ],
    detailsLink: "https://github.com/deependrajhariya/social-media-app",
    githubLink: "https://github.com/deependrajhariya/social-media-app",
  },
  {
    title: "HRMS INFO",
    description:
      "Centralized data management: HRMS INFO allows for the storage and management of employee data from multiple companies in a single, centralized system.Company profiles: Each company can have its own profile within the HRMS INFO, including information such as company name, address, contact details, and organizational structure.Employee database: The HRMS INFO stores comprehensive employee information, including personal details, job roles, departmental ass ignments, and employment history.",
    image: HRMSINFO,
    tags: ["React Native", "Google Map", "Redux"],
    detailsLink: "https://play.google.com/store/apps/details?id=com.hrmsinfo",
    githubLink: "https://play.google.com/store/apps/details?id=com.hrmsinfo",
  },
  {
    title: "TMS",
    description:
      "Tour creation: Employees can use the Tour Management System (TMS) to create new tours, specifying details such as destination, duration, purpose, and budget.Itinerary planning: TMS facilitates the planning of tour itineraries, allowing employees to schedule activities, accommodations, transportation, and other logistics.",
    image: uti,
    tags: ["React Native", "Google Map", "Redux"],
    detailsLink: "https://play.google.com/store/apps/details?id=com.hrmsinfo",
    githubLink: "https://play.google.com/store/apps/details?id=com.hrmsinfo",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2 project-card"
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => {
                    const tagColors = {
                      "React Native": "blue",
                      Redux: "green",
                      Firebase: "purple",
                      GraphQL: "yellow",
                      HealthKit: "red",
                      "Socket.io": "indigo",
                      AWS: "orange",
                    };
                    const color =
                      tagColors[tag as keyof typeof tagColors] || "gray";

                    return (
                      <span
                        key={i}
                        className={`px-2 py-1 bg-${color}-100 text-${color}-800 dark:bg-${color}-900 dark:text-${color}-100 text-xs rounded-full`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.detailsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-accent hover:underline inline-flex items-center"
                  >
                    View Details
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent"
                    aria-label="GitHub repository"
                  >
                    <i className="fab fa-github text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <a
            href="https://github.com/deependrajhariya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-secondary transition-colors"
          >
            View All Projects
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
