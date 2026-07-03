import { Compass, Heart, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { focusAreas, sectors } from "../data";

const icons: Record<string, LucideIcon> = {
  heart: Heart,
  sparkles: Sparkles,
  compass: Compass,
};

const accents = [
  {
    ring: "hover:border-teal-300 dark:hover:border-teal-700",
    chip: "bg-teal-50 text-teal-600 dark:bg-teal-950/50 dark:text-teal-400",
  },
  {
    ring: "hover:border-purple-300 dark:hover:border-purple-700",
    chip: "bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400",
  },
  {
    ring: "hover:border-orange-300 dark:hover:border-orange-700",
    chip: "bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400",
  },
];

export default function Focus() {
  return (
    <section id="focus" className="border-t border-slate-200 py-20 sm:py-28 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Focus"
          title="What I care about right now"
          description="My foundation is social-impact software. I'm building on it with AI, and I'm open to carrying that engineering into new domains."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {focusAreas.map((area, i) => {
            const Icon = icons[area.icon];
            const accent = accents[i % accents.length];
            return (
              <Reveal key={area.title} delay={i * 0.08}>
                <div
                  className={`flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition dark:border-slate-800 dark:bg-slate-900 ${accent.ring}`}
                >
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${accent.chip}`}
                  >
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold text-slate-900 dark:text-white">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {area.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
              Sectors I've worked across
            </h3>
            <ul className="flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <li
                  key={sector}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  {sector}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
