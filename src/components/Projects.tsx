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
          title="Selected work"
          description="Products I've built and maintained for humanitarian operations, from AI agents and computer vision to M&E, grants, CRM, and data pipelines."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.05}>
              <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-700">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                        {project.name}
                      </h3>
                      {project.ai && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-2 py-0.5 text-xs font-semibold text-purple-700 dark:bg-purple-950/60 dark:text-purple-300">
                          <Sparkles size={12} />
                          AI
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-medium text-purple-600 dark:text-purple-400">
                      {project.tagline}
                    </p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-lg p-2 text-slate-400 transition hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-teal-950 dark:hover:text-teal-400"
                      aria-label={`Open ${project.name}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {project.metric && (
                  <p className="mt-4 text-sm font-semibold text-orange-600 dark:text-orange-400">
                    {project.metric}
                  </p>
                )}

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
