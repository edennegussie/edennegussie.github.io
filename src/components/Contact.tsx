import { Linkedin, Mail, MapPin, Phone, User } from "lucide-react";
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
          title="Contact"
        />

        <Reveal>
          <dl className="space-y-3">
            <div className="grid gap-1 sm:grid-cols-[180px_1fr] sm:gap-8">
              <dt className="flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
                <User size={16} />
                Name
              </dt>
              <dd className="text-sm leading-normal text-slate-700 dark:text-slate-300">
                {profile.name}
              </dd>
            </div>

            <div className="grid gap-1 sm:grid-cols-[180px_1fr] sm:gap-8">
              <dt className="flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
                <MapPin size={16} />
                Address
              </dt>
              <dd className="text-sm leading-normal text-slate-700 dark:text-slate-300">
                {profile.location}
              </dd>
            </div>

            <div className="grid gap-1 sm:grid-cols-[180px_1fr] sm:gap-8">
              <dt className="flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
                <Phone size={16} />
                Phone
              </dt>
              <dd className="text-sm leading-normal">
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="text-slate-700 underline-offset-4 hover:text-teal-600 hover:underline dark:text-slate-300 dark:hover:text-teal-400"
                >
                  {profile.phone}
                </a>
              </dd>
            </div>

            <div className="grid gap-1 sm:grid-cols-[180px_1fr] sm:gap-8">
              <dt className="flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
                <Mail size={16} />
                Email
              </dt>
              <dd className="text-sm leading-normal">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-slate-700 underline-offset-4 hover:text-teal-600 hover:underline dark:text-slate-300 dark:hover:text-teal-400"
                >
                  {profile.email}
                </a>
              </dd>
            </div>

            <div className="grid gap-1 sm:grid-cols-[180px_1fr] sm:gap-8">
              <dt className="flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
                <Linkedin size={16} />
                LinkedIn
              </dt>
              <dd className="text-sm leading-normal">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 underline-offset-4 hover:text-teal-600 hover:underline dark:text-slate-300 dark:hover:text-teal-400"
                >
                  {profile.linkedin}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
