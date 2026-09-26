import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowDownToLine, Menu, X } from 'lucide-react';

const navigation = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Journey', '#journey'],
  ['Contact', '#contact'],
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    const desktop = window.matchMedia('(min-width: 960px)');
    const onDesktop = () => { if (desktop.matches) setIsOpen(false); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    desktop.addEventListener('change', onDesktop);
    return () => {
      window.removeEventListener('scroll', onScroll);
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
          {navigation.map(([label, href]) => <a className="nav-link" key={href} href={href}>{label}</a>)}
        </div>
        <div className="desktop-cv">{cvLink}</div>
        <button ref={toggleRef} className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div id="mobile-navigation" className="mobile-navigation"
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}>
            <div className="mobile-navigation-inner">
              {navigation.map(([label, href]) => (
                <a className="nav-link" key={href} href={href} onClick={() => setIsOpen(false)}>{label}</a>
              ))}
              {cvLink}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
