import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed w-full bg-white/80 dark:bg-secondary/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <a className="text-xl font-bold text-primary dark:text-accent">
              Deependra<span className="text-secondary dark:text-white">.dev</span>
            </a>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="hover:text-primary dark:hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* <ThemeToggle /> */}
            
            <a href="#contact" className="hidden md:inline-block bg-primary text-white dark:bg-accent dark:text-secondary px-4 py-2 rounded-md font-medium hover:bg-blue-600 dark:hover:bg-teal-400 transition-colors">
              Hire Me
            </a>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-secondary dark:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-secondary shadow-md">
          <div className="container mx-auto px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="block py-2 hover:text-primary dark:hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
