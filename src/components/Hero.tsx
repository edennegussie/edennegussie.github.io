import { ArrowDown, Mail, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "../data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -top-32 left-1/3 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-20 right-0 h-[320px] w-[320px] rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-800 dark:border-teal-800 dark:bg-teal-950/50 dark:text-teal-300">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Social-impact driven · exploring AI · open to new sectors
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="font-display max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
            <span className="bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              {profile.name.split(" ")[0]}
            </span>{" "}
            {profile.name.split(" ").slice(1).join(" ")}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-xl font-semibold text-slate-700 sm:text-2xl dark:text-slate-300">
            {profile.role}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={16} className="text-teal-500" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail size={16} className="text-teal-500" />
              {profile.email}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-600"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-orange-300 hover:bg-orange-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-orange-700 dark:hover:bg-orange-950/30"
            >
              Get in touch
            </a>
          </div>
        </Reveal>

        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to about"
            className="text-slate-400 transition hover:text-teal-500"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
