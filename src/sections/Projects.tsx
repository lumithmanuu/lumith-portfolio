import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative overflow-clip border-t border-white/[0.04] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1120px] min-[1600px]:max-w-[1200px]">
        <SectionTitle
          id="projects-heading"
          label="PROJECTS"
          title="Things I've Built"
          description="A selection of projects where I’ve applied software engineering, full-stack development, teamwork, and problem-solving to practical challenges."
        />
        <div className="relative space-y-8 lg:space-y-10">
          <div className="pointer-events-none absolute top-20 -left-16 h-96 w-1/2 rounded-full bg-cyan-500/[0.025] blur-3xl" aria-hidden="true" />
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} reverse={project.featured && index % 2 === 1} />)}
        </div>
      </div>
    </section>
  );
}
