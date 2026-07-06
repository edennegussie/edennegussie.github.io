import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-slate-200 py-20 sm:py-28 dark:border-slate-800"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Experience"
          description="Over 8 years across NGOs, consultancies, and R&D, building and maintaining production web applications."
        />

        <div className="relative space-y-8">
          <div className="absolute top-2 bottom-2 left-[7px] hidden w-px bg-slate-200 sm:block dark:bg-slate-800" />

          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.05}>
              <article className="relative sm:pl-10">
                <div className="absolute top-2 left-0 hidden h-3.5 w-3.5 rounded-full border-2 border-teal-500 bg-white sm:block dark:bg-slate-950" />

                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="mt-1 font-medium text-teal-600 dark:text-teal-400">
                        {exp.company}
                        <span className="font-normal text-slate-500 dark:text-slate-400">
                          , {exp.sector}
                        </span>
                      </p>
                      <p className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {exp.projects.length === 1 ? "Project:" : "Projects:"}
                        </span>{" "}
                        {exp.projects.join(", ")}
                      </p>
                    </div>
                    <time className="shrink-0 text-base font-medium italic text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </time>
                  </div>

                  <ul className="mt-3 space-y-2.5">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-base leading-relaxed text-slate-600 dark:text-slate-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
