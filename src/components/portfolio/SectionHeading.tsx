import type { ReactNode } from "react";

export function SectionHeading({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow">{index}</p>
        <h2 className="display-xl mt-4 text-[clamp(2.25rem,6vw,5rem)]">{title}</h2>
      </div>
      {children ? (
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{children}</p>
      ) : null}
    </div>
  );
}
