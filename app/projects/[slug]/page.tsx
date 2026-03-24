import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ThemeToggle } from "@/components/theme-toggle";
import { caseStudies, getCaseStudy } from "@/lib/data";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getCaseStudy(params.slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.summary
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getCaseStudy(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
      <header className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Link href="/" className="text-sm uppercase tracking-[0.28em] theme-accent">
            Back to portfolio
          </Link>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight theme-text-primary sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 theme-text-secondary">
            {project.headline}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="theme-accent-bg inline-flex rounded-full px-4 py-2 text-sm font-medium"
          >
            Live project
          </a>
          <ThemeToggle />
        </div>
      </header>

      <section className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="panel overflow-hidden rounded-[2rem]">
          <div className="relative min-h-[340px]">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
        </div>

        <aside className="panel rounded-[2rem] p-6 lg:p-8">
          <p className="text-sm uppercase tracking-[0.28em] theme-accent">Project frame</p>
          <dl className="mt-6 grid gap-5 sm:grid-cols-2">
            <MetaBlock label="Role" value={project.role} />
            <MetaBlock label="Client" value={project.client} />
            <MetaBlock label="Category" value={project.category} />
            <MetaBlock label="Year" value={project.year} />
            <MetaBlock label="Team" value={project.team} />
            <MetaBlock label="Duration" value={project.duration} />
          </dl>
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.24em] theme-text-muted">Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border-strong)] px-3 py-1 text-sm theme-text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="panel rounded-[2rem] p-6 lg:p-8">
          <p className="text-sm uppercase tracking-[0.28em] theme-accent">Challenge</p>
          <p className="mt-4 text-lg leading-8 theme-text-secondary">{project.challenge}</p>
        </article>

        <article className="panel rounded-[2rem] p-6 lg:p-8">
          <p className="text-sm uppercase tracking-[0.28em] theme-accent">Approach</p>
          <div className="mt-4 space-y-4">
            {project.approach.map((item) => (
              <p key={item} className="border-l border-[var(--border-strong)] pl-4 text-base leading-8 theme-text-secondary">
                {item}
              </p>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="panel rounded-[2rem] p-6 lg:p-8">
          <p className="text-sm uppercase tracking-[0.28em] theme-accent">Outcomes</p>
          <div className="mt-5 grid gap-4">
            {project.outcomes.map((item) => (
              <div key={item} className="inset-panel rounded-[1.35rem] p-4">
                <p className="text-base leading-8 theme-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel rounded-[2rem] p-6 lg:p-8">
          <p className="text-sm uppercase tracking-[0.28em] theme-accent">Source context</p>
          <p className="mt-4 text-base leading-8 theme-text-secondary">{project.sourceNote}</p>
        </article>
      </section>

      <section className="mt-5 panel rounded-[2rem] p-6 lg:p-8">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] theme-accent">Gallery</p>
            <h2 className="mt-2 text-3xl font-semibold theme-text-primary">Project surfaces</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {project.gallery.map((image, index) => (
            <div key={`${image}-${index}`} className="overflow-hidden rounded-[1.5rem] border border-[var(--border-soft)]">
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                width={900}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.24em] theme-text-muted">{label}</dt>
      <dd className="mt-1 text-sm theme-text-primary">{value}</dd>
    </div>
  );
}
