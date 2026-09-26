import type { FormEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Send } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import SocialLinks from '../components/SocialLinks';

const inputClass = 'mt-2 block w-full min-w-0 rounded-lg border border-slate-400/20 bg-[#080d18]/80 px-3.5 py-3 text-base leading-6 text-slate-100 transition-[border-color,box-shadow] duration-200 sm:text-sm hover:border-slate-400/35 focus:border-cyan-400/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.08)] focus:outline-none';

function validateRequiredField(event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
  const field = event.currentTarget;
  field.setCustomValidity(field.value.trim() ? '' : 'Please fill out this field.');
}

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.currentTarget;

  // Also validate here so whitespace-only values cannot become an empty draft.
  for (const field of Array.from(form.elements)) {
    if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
      field.setCustomValidity(field.value.trim() ? '' : 'Please fill out this field.');
    }
  }
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const name = String(data.get('name') ?? '').trim();
  const email = String(data.get('email') ?? '').trim();
  const subject = String(data.get('subject') ?? '').trim();
  const message = String(data.get('message') ?? '').trim();
  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

  window.location.href = `mailto:lumithmanuu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-clip border-t border-white/[0.04] px-6 pt-20 pb-10 sm:px-8 sm:pt-24 sm:pb-12 lg:px-12 lg:pt-28">
      <div className="pointer-events-none absolute top-1/3 -right-24 size-96 rounded-full bg-cyan-500/[0.035] blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-1/3 rounded-full bg-indigo-500/[0.025] blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1120px] min-[1600px]:max-w-[1200px]">
        <SectionTitle
          id="contact-heading"
          label="GET IN TOUCH"
          title="Let's Build Something Together"
          description="I'm currently open to internship opportunities, collaborations, and conversations about software development and technology."
        />

        <div className="grid items-start gap-10 min-[900px]:grid-cols-[1fr_1.05fr] lg:gap-16">
          <motion.div
            className="min-w-0"
            initial={reduceMotion ? false : { opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: reduceMotion ? 0 : 0.5 }}
          >
            <p className="max-w-lg text-sm leading-[1.95] text-slate-400">
              I'm always interested in opportunities to learn, contribute, and work on meaningful software projects. If you'd like to discuss an internship, collaboration, project, or just connect, feel free to reach out.
            </p>
            <div className="mt-6"><SocialLinks variant="contact" /></div>

            <aside aria-labelledby="contact-availability" className="mt-6 rounded-xl border border-cyan-400/20 bg-[rgba(12,26,39,0.65)] p-5 shadow-[0_0_28px_rgba(34,211,238,0.035)] backdrop-blur-md">
              <h3 id="contact-availability" className="mb-3 flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.15em] text-cyan-200">
                <span className="size-1.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.35)]" aria-hidden="true" />
                CURRENTLY OPEN TO
              </h3>
              <p className="text-sm leading-6 font-medium text-slate-100">Software Engineering Internship Opportunities</p>
              <p className="mt-2 text-xs leading-6 text-slate-400">Interested in full-stack development, backend engineering, and practical software projects.</p>
            </aside>

            <div className="mt-6 [&_.social-links]:flex-wrap"><SocialLinks /></div>
          </motion.div>

          <motion.form
            aria-labelledby="contact-form-heading"
            aria-describedby="contact-form-help"
            onSubmit={handleSubmit}
            className="min-w-0 rounded-2xl border border-sky-300/[0.16] bg-[rgba(12,20,35,0.72)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-md sm:p-8"
            initial={reduceMotion ? false : { opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.1 }}
          >
            <h3 id="contact-form-heading" className="mb-6 text-xl font-semibold tracking-tight text-slate-100">Send a message</h3>
            <div className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="text-xs font-medium text-slate-300">Name</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required onInput={validateRequiredField} className={inputClass} />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-xs font-medium text-slate-300">Email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required onInput={validateRequiredField} className={inputClass} />
              </div>
              <div>
                <label htmlFor="contact-subject" className="text-xs font-medium text-slate-300">Subject</label>
                <input id="contact-subject" name="subject" type="text" required onInput={validateRequiredField} className={inputClass} />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-xs font-medium text-slate-300">Message</label>
                <textarea id="contact-message" name="message" rows={5} required onInput={validateRequiredField} className={`${inputClass} min-h-36 resize-y`} />
              </div>
            </div>
            <motion.button
              type="submit"
              className="mt-6 flex min-h-12 w-full items-center justify-center gap-2.5 rounded-lg border border-cyan-200/20 bg-gradient-to-r from-cyan-400 to-blue-400 px-5 py-3 text-xs font-semibold text-[#03121b] shadow-[0_4px_20px_rgba(11,169,220,0.08)] transition-shadow hover:shadow-[0_6px_28px_rgba(34,211,238,0.2)]"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.99 }}
            >
              <Send size={16} aria-hidden="true" />Send Message
            </motion.button>
            <p id="contact-form-help" className="mt-3 text-center text-[11px] leading-6 text-slate-400">Opens your email app to send the message.</p>
          </motion.form>
        </div>

        <p className="mt-16 border-t border-sky-200/[0.08] pt-7 text-center text-xs leading-6 tracking-wide text-slate-400 sm:mt-20">Let's turn ideas into something useful.</p>
      </div>
    </section>
  );
}
