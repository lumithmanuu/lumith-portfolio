import { motion, useReducedMotion } from 'motion/react';
import { Code2, Database, Monitor, Server, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { skills } from '../data/skills';
import type { SkillCategory } from '../data/skills';

const categoryIcons: Record<SkillCategory['id'], LucideIcon> = {
  languages: Code2,
  frontend: Monitor,
  backend: Server,
  databases: Database,
  tools: Wrench,
};

export default function TechStack() {
  const reduceMotion = useReducedMotion();
  const cardEntrance = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.45,
        delay: reduceMotion ? 0 : index * 0.07,
        delayChildren: reduceMotion ? 0 : index * 0.07 + 0.12,
        staggerChildren: reduceMotion ? 0 : 0.045,
      },
    }),
  };
  const pillEntrance = {
    hidden: { opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0.97 },
    visible: { opacity: 1, scale: 1, transition: { duration: reduceMotion ? 0 : 0.25 } },
  };

  return (
    <section id="skills" aria-labelledby="skills-heading" className="relative overflow-clip border-t border-white/[0.04] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1120px] min-[1600px]:max-w-[1200px]">
        <SectionTitle
          id="skills-heading"
          label="TECH STACK"
          title="Technologies I Work With"
          description="Tools and technologies I use to build, experiment, and solve problems."
        />

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-6 left-0 w-1/2 rounded-full bg-cyan-500/[0.035] blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-2/3 w-1/3 rounded-full bg-indigo-500/[0.035] blur-3xl" aria-hidden="true" />
          <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {skills.map(({ id, title, technologies }, index) => {
              const Icon = categoryIcons[id];

              return (
                <motion.article
                  key={id}
                  aria-labelledby={`skills-${id}`}
                  className={`min-w-0 rounded-xl border border-sky-300/[0.13] bg-[rgba(12,20,35,0.65)] p-5 backdrop-blur-md transition-[border-color,box-shadow] duration-200 hover:border-cyan-400/35 hover:shadow-[0_8px_30px_rgba(34,211,238,0.06)] sm:p-6 ${index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}
                  custom={index}
                  variants={cardEntrance}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="mb-5 flex items-center gap-3 border-b border-sky-200/[0.07] pb-5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.035)]" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                    <h3 id={`skills-${id}`} className="text-xs font-semibold tracking-[0.12em] text-slate-200 uppercase">{title}</h3>
                  </div>
                  <ul role="list" className="flex flex-wrap gap-2.5">
                    {technologies.map(({ name, initials }) => (
                      <motion.li
                        key={name}
                        variants={pillEntrance}
                        whileHover={reduceMotion ? undefined : { y: -2, transition: { duration: 0.15 } }}
                        className="inline-flex max-w-full items-center gap-2.5 rounded-lg border border-cyan-300/[0.12] bg-[#080d18]/75 py-2 pr-3 pl-2 text-xs leading-5 text-slate-300 transition-[border-color,box-shadow,color] duration-200 hover:border-cyan-400/35 hover:text-slate-100 hover:shadow-[0_0_14px_rgba(34,211,238,0.05)]"
                      >
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-sky-400/[0.07] font-mono text-[9px] font-medium tracking-tight text-cyan-200/80" aria-hidden="true">{initials}</span>
                        <span>{name}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
