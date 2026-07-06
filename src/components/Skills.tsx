import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-slate-200 py-20 sm:py-28 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack"
          description="Languages, frameworks, and tools I use in my day-to-day development work."
        />

        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.04}>
              <div className="grid gap-2 py-4 sm:grid-cols-[180px_1fr] sm:gap-8">
                <h3 className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  {group.group}
                </h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {group.items.join(", ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
