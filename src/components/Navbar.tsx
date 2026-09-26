import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownToLine, Menu, X } from 'lucide-react';

const navigation = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Leadership', '#leadership'],
  ['Contact', '#contact'],
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#home');
  const reduceMotion = useReducedMotion();
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateSection = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 24);
      // A top-of-viewport threshold also works for long project sections.
      const threshold = Math.max(120, window.innerHeight * 0.25);
      let current: string = '#home';
      for (const [, href] of navigation) {
        if ((document.querySelector(href)?.getBoundingClientRect().top ?? Infinity) <= threshold) current = href;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = '#contact';
      setActiveSection(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(updateSection); };
    const desktop = window.matchMedia('(min-width: 960px)');
    const onDesktop = () => { if (desktop.matches) setIsOpen(false); };
    updateSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    desktop.addEventListener('change', onDesktop);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
      desktop.removeEventListener('change', onDesktop);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onOutsideClick);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onOutsideClick);
    };
  }, [isOpen]);

  const cvLink = (
    <a className="cv-button" href="/documents/Lumith-Manujaya-CV.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
      <ArrowDownToLine size={15} aria-hidden="true" />
      Download CV
    </a>
  );

  return (
    <nav ref={navRef} className={`navbar${isScrolled ? ' navbar-scrolled' : ''}`} aria-label="Main navigation"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
      }}>
      <div className="navbar-row">
        <a href="#home" className="wordmark" aria-label="Lumith Manujaya home" onClick={() => setIsOpen(false)}>LM<span>.</span></a>
        <div className="desktop-navigation">
          {navigation.map(([label, href]) => <a className="nav-link" key={href} href={href} aria-current={activeSection === href ? 'location' : undefined}>{label}</a>)}
        </div>
        <div className="desktop-cv">{cvLink}</div>
        <button ref={toggleRef} className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      <motion.div id="mobile-navigation" className="mobile-navigation" inert={!isOpen} aria-hidden={!isOpen}
        initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.2 }}>
        <div className="mobile-navigation-inner">
          {navigation.map(([label, href]) => (
            <a className="nav-link" key={href} href={href} aria-current={activeSection === href ? 'location' : undefined}
              onClick={() => {
                setIsOpen(false);
                // Scroll after closing makes the link inert, preserving mobile anchor navigation.
                requestAnimationFrame(() => document.querySelector(href)?.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'start' }));
              }}>{label}</a>
          ))}
          {cvLink}
        </div>
      </motion.div>
    </nav>
  );
}
