import { Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

// The installed Lucide version does not include brand icons.
function GitHubIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .75a11.25 11.25 0 0 0-3.558 21.923c.563.104.768-.244.768-.542 0-.267-.01-.974-.015-1.912-3.13.68-3.791-1.509-3.791-1.509-.512-1.3-1.25-1.646-1.25-1.646-1.022-.699.078-.685.078-.685 1.13.08 1.725 1.16 1.725 1.16 1.005 1.722 2.637 1.225 3.279.937.102-.728.393-1.225.715-1.507-2.499-.284-5.126-1.25-5.126-5.565 0-1.23.44-2.234 1.16-3.022-.117-.285-.503-1.43.11-2.98 0 0 .945-.303 3.094 1.155A10.793 10.793 0 0 1 12 6.18c.956.005 1.919.129 2.818.379 2.148-1.458 3.09-1.155 3.09-1.155.615 1.55.228 2.695.112 2.98.722.788 1.159 1.792 1.159 3.022 0 4.326-2.632 5.278-5.14 5.557.404.349.765 1.034.765 2.084 0 1.505-.014 2.719-.014 3.088 0 .3.203.65.774.54A11.25 11.25 0 0 0 12 .75Z" />
    </svg>
  );
}

const links = [
  { label: 'GitHub (opens in a new tab)', href: 'https://github.com/lumithmanuu', icon: <GitHubIcon />, external: true },
  { label: 'LinkedIn (opens in a new tab)', href: 'https://www.linkedin.com/in/lumith-manujaya-681776300/', icon: <span className="linkedin-icon" aria-hidden="true">in</span>, external: true },
  { label: 'Email Lumith Manujaya', href: 'mailto:lumithmanuu@gmail.com', icon: <Mail size={19} strokeWidth={1.7} aria-hidden="true" />, external: false },
];

export default function SocialLinks() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="social-links">
      {links.map(({ label, href, icon, external }) => (
        <motion.a key={href} href={href} className="social-link" aria-label={label} title={label}
          target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
          whileHover={reduceMotion ? undefined : { scale: 1.07, y: -2 }}
          whileTap={reduceMotion ? undefined : { scale: 0.97 }}>
          {icon}
        </motion.a>
      ))}
    </div>
  );
}
