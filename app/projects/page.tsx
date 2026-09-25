import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects | Parikshit Bhardwaj",
  description:
    "All case studies by Parikshit Bhardwaj across hospitality websites, adventure tourism, public systems, product applications, and SEO-focused builds."
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-[1240px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
      <header className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Link href="/" className="text-sm uppercase tracking-[0.28em] theme-accent">
            Back to portfolio
          </Link>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight theme-text-primary sm:text-6xl">
            All projects
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 theme-text-secondary">
            Case studies across travel, hospitality, public systems, product interfaces, and SEO-focused websites.
          </p>
        </div>
        <ThemeToggle />
      </header>

      <section className="panel rounded-[2rem] p-6 lg:p-8">
        <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] theme-accent">Project index</p>
            <h2 className="mt-2 text-3xl font-semibold theme-text-primary">
              Every live case study.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 theme-text-muted">
            Each entry links to a dedicated page with role, problem framing, approach, outcomes, gallery, and live project link.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-[1.6rem] border border-[var(--border-soft)] transition hover:border-[var(--accent)]/70"
            >
              <article className="flex h-full flex-col">
                <div className="relative min-h-[210px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="inset-panel flex flex-1 flex-col justify-between p-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] theme-accent">
                      {project.kicker}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold theme-text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 theme-text-secondary">
                      {project.summary}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full theme-soft-bg px-3 py-1 theme-text-secondary">
                      {project.category}
                    </span>
                    <span className="rounded-full theme-soft-bg px-3 py-1 theme-text-secondary">
                      {project.year}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
