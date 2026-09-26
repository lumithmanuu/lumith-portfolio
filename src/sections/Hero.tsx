import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Code2 } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';

const roles = ['Aspiring Software Engineer', 'AI/ML Enthusiast', 'IT Undergraduate'];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [portraitFailed, setPortraitFailed] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(() => {
      if (!document.hidden) setRoleIndex((index) => (index + 1) % roles.length);
    }, 3200);
    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const entrance = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.5 } },
  };

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-name">
      <div className="hero-layout">
        <motion.div className="hero-copy" initial="hidden" animate="visible"
          transition={{ staggerChildren: reduceMotion ? 0 : 0.075 }}>
          <motion.div className="availability-badge" variants={entrance}>
            <span className="availability-dot" aria-hidden="true" />Available for opportunities
          </motion.div>
          <motion.p className="hero-greeting" variants={entrance}>Hi, I'm</motion.p>
          <motion.h1 id="hero-name" className="hero-name" variants={entrance}>Lumith <span>Manujaya</span></motion.h1>
          <motion.div className="hero-role" variants={entrance}>
            <span className="sr-only">Aspiring Software Engineer, AI/ML Enthusiast, and IT Undergraduate</span>
            <span className="role-prefix" aria-hidden="true">&gt;_</span>
            <span className="role-text" aria-hidden="true">
              {roles.map((role) => <span className="role-measure" key={role}>{role}</span>)}
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={reduceMotion ? 'static' : roleIndex}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }} transition={{ duration: reduceMotion ? 0 : 0.22 }}>
                  {roles[reduceMotion ? 0 : roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="role-cursor" aria-hidden="true" />
          </motion.div>
          <motion.p className="hero-description" variants={entrance}>
            Information Technology undergraduate at the <span>University of Moratuwa</span>, passionate about building practical software solutions, exploring AI/ML, and transforming real-world problems into reliable, user-focused applications.
          </motion.p>
          <motion.div className="hero-actions" variants={entrance}>
            <motion.a href="#projects" className="button button-primary" whileHover={reduceMotion ? undefined : { y: -3 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
              View My Projects <ArrowUpRight size={18} aria-hidden="true" />
            </motion.a>
            <motion.a href="#contact" className="button button-secondary" whileHover={reduceMotion ? undefined : { y: -3 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>Contact Me</motion.a>
          </motion.div>
          <motion.div className="hero-socials" variants={entrance}><SocialLinks /><span className="social-divider" aria-hidden="true" /><span className="social-caption">Let's connect</span></motion.div>
        </motion.div>

        <motion.div className="portrait-stage" initial={{ opacity: 0, x: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, x: 0 }} transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.2 }}>
          <div className="portrait-glow" aria-hidden="true" />
          <div className="portrait-grid" aria-hidden="true" />
          <div className="portrait-orbit portrait-orbit-outer" aria-hidden="true"><span /></div>
          <div className="portrait-orbit portrait-orbit-inner" aria-hidden="true" />
          <motion.div className="portrait-assembly" animate={{ y: reduceMotion ? 0 : [0, -7, 0] }}
            transition={reduceMotion ? { duration: 0 } : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
            <div className="portrait-frame">
              {portraitFailed ? (
                <div className="portrait-fallback" role="img" aria-label="Lumith Manujaya — portrait unavailable"><span>LM<span>.</span></span></div>
              ) : (
                <img src="/images/profile/lumith.jpg" alt="Lumith Manujaya" width="1511" height="2015" fetchPriority="high" onError={() => setPortraitFailed(true)} />
              )}
              <span className="portrait-corner portrait-corner-top" aria-hidden="true" />
              <span className="portrait-corner portrait-corner-bottom" aria-hidden="true" />
            </div>
            <div className="portrait-caption"><span className="portrait-code-icon" aria-hidden="true"><Code2 size={18} strokeWidth={1.5} /></span><div><span className="portrait-caption-label">DRIVEN BY CURIOSITY</span><span className="portrait-caption-text">Building with purpose.</span></div></div>
          </motion.div>
          <span className="portrait-coordinate" aria-hidden="true">DESIGN. DEVELOP. SOLVE.</span>
        </motion.div>
      </div>
      <a className="hero-scroll" href="#about"><span className="scroll-line" aria-hidden="true" />SCROLL TO EXPLORE<ArrowDown size={13} aria-hidden="true" /></a>
    </section>
  );
}
