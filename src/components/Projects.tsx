import { ExternalLink, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-slate-200 py-20 sm:py-28 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Projects"
          description="Products I've built and maintained for humanitarian operations, from AI agents and computer vision to M&E, grants, CRM, and data pipelines."
        />

        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.05}>
              <article className="grid gap-3 py-5 sm:grid-cols-[180px_1fr] sm:gap-8">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                      {project.name}
                    </h3>
                    {project.ai && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 dark:text-orange-400">
                        <Sparkles size={12} />
                        AI
                      </span>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 transition hover:text-teal-600 dark:hover:text-teal-400"
                        aria-label={`Open ${project.name}`}
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {project.description}
                  </p>
                  {project.metric && (
                    <p className="mt-2 text-sm font-semibold text-orange-600 dark:text-orange-400">
                      {project.metric}
                    </p>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      Tech stack:
                    </span>{" "}
                    {project.tags.join(", ")}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
