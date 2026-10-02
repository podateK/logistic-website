import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  text,
  aside,
}: {
  kicker: string;
  title: string;
  text: string;
  aside?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-grid">
        <div>
          <p className="kicker kicker-light">{kicker}</p>
          <h1>{title}</h1>
        </div>
        <div className="page-hero-side">
          <p>{text}</p>
          {aside}
        </div>
      </div>
    </section>
  );
}
