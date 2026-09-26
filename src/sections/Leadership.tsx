import { motion, useReducedMotion } from 'motion/react';
import { ClipboardCheck, Users } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { leadershipRoles, universityInvolvement } from '../data/portfolio';

const roleIcons = { leadership: Users, logistics: ClipboardCheck };

export default function Leadership() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="leadership" aria-labelledby="leadership-heading" className="relative overflow-clip border-t border-white/[0.04] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1120px] min-[1600px]:max-w-[1200px]">
        <SectionTitle id="leadership-heading" label="LEADERSHIP & INVOLVEMENT" title="Leadership Beyond Code"
          description="Experiences that have strengthened my teamwork, communication, coordination, and ability to take responsibility beyond technical work." />
        <div className="grid gap-5 md:grid-cols-2">
          {leadershipRoles.map((item, index) => {
            const Icon = roleIcons[item.icon];
            return (
              <motion.article key={item.id} aria-labelledby={`leadership-${item.id}`}
                className="flex min-w-0 flex-col rounded-xl border border-cyan-400/20 bg-[rgba(12,20,35,0.72)] p-6 backdrop-blur-md transition-[border-color,box-shadow] duration-200 hover:border-cyan-300/40 hover:shadow-[0_8px_30px_rgba(34,211,238,0.06)] lg:p-8"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08 }}
                whileHover={reduceMotion ? undefined : { y: -3, transition: { duration: 0.2 } }}>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-300" aria-hidden="true"><Icon size={21} strokeWidth={1.6} /></span>
                  <p className="text-xs text-slate-400">{item.date}</p>
                </div>
                <h3 id={`leadership-${item.id}`} className="text-xl leading-snug font-semibold tracking-tight text-slate-100">{item.role}</h3>
                <p className="mt-2 text-sm leading-6 text-sky-200/85">{item.event}</p>
                <p className="mt-5 flex-1 text-[13px] leading-[1.9] text-slate-400">{item.description}</p>
                <p className="mt-5 border-t border-sky-200/[0.08] pt-4 text-xs leading-[1.85] text-slate-300">{item.supportingText}</p>
              </motion.article>
            );
          })}
        </div>
        <div className="mt-10 sm:mt-12">
          <h3 className="mb-5 text-[10px] font-semibold tracking-[0.18em] text-slate-400">MORE UNIVERSITY INVOLVEMENT</h3>
          <ul role="list" className="grid gap-4 sm:grid-cols-2">
            {universityInvolvement.map((item, index) => (
              <motion.li key={item.id}
                className="min-w-0 rounded-lg border border-sky-300/10 bg-[rgba(12,20,35,0.45)] p-5 backdrop-blur-md transition-[border-color,box-shadow] duration-200 hover:border-cyan-400/25 hover:shadow-[0_4px_20px_rgba(34,211,238,0.04)]"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.1 + index * 0.05 }}>
                <p className="text-[10px] leading-5 text-slate-400">{item.date}</p>
                <h4 className="mt-2 text-sm leading-6 font-medium text-slate-200">{item.role}</h4>
                <p className="mt-1 text-xs leading-6 text-slate-400">{item.event}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
