import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'React와 Node.js로 구축한 풀스택 이커머스 플랫폼입니다. 결제 시스템, 장바구니, 사용자 인증 등을 포함합니다.',
      image: '/project1.jpg',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        '팀 협업을 위한 태스크 관리 애플리케이션입니다. 실시간 업데이트와 드래그 앤 드롭 기능을 제공합니다.',
      image: '/project2.jpg',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description:
        '날씨 API를 활용한 반응형 대시보드입니다. 위치 기반 날씨 정보와 예보를 제공합니다.',
      image: '/project3.jpg',
      tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="container py-20"
    >
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-4xl lg:text-6xl font-bold text-center mb-16"
      >
        <span className="text-gradient">Projects</span>
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * (index + 1) }}
            className="card group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-video bg-muted rounded-xl mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-foreground-secondary">프로젝트 이미지</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-foreground-secondary mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-muted text-foreground-secondary rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={project.github}
                className="flex items-center gap-1 text-sm text-foreground-secondary hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={project.demo}
                className="flex items-center gap-1 text-sm text-foreground-secondary hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
