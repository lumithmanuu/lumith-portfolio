import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="site-content">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
