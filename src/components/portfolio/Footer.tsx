import { personalInfo, socialLinks } from "@/data/portfolio";

export function Footer() {
  const socials = socialLinks.filter((link) => link.url);

  return (
    <footer className="border-t border-border px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-[92rem] flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-xs font-extrabold uppercase tracking-[0.22em]">
          {personalInfo.name} © 2026
        </p>

        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
          {personalInfo.title}
        </p>

        {socials.length > 0 ? (
          <ul className="flex gap-6">
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
    </footer>
  );
}
