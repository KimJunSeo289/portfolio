import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import profileImage from '../assets/KimJunSeo.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="w-60 h-100 lg:w-100 lg:h-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20"
              >
                <img src={profileImage} alt="김준서" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Introduction Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8 text-center md:text-center lg:text-left"
          >
            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl md:text-xl lg:text-3xl font-medium md:font-normal lg:font-normal leading-tight"
              >
                안녕하세요
                <br />
                저는 <span className="text-gradient">프론트엔드 개발자 </span>
                김준서입니다
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-foreground-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                앞으로 계속 바뀌어가는 시대에 적응하며 지속적인 학습을 통해 발전하고,
                <br />
                <span className="text-primary font-medium">
                  행복한 사용자 경험을 만드는 프론트엔드 개발자
                </span>
                가 되고싶습니다.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground-secondary hover:text-primary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-sm">스크롤</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
