const experienceData = [
  {
    title: "React Native Developer",
    company: "Nonstop infotech Pvt. Ltd. Nagpur Maharstra",
    period: "January 2025 - Present",
    description: "Led the development of multiple cross-platform mobile applications using React Native, resulting in a 35% reduction in development time.",
    achievements: [
      "Implemented complex UI animations and gesture handlers",
      "Integrated third-party APIs and services",
      "Optimized app performance and reduced bundle size by 20%",
      "Mentored junior developers in React Native best practices"
    ]
  },
  {
    title: "React Native Developer",
    company: "Cylsys Software Solution Pvt. Ltd. Mumbai",
    period: "June 2022 - December 2024",
    description: "Developed and maintained several React Native applications while collaborating with design and backend teams to ensure seamless integration.",
    achievements: [
      "Built responsive layouts with React Native components",
      "Implemented state management using Redux",
      "Created custom hooks for shared functionality",
      "Worked on bug fixes and performance improvements"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-neutral dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            {experienceData.map((experience, index) => (
              <div key={index} className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <div className="hidden md:block absolute right-0 top-0 w-3 h-3 rounded-full bg-primary dark:bg-accent" style={{ right: "-1.5px" }}></div>
                    <h3 className="text-xl font-bold text-primary dark:text-accent">{experience.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{experience.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{experience.period}</p>
                  </div>
                  <div className="block md:hidden absolute left-0 top-0 w-3 h-3 rounded-full bg-primary dark:bg-accent" style={{ left: "-1.5px" }}></div>
                  <div className="flex-1 md:pl-8 border-l-2 border-gray-200 dark:border-gray-700 md:border-0 pl-8">
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                      <p className="mb-4 text-gray-700 dark:text-gray-300">
                        {experience.description}
                      </p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
