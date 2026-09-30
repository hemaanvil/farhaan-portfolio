import { User } from "lucide-react";
import { personalInfo, tools, editingStyleCards } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[92rem]">
        <Reveal>
          <SectionHeading index="02 — About" title="About Me" />
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <figure className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm bg-surface ring-1 ring-hairline">
              {personalInfo.profilePhoto ? (
                <img
                  src={personalInfo.profilePhoto}
                  alt={`Portrait of ${personalInfo.name}, video editor`}
                  loading="lazy"
                  className="size-full object-cover"
                />
              ) : (
                <div className="flex size-full flex-col items-center justify-center gap-4">
                  <User className="size-7 text-muted-foreground" aria-hidden />
                  <figcaption className="eyebrow">Profile photo — to be added</figcaption>
                </div>
              )}
            </figure>
          </Reveal>

          <Reveal className="md:col-span-8" delay={120}>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {personalInfo.about}
            </p>

            <div className="mt-14">
              <h3 className="eyebrow">Tools I Use</h3>
              <ul className="mt-5 flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <li
                    key={tool}
                    className="border border-border px-5 py-3 text-xs uppercase tracking-[0.2em] transition-colors duration-500 hover:border-foreground"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-24">
          <h3 className="display-xl text-[clamp(1.75rem,4vw,3rem)]">My Editing Style</h3>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {personalInfo.editingStyle}
          </p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {editingStyleCards.map((card, i) => (
            <Reveal as="li" key={card.label} delay={(i % 3) * 100}>
              <div className="h-full bg-background p-8 transition-colors duration-500 hover:bg-surface">
                <p className="display-xl text-lg">{card.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
