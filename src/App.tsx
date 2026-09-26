import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Leadership from './sections/Leadership';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="app-shell">
      <AnimatedBackground />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="site-content">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Education />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
