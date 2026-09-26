import { motion, useReducedMotion } from 'motion/react';

type SectionTitleProps = {
  title: string;
  label?: string;
  description?: string;
  id?: string;
};

export default function SectionTitle({ title, label, description, id }: SectionTitleProps) {
  const reduceMotion = useReducedMotion();

  // Preserve the simple headings in sections that are still placeholders.
  if (!label && !description) return <h2 id={id}>{title}</h2>;

  return (
    <motion.header
      className="mb-10 max-w-3xl sm:mb-12"
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: reduceMotion ? 0 : 0.5 }}
    >
      {label && (
        <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-cyan-300">
          <span className="h-px w-7 bg-cyan-400/60" aria-hidden="true" />
          {label}
        </p>
      )}
      <h2 id={id} className="text-[30px] leading-tight font-semibold tracking-[-0.035em] text-slate-50 sm:text-4xl lg:text-[42px]">
        {title}
      </h2>
      {description && <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">{description}</p>}
    </motion.header>
  );
}
