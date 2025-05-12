import { Link } from "wouter";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-secondary dark:bg-gray-950 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <a className="text-xl font-bold">
                Deependra<span className="text-primary dark:text-accent">.dev</span>
              </a>
            </Link>
            <p className="mt-2 text-gray-400 text-sm">
              React Native Developer with 2.9 years of experience
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="hover:text-primary dark:hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        
        <hr className="my-6 border-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Deependra Jhariya. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a 
              href="https://github.com/Deependra-jhariya"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary dark:hover:text-accent"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://linkedin.com/in/deependrajhariya" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary dark:hover:text-accent"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            {/* <a 
              href="https://twitter.com/deependrajhariya" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary dark:hover:text-accent"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
