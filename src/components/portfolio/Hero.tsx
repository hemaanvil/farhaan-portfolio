import { ArrowDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="film-grain relative flex min-h-[100svh] items-end overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pb-24"
    >
      {/* subtle cinematic light wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 110%, color-mix(in oklab, var(--foreground) 9%, transparent) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[92rem]">
        <p className="eyebrow animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {personalInfo.tagline}
        </p>

        <h1 className="mt-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <span className="display-xl block text-[clamp(3rem,13.5vw,12.5rem)]">Farhaan</span>
          <span className="display-xl block text-[clamp(3rem,13.5vw,12.5rem)]">Sayed</span>
        </h1>

        <div className="mt-10 grid gap-10 border-t border-border pt-8 md:grid-cols-12 md:items-start">
          <p className="display-xl text-2xl md:col-span-4 md:text-3xl">{personalInfo.title}</p>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:col-span-5">
            {personalInfo.intro}
          </p>

          <div className="md:col-span-3 md:justify-self-end">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 border border-foreground px-7 py-4 text-xs uppercase tracking-[0.24em] transition-colors duration-500 hover:bg-foreground hover:text-background"
            >
              View my work
              <ArrowDown className="size-4 transition-transform duration-500 group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
