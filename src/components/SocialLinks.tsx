import { ArrowUpRight, Mail } from 'lucide-react';
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
  { title: 'GitHub', value: '@lumithmanuu', label: 'GitHub (opens in a new tab)', href: 'https://github.com/lumithmanuu', icon: <GitHubIcon />, external: true },
  { title: 'LinkedIn', value: 'Lumith Manujaya', label: 'LinkedIn (opens in a new tab)', href: 'https://www.linkedin.com/in/lumith-manujaya-681776300/', icon: <span className="linkedin-icon" aria-hidden="true">in</span>, external: true },
  { title: 'Email', value: 'lumithmanuu@gmail.com', label: 'Email Lumith Manujaya', href: 'mailto:lumithmanuu@gmail.com', icon: <Mail size={19} strokeWidth={1.7} aria-hidden="true" />, external: false },
];

type SocialLinksProps = {
  variant?: 'icons' | 'contact';
};

export default function SocialLinks({ variant = 'icons' }: SocialLinksProps) {
  const reduceMotion = useReducedMotion();
  const isContact = variant === 'contact';
  const orderedLinks = isContact ? [...links.filter((link) => !link.external), ...links.filter((link) => link.external)] : links;

  return (
    <div className={isContact ? 'flex flex-col gap-3 lg:gap-2' : 'social-links'}>
      {orderedLinks.map(({ title, value, label, href, icon, external }, index) => (
        <motion.a key={href} href={href}
          className={isContact ? 'group/contact flex min-w-0 items-center gap-3.5 rounded-xl border border-sky-300/[0.13] bg-[rgba(12,20,35,0.65)] p-4 lg:py-2.5 backdrop-blur-md transition-[border-color,box-shadow] duration-200 hover:border-cyan-400/35 hover:shadow-[0_4px_24px_rgba(34,211,238,0.05)]' : 'social-link'}
          aria-label={isContact ? `${title}: ${value}${external ? ' (opens in a new tab)' : ''}` : label} title={label}
          target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
          initial={isContact && !reduceMotion ? { opacity: 0, y: 8 } : undefined}
          whileInView={isContact ? { opacity: 1, y: 0 } : undefined}
          viewport={isContact ? { once: true, amount: 0.2 } : undefined}
          transition={isContact ? { duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.07 } : undefined}
          whileHover={reduceMotion ? undefined : { scale: isContact ? 1 : 1.03, y: -2, transition: { duration: 0.2, delay: 0 } }}
          whileTap={reduceMotion ? undefined : { scale: isContact ? 0.99 : 0.97 }}>
          {isContact ? (
            <>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-200" aria-hidden="true">{icon}</span>
              <span className="min-w-0 flex-1">
                <span className="mb-1 block text-[9px] font-medium tracking-[0.15em] text-slate-400 uppercase">{title}</span>
                <span className="block text-[13px] leading-6 break-words text-slate-200">{value}</span>
              </span>
              <ArrowUpRight size={16} className="shrink-0 text-slate-500 transition-colors group-hover/contact:text-cyan-300" aria-hidden="true" />
            </>
          ) : icon}
        </motion.a>
      ))}
    </div>
  );
}
