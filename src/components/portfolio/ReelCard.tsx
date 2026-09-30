import { useEffect, useRef } from "react";
import { ArrowUpRight, Film } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ReelCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Only play the preview while the card is on screen (performance).
  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            void video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-label={`Open ${project.title}`}
      className="group block w-full text-left"
    >
      <div className="relative aspect-[9/13] w-full overflow-hidden rounded-sm bg-surface ring-1 ring-hairline sm:aspect-[9/14]">
        {project.previewVideo ? (
          <video
            ref={videoRef}
            src={project.previewVideo}
            poster={project.poster || undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${project.title} preview`}
            className="size-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          />
        ) : (
          <div className="flex size-full flex-col items-center justify-center gap-4 px-6 text-center transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
            <Film className="size-7 text-muted-foreground" aria-hidden />
            <p className="eyebrow">Preview video — to be added</p>
          </div>
        )}

        {/* hover / tap overlay */}
        <div className="absolute inset-0 flex items-end bg-background/0 p-5 opacity-0 transition-all duration-[500ms] group-hover:bg-background/55 group-hover:opacity-100 group-focus-visible:bg-background/55 group-focus-visible:opacity-100">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em]">
            Watch full reel
            <ArrowUpRight className="size-4" />
          </span>
        </div>

        <span className="absolute left-4 top-4 font-display text-xs font-extrabold tracking-[0.2em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-border pt-4">
        <h3 className="display-xl text-xl">{project.title}</h3>
        <p className="max-w-[60%] text-right text-xs leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>
    </button>
  );
}
