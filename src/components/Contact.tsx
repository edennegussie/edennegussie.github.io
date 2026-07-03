import { Linkedin, Mail, Phone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-200 py-20 sm:py-28 dark:border-slate-800"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something that matters"
          description="Whether it's social-impact tech or a new domain I haven't touched yet, I'd love to hear what you're working on."
        />

        <Reveal>
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-teal-50 via-white to-purple-50 p-8 sm:p-12 dark:border-slate-800 dark:from-teal-950/30 dark:via-slate-900 dark:to-purple-950/30">
            <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400">
              I'm open to full-stack and software engineering roles. My heart is in
              social-impact work, and I'm equally excited to explore new sectors and
              AI-driven products where thoughtful engineering makes a difference.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-600"
              >
                <Mail size={18} />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                <Phone size={18} />
                {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>

            <div className="mt-8">
              <a
                href={profile.cvUrl}
                download
                className="text-sm font-semibold text-teal-600 underline-offset-4 hover:underline dark:text-teal-400"
              >
                Download full CV (PDF)
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
