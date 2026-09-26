import { motion, useReducedMotion } from 'motion/react';
import { BrainCircuit, GraduationCap } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { education, professionalDevelopment } from '../data/portfolio';

export default function Education() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="education" aria-labelledby="education-heading" className="relative overflow-clip border-t border-white/[0.04] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1120px] min-[1600px]:max-w-[1200px]">
        <SectionTitle id="education-heading" label="EDUCATION" title="Academic Background"
          description="My academic foundation and the additional learning that continues to shape my technical growth." />

        <motion.article aria-labelledby="degree-heading"
          className="min-w-0 rounded-2xl border border-cyan-400/30 bg-[linear-gradient(135deg,rgba(12,35,49,0.8),rgba(12,20,35,0.7))] p-6 shadow-[0_0_35px_rgba(34,211,238,0.04)] backdrop-blur-md transition-[border-color,box-shadow] duration-200 hover:border-cyan-300/45 hover:shadow-[0_8px_35px_rgba(34,211,238,0.08)] sm:p-8 lg:p-10"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduceMotion ? 0 : 0.5 }}
          whileHover={reduceMotion ? undefined : { y: -3, transition: { duration: 0.2 } }}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="flex size-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/[0.08] text-cyan-200" aria-hidden="true"><GraduationCap size={25} strokeWidth={1.6} /></span>
            <p className="text-xs text-slate-400">{education.date}</p>
          </div>
          <h3 id="degree-heading" className="mt-6 text-2xl leading-snug font-semibold tracking-tight text-slate-100 sm:text-3xl">{education.degree}</h3>
          <p className="mt-3 text-sm leading-6 text-cyan-200">{education.institution}</p>
          <p className="mt-1 text-xs leading-6 text-slate-400">{education.faculty}</p>
          <p className="mt-6 max-w-3xl text-sm leading-[1.95] text-slate-300">{education.description}</p>
        </motion.article>

        <div className="mt-10 sm:mt-12">
          <h3 className="mb-5 text-[10px] font-semibold tracking-[0.18em] text-slate-400">PROFESSIONAL DEVELOPMENT</h3>
          <motion.article aria-labelledby="course-heading"
            className="max-w-3xl rounded-xl border border-sky-300/[0.13] bg-[rgba(12,20,35,0.65)] p-5 backdrop-blur-md transition-[border-color,box-shadow] duration-200 hover:border-cyan-400/35 hover:shadow-[0_8px_30px_rgba(34,211,238,0.05)] sm:p-6"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.1 }}>
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="flex size-9 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-300" aria-hidden="true"><BrainCircuit size={19} strokeWidth={1.6} /></span>
              <span className="rounded-full border border-sky-300/15 px-3 py-1 text-[10px] text-slate-300">{professionalDevelopment.status}</span>
            </div>
            <h4 id="course-heading" className="text-lg font-semibold tracking-tight text-slate-100">{professionalDevelopment.title}</h4>
            <p className="mt-2 text-xs leading-6 text-sky-200/85">{professionalDevelopment.institution} · {professionalDevelopment.duration}</p>
            <p className="mt-4 text-[13px] leading-[1.9] text-slate-400">{professionalDevelopment.description}</p>
            <p className="mt-4 border-t border-sky-200/[0.08] pt-3 text-xs leading-[1.85] text-slate-400">{professionalDevelopment.supportingText}</p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
