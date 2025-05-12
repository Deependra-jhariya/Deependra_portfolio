const skillCategories = [
  {
    name: "Mobile Development",
    skills: [
      { name: "React Native", icon: "react", proficiency: 95 },
      { name: "ReactJs", icon: "react", proficiency: 95 },
      { name: "Redux", icon: "redux", proficiency: 90 },
      { name: "JavaScript", icon: "javascript", proficiency: 90 },
      { name: "TypeScript", icon: "typescript", proficiency: 85 }
    ]
  },
  {
    name: "Backend & APIs",
    skills: [
      { name: "Firebase", icon: "firebase", proficiency: 85 },
      // { name: "GraphQL", icon: "graphql", proficiency: 80 },
      { name: "Node.js", icon: "nodejs", proficiency: 75 },
      { name: "MongoDB", icon: "mongodb", proficiency: 70 }
    ]
  },
  {
    name: "Tools & Workflows",
    skills: [
      { name: "Git", icon: "git", proficiency: 90 },
      // { name: "Jest", icon: "jest", proficiency: 80 },
      // { name: "Jira", icon: "jira", proficiency: 85 },
      { name: "Figma", icon: "figma", proficiency: 75 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="col-span-2 md:col-span-3 lg:col-span-4 mt-8 first:mt-0">
              <h3 className="text-xl font-semibold mb-6 text-primary dark:text-accent">{category.name}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-badge px-4 py-3 bg-white dark:bg-gray-800 shadow rounded-lg flex items-center">
                    <img 
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`} 
                      alt={skill.name} 
                      className="w-8 h-8 mr-3"
                      onError={(e) => {
                        // If original icon fails, try plain version or fallback to fontawesome icon
                        const target = e.target as HTMLImageElement;
                        if (target.src.includes("-original")) {
                          target.src = target.src.replace("-original", "-plain");
                        } else {
                          // Use a fallback icon
                          target.outerHTML = `<i class="fab fa-${skill.icon.toLowerCase()} text-2xl mr-3 text-blue-500"></i>`;
                        }
                      }}
                    />
                    <div>
                      <h4 className="font-medium">{skill.name}</h4>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                        <div 
                          className="bg-primary dark:bg-accent h-2 rounded-full" 
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
