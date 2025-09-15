import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, Layers, Server, Database, Settings } from 'lucide-react';

// Assets imports
import javascriptIcon from '../assets/javascript.png';
import typescriptIcon from '../assets/typescript.png';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import reactIcon from '../assets/react.png';
import reduxIcon from '../assets/redux.png';
import zustandIcon from '../assets/zustand.png';
import expressjsIcon from '../assets/expressjs.svg';
import framermotionIcon from '../assets/framermotion.svg';
import socketioIcon from '../assets/soketio.png';
import tailwindIcon from '../assets/tailwind.png';
import storybookIcon from '../assets/storybook.svg';
import mysqlIcon from '../assets/mysql.png';
import mongodbIcon from '../assets/mongodb.svg';
import gitIcon from '../assets/git.png';
import figmaIcon from '../assets/figma.png';
import jiraIcon from '../assets/jira.png';
import notionIcon from '../assets/notion.png';
import vercelIcon from '../assets/vercel.webp';
import cloudtypeIcon from '../assets/cloudtype.png';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('Language');

  const skillCategories = {
    Language: {
      icon: Code,
      skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS']
    },
    'Framework/Library': {
      icon: Layers,
      skills: ['React', 'Redux', 'Zustand', 'Express.js', 'Framer Motion', 'Socket.io', 'TailwindCSS', 'Storybook']
    },
    Database: {
      icon: Database,
      skills: ['MySQL', 'MongoDB']
    },
    etc: {
      icon: Settings,
      skills: ['Git/GitHub', 'Figma', 'Jira', 'Notion', 'Vercel', 'Cloudtype']
    }
  };

  const getSkillIcon = (skill: string) => {
    const iconMap: { [key: string]: string } = {
      'JavaScript': javascriptIcon,
      'TypeScript': typescriptIcon,
      'HTML': htmlIcon,
      'CSS': cssIcon,
      'React': reactIcon,
      'Redux': reduxIcon,
      'Zustand': zustandIcon,
      'Express.js': expressjsIcon,
      'Framer Motion': framermotionIcon,
      'Socket.io': socketioIcon,
      'TailwindCSS': tailwindIcon,
      'Storybook': storybookIcon,
      'MySQL': mysqlIcon,
      'MongoDB': mongodbIcon,
      'Git/GitHub': gitIcon,
      'Figma': figmaIcon,
      'Jira': jiraIcon,
      'Notion': notionIcon,
      'Vercel': vercelIcon,
      'Cloudtype': cloudtypeIcon
    };
    
    const needsBackground = [
      'Express.js', 
      'MongoDB', 
      'Git/GitHub', 
      'Notion', 
      'Vercel',
      'Cloudtype',
      'Socket.io'
    ];
    
    const iconSrc = iconMap[skill];
    if (iconSrc) {
      const needsBg = needsBackground.includes(skill);
      
      return (
        <div className={`w-8 h-8 flex items-center justify-center ${
          needsBg ? 'bg-white rounded-full shadow-sm border border-gray-100' : ''
        }`}>
          <img 
            src={iconSrc} 
            alt={skill} 
            className={`object-contain ${
              needsBg ? 'w-5 h-5' : 'w-8 h-8'
            }`}
          />
        </div>
      );
    }
    
    return (
      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
        {skill.substring(0, 2)}
      </div>
    );
  };

  return (
    <section id="skills" className="py-12 lg:py-12" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
              <span className="text-gradient">Skills</span>
            </h2>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          {/* Desktop: Center aligned */}
          <div className="hidden md:flex justify-center gap-4">
            {Object.keys(skillCategories).map((category) => {
              const IconComponent = skillCategories[category as keyof typeof skillCategories].icon;
              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-muted hover:bg-muted/80 text-foreground-secondary hover:text-foreground'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="font-normal text-base">{category}</span>
                </button>
              );
            })}
          </div>
          
          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden flex gap-4 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 min-w-max px-4">
              {Object.keys(skillCategories).map((category) => {
                const IconComponent = skillCategories[category as keyof typeof skillCategories].icon;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
                      activeTab === category
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-muted hover:bg-muted/80 text-foreground-secondary hover:text-foreground'
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="font-normal text-base">{category}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="card group hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-center space-y-3">
                <div className="flex justify-center">{getSkillIcon(skill)}</div>
                <h3 className="font-normal text-base group-hover:text-primary transition-colors">
                  {skill}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;