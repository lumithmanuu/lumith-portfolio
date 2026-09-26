import { motion, useReducedMotion } from 'motion/react';
import { BrainCircuit, ChevronDown, ClipboardCheck, GraduationCap, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { portfolio } from '../data/portfolio';
import type { JourneyMilestone } from '../data/portfolio';

const milestoneIcons: Record<JourneyMilestone['icon'], LucideIcon> = {
  education: GraduationCap,
  leadership: Users,
  logistics: ClipboardCheck,
  learning: BrainCircuit,
};

export default function Journey() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="journey" aria-labelledby="journey-heading" className="relative overflow-clip border-t border-white/[0.04] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1120px] min-[1600px]:max-w-[1200px]">
        <SectionTitle
          id="journey-heading"
          label="MY JOURNEY"
          title="Learning, Building & Leading"
          description="A look at my academic path, leadership experiences, and continuous growth beyond the classroom."
        />

        <div className="relative">
          <motion.div
            className="pointer-events-none absolute top-8 bottom-8 left-1.5 w-px bg-gradient-to-b from-cyan-300/50 via-sky-400/30 to-indigo-400/10 shadow-[0_0_10px_rgba(34,211,238,0.15)] md:left-1/2"
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
          />

          <ol role="list" className="relative space-y-6 md:space-y-3">
            {portfolio.journey.map((milestone, index) => {
              const Icon = milestoneIcons[milestone.icon];
              const isRight = index % 2 === 1;

              return (
                <motion.li
                  key={milestone.id}
                  className="relative pl-7 md:grid md:grid-cols-[1fr_48px_1fr] md:pl-0 lg:grid-cols-[1fr_64px_1fr]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <span className="pointer-events-none absolute top-8 left-1.5 -translate-x-1/2 md:left-1/2" aria-hidden="true">
                    <motion.span
                      className={`block size-3 rounded-full border bg-[#080d18] ring-4 ring-[#050810] ${milestone.highlighted ? 'border-cyan-200 bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.45)]' : 'border-cyan-300/70 shadow-[0_0_10px_rgba(34,211,238,0.2)]'}`}
                      variants={{
                        hidden: { opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0.75 },
                        visible: { opacity: 1, scale: 1, transition: { duration: reduceMotion ? 0 : 0.3 } },
                      }}
                    />
                  </span>

                  <motion.article
                    aria-labelledby={`journey-${milestone.id}`}
                    className={`min-w-0 rounded-xl border p-5 backdrop-blur-md transition-[border-color,box-shadow] duration-200 hover:border-cyan-300/40 hover:shadow-[0_8px_30px_rgba(34,211,238,0.06)] sm:p-6 ${isRight ? 'md:col-start-3' : 'md:col-start-1'} ${milestone.highlighted ? 'border-cyan-400/30 bg-[linear-gradient(135deg,rgba(12,35,49,0.8),rgba(12,20,35,0.7))] shadow-[0_0_30px_rgba(34,211,238,0.04)]' : 'border-sky-300/[0.13] bg-[rgba(12,20,35,0.65)]'}`}
                    variants={{
                      hidden: { opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : (isRight ? 12 : -12) },
                      visible: { opacity: 1, x: 0, transition: { duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.07 + index * 0.04 } },
                    }}
                    whileHover={reduceMotion ? undefined : { y: -3, transition: { duration: 0.2 } }}
                  >
                    <div className="mb-4 flex items-start gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.035)]" aria-hidden="true">
                        <Icon size={19} strokeWidth={1.6} />
                      </span>
                      <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-x-3 gap-y-1 pt-0.5">
                        <p className="text-[9px] leading-5 font-semibold tracking-[0.13em] text-cyan-200/90 uppercase">{milestone.category}</p>
                        <p className="text-[10px] leading-5 text-slate-400">{milestone.date}</p>
                      </div>
                    </div>
                    <h3 id={`journey-${milestone.id}`} className={`leading-snug font-semibold tracking-[-0.02em] text-slate-100 ${milestone.highlighted ? 'text-xl' : 'text-lg'}`}>{milestone.title}</h3>
                    {milestone.organization && <p className="mt-2 text-xs leading-6 text-sky-200/85">{milestone.organization}</p>}
                    <p className="mt-4 text-[13px] leading-[1.9] text-slate-400">{milestone.description}</p>
                    {milestone.supportingText && <p className="mt-4 border-t border-sky-200/[0.08] pt-3 text-xs leading-[1.85] text-slate-300">{milestone.supportingText}</p>}
                  </motion.article>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <motion.div
          className="mt-10 md:mt-12"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
        >
          <details className="group/involvement rounded-xl border border-sky-300/[0.12] bg-[rgba(12,20,35,0.5)] backdrop-blur-md">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 text-slate-300 transition-colors hover:text-cyan-200 sm:px-6 [&::-webkit-details-marker]:hidden">
              <h3 className="text-sm font-medium">More University Involvement</h3>
              <ChevronDown size={17} className="shrink-0 text-cyan-200/70 transition-transform group-open/involvement:rotate-180" aria-hidden="true" />
            </summary>
            <ul role="list" className="grid gap-x-8 border-t border-sky-200/[0.07] px-5 pb-2 sm:px-6 md:grid-cols-2">
              {portfolio.universityInvolvement.map(({ id, role, event, date }) => (
                <li key={id} className="min-w-0 py-4">
                  <p className="text-[10px] leading-5 text-slate-400">{date}</p>
                  <h4 className="mt-1 text-[13px] leading-6 font-medium text-slate-200">{event}</h4>
                  <p className="mt-1 text-xs leading-6 text-slate-400">{role}</p>
                </li>
              ))}
            </ul>
          </details>
        </motion.div>
      </div>
    </section>
  );
}
