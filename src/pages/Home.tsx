import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="container min-h-screen flex items-center justify-center"
    >
      <div className="text-center space-y-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-5xl lg:text-7xl font-bold">
            안녕하세요, <br />
            <span className="text-gradient">개발자</span> 입니다
          </h1>
          <p className="text-xl lg:text-2xl text-foreground-secondary max-w-2xl mx-auto">
            창조적인 아이디어로 세상을 변화시키는 풀스택 개발자
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="btn-primary group">
            프로젝트 보기
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-secondary">이력서 다운로드</button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center space-x-6"
        >
          <a href="#" className="text-foreground-secondary hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-foreground-secondary hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-foreground-secondary hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
