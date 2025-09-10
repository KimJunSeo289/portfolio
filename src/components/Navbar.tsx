import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils';
import jkfavicon from '../assets/favicon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 300;

      
      const skillsElement = document.getElementById('skills');
      if (skillsElement) {
        const skillsTop = skillsElement.offsetTop;
        if (window.scrollY + window.innerHeight * 0.7 >= skillsTop) {
          setActiveSection('skills');
          return;
        }
      }
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section === 'skills') continue;
        
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;

          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            return;
          }
        }
      }
      
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  const isActive = (href: string) => activeSection === href.slice(1);

  return (
    <nav className="glass fixed top-0 w-full z-50 border-b border-border/50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('#hero')}
            className="hover:scale-105 transition-transform"
          >
            <img 
              src={jkfavicon} 
              alt="JK Logo" 
              className="h-8 w-8 object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary relative',
                  isActive(item.href) ? 'text-primary' : 'text-foreground-secondary'
                )}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground-secondary hover:text-foreground transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50"
          >
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'block w-full text-left px-3 py-2 text-sm font-medium transition-colors rounded-lg',
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground-secondary hover:text-foreground hover:bg-muted/50'
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;