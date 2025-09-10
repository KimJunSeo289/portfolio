import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* 1. 내 사진 밑 간단한 자기 소개 */}
        <Hero />
        
        {/* 2. 프로젝트 설명 */}
        <Projects />
        
        {/* 3. 사용 스킬 설명 */}
        <Skills />
      </main>

      <Footer />
    </div>
  );
}

export default App;