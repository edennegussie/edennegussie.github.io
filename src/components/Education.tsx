import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { certifications, education } from "../data";

export default function Education() {
  return (
    <section id="education" className="border-t border-slate-200 py-20 sm:py-28 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Education"
          description="Academic background and certifications."
        />

        <Reveal>
          <div className="grid gap-5">
            {education.map((edu) => (
              <div key={edu.degree}>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {edu.school}
                </p>
                <p className="mt-1 text-sm font-medium text-teal-600 dark:text-teal-400">
                  {edu.detail}
                </p>
              </div>
            ))}
          </div>

          {certifications.length > 0 && (
            <div className="mt-8 grid gap-5">
              {certifications.map((cert) => (
                <div key={cert.degree}>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {cert.degree}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {cert.school}
                  </p>
                  {"detail" in cert && cert.detail && (
                    <p className="mt-1 text-sm font-medium text-teal-600 dark:text-teal-400">
                      {cert.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
