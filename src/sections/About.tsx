import { motion, useReducedMotion } from 'motion/react';
import { BookOpen, BrainCircuit, Code2, GraduationCap, Target } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const informationCards = [
  {
    label: 'University',
    value: 'University of Moratuwa',
    description: 'Faculty of Information Technology',
    icon: GraduationCap,
  },
  {
    label: 'Degree',
    value: 'BSc (Hons) Information Technology',
    description: 'Third-Year Undergraduate',
    icon: BookOpen,
  },
  {
    label: 'Primary Focus',
    value: 'Software Engineering',
    description: 'Full-Stack Development',
    icon: Code2,
  },
  {
    label: 'Currently Exploring',
    value: 'AI & Machine Learning',
    description: 'Supplementary Upskilling',
    icon: BrainCircuit,
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();
  const cardEntrance = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.15 + index * 0.08 },
    }),
  };

  return (
    <section id="about" aria-labelledby="about-heading" className="relative overflow-clip border-t border-white/[0.04] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1120px] min-[1600px]:max-w-[1200px]">
        <SectionTitle
          id="about-heading"
          label="ABOUT ME"
          title="Building Solutions That Matter"
          description="A little about who I am, what I enjoy building, and where I’m heading."
        />

        <motion.div
          className="grid items-start gap-10 min-[900px]:grid-cols-[1.05fr_1fr] min-[900px]:gap-10 lg:gap-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <div className="min-w-0">
            <motion.div
              className="space-y-5 text-sm leading-[1.95] text-slate-400"
              variants={{
                hidden: { opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : -14 },
                visible: { opacity: 1, x: 0, transition: { duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.1 } },
              }}
            >
              <p>
                I'm a third-year <span className="font-medium text-slate-200">BSc (Hons) Information Technology</span> undergraduate at the <span className="font-medium text-slate-200">University of Moratuwa</span> with a strong interest in software engineering, full-stack development, and problem-solving.
              </p>
              <p>
                I enjoy turning real-world problems into practical software solutions. Through individual and team-based projects, I have gained hands-on experience working across frontend development, backend services, databases, and collaborative software development.
              </p>
              <p>
                Alongside my degree, I continue to broaden my technical knowledge through additional learning in AI and machine learning, while keeping software engineering and full-stack development as my primary career focus.
              </p>
            </motion.div>

            <motion.aside
              aria-labelledby="career-goal-heading"
              className="mt-7 flex gap-3.5 rounded-xl border border-cyan-400/20 bg-[rgba(12,26,39,0.65)] p-5 shadow-[0_0_28px_rgba(34,211,238,0.035)] backdrop-blur-md sm:p-6"
              variants={{
                hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 },
                visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.55 } },
              }}
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/[0.07] text-cyan-300" aria-hidden="true">
                <Target size={18} strokeWidth={1.6} />
              </span>
              <div>
                <h3 id="career-goal-heading" className="mb-2 text-[10px] font-semibold tracking-[0.17em] text-cyan-300">CAREER GOAL</h3>
                <p className="text-[13px] leading-[1.85] text-slate-300">
                  To grow as a Software Engineer by contributing to real-world products, strengthening my full-stack development skills, and continuously learning modern technologies.
                </p>
              </div>
            </motion.aside>
          </div>

          <div className="relative min-w-0">
            <div className="pointer-events-none absolute inset-6 rounded-full bg-cyan-500/[0.045] blur-3xl" aria-hidden="true" />
            <div className="relative grid auto-rows-fr gap-4 min-[480px]:grid-cols-2">
              {informationCards.map(({ label, value, description, icon: Icon }, index) => (
                <motion.article
                  key={label}
                  aria-labelledby={`about-card-${index}`}
                  custom={index}
                  variants={cardEntrance}
                  whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
                  className="group min-w-0 rounded-xl border border-sky-300/[0.13] bg-[rgba(12,20,35,0.65)] p-5 backdrop-blur-md transition-[border-color,box-shadow] duration-200 hover:border-cyan-400/35 hover:shadow-[0_8px_30px_rgba(34,211,238,0.06)] sm:p-6"
                >
                  <span className="mb-5 flex size-10 items-center justify-center rounded-[10px] border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.035)]" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <h3 id={`about-card-${index}`} className="mb-2.5 text-[9px] leading-relaxed font-medium tracking-[0.15em] text-slate-400 uppercase">{label}</h3>
                  <p className="max-w-[23ch] text-base leading-snug font-semibold tracking-[-0.015em] text-slate-100">{value}</p>
                  <p className="mt-2.5 text-[11px] leading-relaxed text-slate-400">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
