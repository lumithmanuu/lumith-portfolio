import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Check, ChevronDown, Cpu, ExternalLink, Landmark, Leaf, Users } from 'lucide-react';
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
  index: number;
  reverse?: boolean;
};

const visualIcons = { leaf: Leaf, credit: Landmark, hardware: Cpu };
const visualBackgrounds = {
  leaf: 'bg-[radial-gradient(ellipse_at_25%_30%,rgba(8,145,178,0.17),transparent_65%),linear-gradient(145deg,#0a1b26,#080d18)]',
  credit: 'bg-[radial-gradient(ellipse_at_70%_35%,rgba(79,70,229,0.16),transparent_65%),linear-gradient(145deg,#0d152b,#080d18)]',
  hardware: 'bg-[radial-gradient(ellipse_at_40%_40%,rgba(56,189,248,0.1),transparent_65%),linear-gradient(145deg,#0d1c28,#080d18)]',
};

// The installed Lucide version omits brand icons; match the existing GitHub mark.
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .75a11.25 11.25 0 0 0-3.558 21.923c.563.104.768-.244.768-.542 0-.267-.01-.974-.015-1.912-3.13.68-3.791-1.509-3.791-1.509-.512-1.3-1.25-1.646-1.25-1.646-1.022-.699.078-.685.078-.685 1.13.08 1.725 1.16 1.725 1.16 1.005 1.722 2.637 1.225 3.279.937.102-.728.393-1.225.715-1.507-2.499-.284-5.126-1.25-5.126-5.565 0-1.23.44-2.234 1.16-3.022-.117-.285-.503-1.43.11-2.98 0 0 .945-.303 3.094 1.155A10.793 10.793 0 0 1 12 6.18c.956.005 1.919.129 2.818.379 2.148-1.458 3.09-1.155 3.09-1.155.615 1.55.228 2.695.112 2.98.722.788 1.159 1.792 1.159 3.022 0 4.326-2.632 5.278-5.14 5.557.404.349.765 1.034.765 2.084 0 1.505-.014 2.719-.014 3.088 0 .3.203.65.774.54A11.25 11.25 0 0 0 12 .75Z" />
    </svg>
  );
}

function ProjectGallery({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<string>>(() => new Set());
  const selectedImage = project.images[selectedIndex] ?? project.images[0];
  if (!selectedImage) return null;

  const groups = [
    { label: 'Featured views', supplementary: false },
    { label: 'Additional views', supplementary: true },
  ];
  const hasSupplementaryImages = project.images.some((image) => image.supplementary);

  return (
    <figure className="w-full min-w-0" aria-label={`${project.title} image gallery`}>
      <div id={`gallery-${project.id}`} className={`relative overflow-hidden rounded-lg border border-sky-200/15 bg-[#050810]/85 shadow-xl ${project.visual === 'hardware' ? 'aspect-[4/3]' : 'aspect-[16/10]'}`}>
        <AnimatePresence mode="wait" initial={false}>
          {failedImages.has(selectedImage.src) ? (
            <motion.p key={`error-${selectedImage.src}`} className="absolute inset-0 flex items-center justify-center p-6 text-center text-xs text-slate-400"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.15 }}>
              This image could not load. Choose another thumbnail or open the full-size image.
            </motion.p>
          ) : (
            <motion.img
              key={selectedImage.src}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="absolute inset-0 h-full w-full object-contain"
              loading="lazy"
              decoding="async"
              initial={{ opacity: reduceMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: reduceMotion ? 1 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.16 }}
              onError={() => setFailedImages((previous) => new Set(previous).add(selectedImage.src))}
            />
          )}
        </AnimatePresence>
      </div>

      <figcaption className="mt-3 flex items-start gap-3 text-[11px] leading-5 text-slate-300" aria-live="polite" aria-atomic="true">
        <span className="shrink-0 font-mono text-[10px] text-cyan-200/70">{String(project.images.indexOf(selectedImage) + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}</span>
        <span>{selectedImage.alt}</span>
      </figcaption>

      {groups.map(({ label, supplementary }) => {
        const images = project.images.map((image, imageIndex) => ({ ...image, imageIndex }))
          .filter((image) => Boolean(image.supplementary) === supplementary);
        if (!images.length) return null;

        return (
          <div key={label} className={supplementary ? 'mt-3 border-t border-sky-200/10 pt-3' : 'mt-4'}>
            {hasSupplementaryImages && <p className={`mb-2 text-[9px] font-medium tracking-[0.12em] uppercase ${supplementary ? 'text-slate-400' : 'text-cyan-200/80'}`}>{label}</p>}
            <ul className="-mx-1 flex gap-2 overflow-x-auto overscroll-x-contain p-1" aria-label={`${project.title}: ${label.toLowerCase()}`} role="list">
              {images.map((image) => {
                const isSelected = selectedImage.src === image.src;
                return (
                  <li key={image.src} className="shrink-0">
                    <button type="button" onClick={() => setSelectedIndex(image.imageIndex)}
                      aria-label={`Show ${image.alt}`} aria-pressed={isSelected} aria-controls={`gallery-${project.id}`} title={image.alt}
                      className={`relative block overflow-hidden rounded-md border-2 bg-[#050810] p-0.5 transition-[border-color,box-shadow,opacity] duration-200 focus-visible:outline-offset-2 ${supplementary ? 'h-11 w-14' : 'h-14 w-20'} ${isSelected ? 'border-cyan-300 opacity-100 shadow-[0_0_12px_rgba(34,211,238,0.15)]' : `border-slate-400/20 hover:border-cyan-300/60 hover:opacity-100 ${supplementary ? 'opacity-70' : 'opacity-85'}`}`}>
                      <img src={image.src} alt="" loading="lazy" decoding="async" className="h-full w-full rounded-sm object-contain" />
                      {isSelected && <span className="absolute right-0 bottom-0 rounded-tl bg-cyan-200 p-0.5 text-slate-950" aria-hidden="true"><Check size={12} strokeWidth={3} /></span>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      <a href={selectedImage.src} target="_blank" rel="noopener noreferrer"
        aria-label={`Open ${selectedImage.alt} at full size (opens in a new tab)`}
        className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-md text-[11px] text-slate-400 transition-colors hover:text-cyan-200">
        <ExternalLink size={13} aria-hidden="true" />View full size
      </a>
    </figure>
  );
}

export default function ProjectCard({ project, index, reverse = false }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const number = String(index + 1).padStart(2, '0');
  const VisualIcon = visualIcons[project.visual];
  const hasImages = project.images.length > 0;
  const buttonClass = 'inline-flex min-h-11 items-center justify-center gap-2.5 rounded-lg border px-4 text-xs font-semibold transition-[border-color,background-color,box-shadow] duration-200';

  return (
    <motion.article
      aria-labelledby={`project-${project.id}`}
      className={`group/project relative grid min-w-0 rounded-2xl border border-sky-300/[0.16] bg-[rgba(12,20,35,0.72)] shadow-[0_18px_60px_rgba(0,0,0,0.12)] backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/30 hover:shadow-[0_12px_48px_rgba(34,211,238,0.06)] ${project.featured ? (reverse ? 'lg:grid-cols-[1.15fr_1fr]' : 'lg:grid-cols-[1fr_1.15fr]') : 'lg:grid-cols-[0.7fr_1.3fr]'}`}
      initial={reduceMotion ? false : { opacity: 0, x: project.featured ? (reverse ? 18 : -18) : 0, y: project.featured ? 0 : 14 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: reduceMotion ? 0 : 0.5 }}
      whileHover={reduceMotion ? undefined : { y: -3, transition: { duration: 0.2 } }}
    >
      <div className={`relative min-w-0 overflow-hidden rounded-t-2xl border-b border-sky-300/10 lg:rounded-t-none lg:border-b-0 ${reverse ? 'lg:order-2 lg:rounded-r-2xl lg:border-l' : 'lg:rounded-l-2xl lg:border-r'} ${project.featured ? 'min-h-[280px] sm:min-h-[340px]' : 'min-h-[230px]'} ${visualBackgrounds[project.visual]}`}>
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(125,211,252,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.3)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute -top-12 left-0 size-56 rounded-full bg-cyan-400/[0.04] blur-3xl transition-transform duration-700 group-hover/project:translate-x-8" aria-hidden="true" />
        <div className={`relative flex h-full min-w-0 items-center justify-center ${hasImages ? 'px-3 pt-14 pb-4 sm:px-5 sm:pb-5' : `p-8 transition-transform duration-500 ${reduceMotion ? '' : 'group-hover/project:scale-[1.02]'}`} ${project.featured ? 'min-h-[280px] sm:min-h-[340px]' : 'min-h-[230px]'}`}>
          {hasImages ? (
            <ProjectGallery project={project} />
          ) : (
            <div className="relative max-w-xs py-5 text-center" role="img" aria-label={`${project.title} — decorative project preview`}>
              <div className="relative mx-auto mb-7 flex size-24 items-center justify-center rounded-3xl border border-cyan-300/20 bg-sky-300/[0.04] text-cyan-200 shadow-[0_0_50px_rgba(34,211,238,0.07)]">
                <span className="absolute -inset-3 rounded-[34px] border border-sky-300/[0.07]" aria-hidden="true" />
                <VisualIcon size={38} strokeWidth={1.1} aria-hidden="true" />
              </div>
              <p className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">{project.title}</p>
              <p className="mx-auto mt-3 max-w-[28ch] text-xs leading-6 text-slate-400">{project.subtitle}</p>
            </div>
          )}
        </div>
        <span className="pointer-events-none absolute top-5 left-6 font-mono text-[10px] tracking-[0.18em] text-cyan-200/65" aria-hidden="true">{number} / {project.featured ? 'FEATURED PROJECT' : 'PROJECT'}</span>
      </div>

      <div className={`min-w-0 p-6 sm:p-8 ${project.featured ? 'xl:p-10' : ''}`}>
        <div className="mb-4 flex flex-wrap items-center gap-2.5">
          <span className="rounded-full border border-cyan-300/15 bg-cyan-400/[0.04] px-3 py-1.5 text-[10px] font-medium text-cyan-100/85">{project.type}</span>
          {project.teamSize && <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-400"><Users size={13} aria-hidden="true" />{project.teamSize} members</span>}
        </div>
        <h3 id={`project-${project.id}`} className={`font-semibold tracking-[-0.035em] text-slate-50 ${project.featured ? 'text-3xl sm:text-[34px]' : 'text-2xl sm:text-[28px]'}`}>{project.title}</h3>
        <p className="mt-2 text-[13px] leading-6 text-sky-200/85">{project.subtitle}</p>
        <p className="mt-5 text-[13px] leading-[1.9] text-slate-400">{project.description}</p>

        <div className="mt-5 rounded-lg border-l-2 border-cyan-400/45 bg-cyan-400/[0.035] px-4 py-4">
          <h4 className="mb-2 text-[9px] font-semibold tracking-[0.17em] text-cyan-300">MY CONTRIBUTION</h4>
          <p className="text-xs leading-[1.9] text-slate-300">{project.contribution}</p>
        </div>

        {project.details && (
          <details className="group/details mt-4 rounded-lg border border-sky-200/10 bg-slate-950/20">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-lg px-4 py-3 text-[11px] font-medium text-slate-300 transition-colors hover:text-cyan-200 [&::-webkit-details-marker]:hidden">
              {project.details.title}<ChevronDown size={15} className="shrink-0 text-slate-400 transition-transform group-open/details:rotate-180" aria-hidden="true" />
            </summary>
            <ul className="space-y-2 px-4 pb-4" role="list">
              {project.details.items.map((item) => <li key={item} className="flex gap-2 text-xs leading-6 text-slate-400"><span className="mt-2.5 size-1 shrink-0 rounded-full bg-cyan-300/60" aria-hidden="true" />{item}</li>)}
            </ul>
          </details>
        )}

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`} role="list">
          {project.technologies.map((technology) => (
            <li key={technology} className="rounded-md border border-cyan-300/[0.12] bg-[#080d18]/70 px-2.5 py-1.5 text-[10px] leading-4 text-slate-300 transition-[border-color,background-color] hover:border-cyan-300/30 hover:bg-cyan-400/[0.05]">{technology}</li>
          ))}
        </ul>

        {(project.githubUrl || project.liveDemoUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.githubUrl && (
              <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub (opens in a new tab)`}
                className={`${buttonClass} border-slate-400/20 bg-slate-950/30 text-slate-200 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]`}
                whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
                <GitHubIcon />GitHub<ArrowUpRight size={14} className="text-slate-400" aria-hidden="true" />
              </motion.a>
            )}
            {project.liveDemoUrl && (
              <motion.a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo (opens in a new tab)`}
                className={`${buttonClass} border-cyan-400/30 bg-cyan-400/[0.08] text-cyan-100 hover:border-cyan-300/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]`}
                whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
                <ExternalLink size={15} aria-hidden="true" />Live Demo
              </motion.a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
