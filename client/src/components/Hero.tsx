import profile from "../assets/Images/profile2.jpeg";
import Deependra_resume from "../assets/Resumes/DEEPENDRA-RESUMES1.pdf";
const Hero = () => {
  return (
    <section id="about" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="text-primary dark:text-accent">
                Deependra
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600 dark:text-gray-300">
              React Native Developer
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              With{" "}
              <span className="font-semibold text-primary dark:text-accent">
                2.5+ years
              </span>{" "}
              of experience building high-performance mobile applications.
              Passionate about creating seamless cross-platform experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 dark:bg-accent dark:text-secondary dark:hover:bg-teal-400 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href={Deependra_resume}
                className="border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary/5 dark:border-accent dark:text-accent dark:hover:bg-accent/10 transition-colors"
                download
              >
                Download CV <i className="fas fa-download ml-1"></i>
              </a>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <a
                href="https://github.com/Deependra-jhariya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-accent text-xl transition-colors"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/deependrajhariya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-accent text-xl transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              {/* <a
                href="https://twitter.com/deependrajhariya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-accent text-xl transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a> */}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="w-100 h-80 sm:w-80 sm:h-80 rounded-xl overflow-hidden border-2 border-primary dark:border-accent bg-neutral dark:bg-gray-700 flex items-center justify-center">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
