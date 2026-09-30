import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ReelCard } from "./ReelCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function Work() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[92rem]">
        <Reveal>
          <SectionHeading index="01 — Work" title="Selected Work">
            A selection of my video edits.
          </SectionHeading>
        </Reveal>


        <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal as="li" key={project.id} delay={(i % 3) * 120}>
              <ReelCard project={project} index={i} onOpen={setActive} />
            </Reveal>
          ))}
        </ul>
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="border-border bg-popover sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="display-xl text-3xl">{active?.title}</DialogTitle>
            <DialogDescription className="pt-2 text-sm leading-relaxed text-muted-foreground">
              {active?.description}
            </DialogDescription>
          </DialogHeader>

          {active?.fullVideoUrl ? (
            <a
              href={active.fullVideoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group mt-2 inline-flex items-center justify-center gap-3 border border-foreground px-6 py-4 text-xs uppercase tracking-[0.24em] transition-colors duration-500 hover:bg-foreground hover:text-background"
            >
              Watch full reel
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ) : (
            <p className="mt-2 border border-dashed border-border px-6 py-4 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Full video link — to be added
            </p>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
