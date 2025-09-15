import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Calendar, Users, Award, Figma, Play } from 'lucide-react';
import unearImage from '../assets/unear.png';
import yoplanImage from '../assets/yoplan.png';
import roadpickImage from '../assets/roadpick.png';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 1,
      title: 'Unear',
      subtitle: '위치 기반 멤버십 혜택 웹서비스',
      period: '2025.06.30 ~ 2025.08.07',
      team: '7명 (FE 4명, BE 3명)',
      role: '프론트엔드 개발',
      achievement: 'LG유플러스 유레카 교육과정 최종 융합 프로젝트 1등 최우수상 수상',
      description: [
        '대상: LG U+ 팝업 스토어 이용 고객 및 지역 소상공인',
        '기획의도: LG U+ 팝업 스토어를 중심으로 한 위치 기반 멤버십 혜택 플랫폼을 통해 고객에게는 맞춤형 할인 혜택을, 소상공인에게는 고객 유입 효과를 제공하는 상생 생태계 구축',
        '핵심기능: 위치 기반 제휴처 탐색 및 실시간 알림 시스템, 방문/결제 인증을 통한 스탬프 적립 및 룰렛 이벤트, 개인화된 할인 스토리 및 멤버십 혜택 관리, 멤버십 바코드 통합 관리 및 소셜 로그인',
        '담당 역할: 공통 컴포넌트 개발, 메인 페이지 개발, 마이페이지 개발, 알림 시스템 연동, 로그인 구현',
      ],
      tech: [
        'React',
        'TypeScript',
        'Vite',
        'TailwindCSS',
        'Material-UI',
        'Framer Motion',
        'Zustand',
        'TanStack Query',
        'Storybook',
        'Spring Boot',
        'JPA',
        'MySQL',
        'Kakao Maps API',
        'OAuth(Kakao, Google, Naver)',
        'Docker',
        'AWS EC2',
      ],
      links: {
        github: 'https://github.com/ureca-poject-unear/unear-frontend',
        site: 'www.unear.site',
        figma:
          'https://www.figma.com/design/J8kcia6vzarmRddDKSBaEg/-%EC%9C%A0%EB%A0%88%EC%B9%B4-%EC%9C%B5%ED%95%A9%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8--7%ED%8C%80?node-id=400-217&t=Ui8FrbRresNRaugl-1',
        demo: 'https://www.youtube.com/watch?v=6NjBhV3zJFI',
      },
      siteDisabled: true,
      image: unearImage,
    },
    {
      id: 2,
      title: 'YoPlan',
      subtitle: '요금제 추천 웹서비스',
      period: '2025.06.09 ~ 2025.06.27',
      team: '5명',
      role: '백엔드 및 프론트엔드 개발',
      achievement: '가장 완성도 높은 프로젝트로 평가',
      description: [
        '대상: 통신사 요금제 선택에 어려움을 겪는 20-40대 사용자',
        '기획의도: 복잡하고 다양한 통신사 요금제 중에서 개인의 사용 패턴에 맞는 최적의 요금제를 AI 기반으로 추천하여 사용자의 의사결정을 돕고자 기획',
        '핵심기능: AI 챗봇 기반 실시간 요금제 상담, 개인화된 요금제 진단 및 추천 시스템, 요금제 상세 비교, 사용자별 북마크 및 개인화 서비스',
        '담당 역할: 요금제 진단 시스템 개발, 요금제 비교 기능 구현, 마이페이지 개발, 백엔드 개발, 로그인/로그아웃 시스템 구현 ',
      ],
      tech: [
        'React',
        'Vite',
        'TailwindCSS',
        'Motion',
        'Socket.io',
        'Axios',
        'React Router',
        'Node.js',
        'Express',
        'MongoDB',
        'JWT',
        'OpenAI API',
      ],
      frontendGithub: 'https://github.com/ureca-chatbot-team3/Ureca-Chatbot-Team3-Frontend',
      backendGithub: 'https://github.com/ureca-chatbot-team3/Ureca-Chatbot-Team3-Backend',
      demo: 'https://yoplan.vercel.app/',
      demoVideo: 'https://youtu.be/WNlEKSNukGk?si=7OwJG2_b69Xdbpz7',
      figma:
        'https://www.figma.com/design/CaxLZjtFqQi5twrWLiql1V/3%EC%A1%B0-%7C-%EC%9A%94%ED%94%8C%EB%9E%9C?node-id=16-117&t=nDeQgkd8jKFQ2xSV-1',
      image: yoplanImage,
    },
    {
      id: 3,
      title: 'RoadPick',
      subtitle: '여행 도움 웹플랫폼',
      period: '2025.05.07 ~ 2025.05.20',
      team: '4명',
      role: '팀장 및 프론트엔드, 백엔드 개발',
      achievement: '팀장으로서 프로젝트 성공적 완료',
      description: [
        '대상: 효율적인 여행 계획을 원하는 20-30대 사용자',
        '기획의도: 바쁜 일상 속에서도 체계적이고 효율적인 여행 일정을 관리할 수 있는 플랫폼을 통해 사용자 맞춤형 여행 경험을 제공하고자 기획',
        '핵심기능: 지도 기반 관광지 및 축제 정보 탐색, 여행지 천 기능 및 개인화된 목록 관리, 캘린더 기반 여행 일정 생성 및 관리, 반응형 모바일 퍼스트 디자인',
        '담당 역할: 지도 페이지 제작 (Kakao Maps API 연동), 로그인/로그아웃 시스템 및 찜 기능 구현, 백엔드 개발',
      ],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Kakao Maps API', '한국관광공사 API'],
      frontendGithub: 'https://github.com/yeji424/road-pick-fe',
      backendGithub: 'https://github.com/yeji424/road-pick-be',
      demo: 'https://roadpick.vercel.app/',
      figma:
        'https://www.figma.com/design/2fA8rdz6ypZK6xTvbVprQP/%EB%A1%9C%EB%93%9C%ED%94%BD-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%95%88?node-id=0-1&t=XiUiCJcOuErrIo0X-1',
      image: roadpickImage,
    },
  ];

  const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
    const isEven = index % 2 === 0;

    return (
      <div
        className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
      >
        {/* 텍스트 섹션 */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={`space-y-6 md:space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}
        >
          <div className="space-y-2">
            <h3 className="text-3xl lg:text-4xl font-semibold">
              <span className="text-white">{project.title}</span>
            </h3>
            <h4 className="text-xl">
              <span className="text-primary font-medium">{project.subtitle}</span>
            </h4>

            {/* 모바일에서만 보이는 이미지 */}
            <div className="block lg:hidden mt-6 mb-4">
              <div className="relative group hover:scale-105 transition-transform duration-300">
                <img
                  src={project.image}
                  alt={`${project.title} 프로젝트 스크린샷`}
                  className="w-full h-auto object-cover shadow-2xl rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-base">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-foreground-secondary" />
              <span className="text-white font-normal">기간:</span>
              <span className="text-white">{project.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-foreground-secondary" />
              <span className="text-white font-normal">팀 구성:</span>
              <span className="text-white">{project.team}</span>
              <span className="text-primary">|</span>
              <span className="text-white font-normal">역할:</span>
              <span className="text-white">{project.role}</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Award className="h-4 w-4" />
              <span>{project.achievement}</span>
            </div>
          </div>

          <div className="space-y-3">
            {project.description.map((desc, idx) => {
              // 강조할 키워드들 정의
              const keywords = ['대상:', '기획의도:', '핵심기능:', '담당 역할:'];
              
              // 현재 설명이 키워드로 시작하는지 확인
              const startsWithKeyword = keywords.some(keyword => desc.startsWith(keyword));
              
              if (startsWithKeyword) {
                // 키워드와 설명을 분리
                const colonIndex = desc.indexOf(':');
                const keyword = desc.substring(0, colonIndex + 1);
                const content = desc.substring(colonIndex + 1).trim();
                
                return (
                  <p key={idx} className="text-foreground-secondary leading-relaxed text-base">
                    <span className="text-white font-normal">{keyword}</span>
                    <span className="ml-1">{content}</span>
                  </p>
                );
              } else {
                return (
                  <p key={idx} className="text-foreground-secondary leading-relaxed text-base">
                    {desc}
                  </p>
                );
              }
            })}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted text-foreground-secondary rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {project.links ? (
              <>
                <a
                  href={project.links.github}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                {project.siteDisabled ? (
                  <span className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-base text-foreground-secondary/50 cursor-not-allowed">
                    <ExternalLink className="h-4 w-4" />
                    Site (서버 만료)
                  </span>
                ) : (
                  <a
                    href={`https://${project.links.site}`}
                    className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted/50 transition-colors text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Site
                  </a>
                )}
                <a
                  href={project.links.figma}
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted/50 transition-colors text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Figma className="h-4 w-4" />
                  Figma
                </a>
                <a
                  href={project.links.demo}
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted/50 transition-colors text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="h-4 w-4" />
                  시연영상
                </a>
              </>
            ) : project.frontendGithub ? (
              /* YoPlan, RoadPick 프로젝트의 경우 */
              <>
                <a
                  href={project.frontendGithub}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Frontend
                </a>
                <a
                  href={project.backendGithub}
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted/50 transition-colors text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Backend
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted/50 transition-colors text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Site
                </a>
                {project.figma && (
                  <a
                    href={project.figma}
                    className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted/50 transition-colors text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Figma className="h-4 w-4" />
                    Figma
                  </a>
                )}
                {project.demoVideo && (
                  <a
                    href={project.demoVideo}
                    className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted/50 transition-colors text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="h-4 w-4" />
                    시연영상
                  </a>
                )}
              </>
            ) : null}
          </div>
        </motion.div>

        {/* 이미지 섹션 - 데스크톱에서만 보이는 */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
          className={`hidden lg:block ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
        >
          <div className="relative group hover:scale-105 transition-transform duration-300">
            <img
              src={project.image}
              alt={`${project.title} 프로젝트 스크린샷`}
              className="w-full h-auto object-cover shadow-2xl rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-4 lg:py-12 bg-background-secondary/50" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
              <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            LG유플러스 유레카 SW교육과정에서 진행한 주요 프로젝트들입니다.
            <br />각 프로젝트를 통해 새로운 기술을 학습하고 실무 역량을 키워왔습니다.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
