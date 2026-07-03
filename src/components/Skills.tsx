import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education, skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-slate-200 py-20 sm:py-28 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack"
          description="Languages, frameworks, and tools I use in my day-to-day development work."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.04}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                  {group.group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-slate-50 px-2.5 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16">
            <h3 className="mb-6 font-display text-2xl font-bold text-slate-900 dark:text-white">
              Education
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
                >
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {edu.school}
                  </p>
                  <p className="mt-1 text-sm font-medium text-teal-600 dark:text-teal-400">
                    {edu.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
