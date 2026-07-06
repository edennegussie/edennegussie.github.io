import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { drive, profile, strengths } from "../data";

export default function About() {
  return (
    <section id="about" className="border-t border-slate-200 py-20 sm:py-28 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="About me"
          // description="A full-stack developer keen to contribute to organizations that use technology to drive social impact, with most of my career spent building software for humanitarian field operations."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <p className="text-lg leading-relaxed text-slate-600 text-justify dark:text-slate-400">
              {profile.summary}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 text-justify dark:text-slate-400">
              {profile.summarySecondary}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 text-justify dark:text-slate-400">
              {drive.body.join(" ")}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {strengths.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
                >
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
