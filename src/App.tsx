import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="app-shell">
      <AnimatedBackground />
      <Navbar />
      <main className="site-content">
        <Hero />
        <About />
        <div id="skills">
          <TechStack />
        </div>
        <Projects />
        <Journey />
        <Contact />
      </main>
    </div>
  );
}
