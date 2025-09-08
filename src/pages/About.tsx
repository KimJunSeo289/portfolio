import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="container py-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-6xl font-bold text-center mb-16"
        >
          <span className="text-gradient">About Me</span>
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold">안녕하세요! 👋</h2>
            <div className="space-y-4 text-foreground-secondary">
              <p>
                저는 혁신적인 웹 애플리케이션을 만드는 것을 좋아하는 풀스택 개발자입니다. 사용자
                경험과 성능을 중시하며, 항상 새로운 기술을 학습하고 적용하는 것을 즐깁니다.
              </p>
              <p>
                React, TypeScript, Node.js를 주로 사용하며, 최신 웹 기술 트렌드에 관심이 많습니다.
                클린 코드와 효율적인 아키텍처 설계에 중점을 두고 개발합니다.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="card"
          >
            <h3 className="text-xl font-semibold mb-4">기술 스택</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
