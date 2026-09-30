import { ArrowUpRight } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Contact() {
  const socials = socialLinks.filter((link) => link.url);

  return (
    <section id="contact" className="border-t border-border px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[92rem]">
        <Reveal>
          <p className="eyebrow">03 — Contact</p>
          <h2 className="display-xl mt-6 text-[clamp(2.5rem,10vw,9rem)]">
            Let&apos;s work
            <br />
            together
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-12 md:items-start">
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:col-span-6">
              {personalInfo.contactMessage}
            </p>

            <div className="md:col-span-6 md:justify-self-end">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-3 border border-foreground px-8 py-5 text-xs uppercase tracking-[0.24em] transition-colors duration-500 hover:bg-foreground hover:text-background"
              >
                Email me
                <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <p className="mt-5 text-sm text-muted-foreground">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="underline-offset-4 transition-colors duration-300 hover:text-foreground hover:underline"
                >
                  {personalInfo.email}
                </a>
              </p>

              {socials.length > 0 ? (
                <ul className="mt-8 flex flex-wrap gap-6">
                  {socials.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
