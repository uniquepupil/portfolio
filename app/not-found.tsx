import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[1100px] items-center px-4 py-8 sm:px-6 lg:px-8">
      <section className="panel relative w-full overflow-hidden rounded-[2.4rem] p-7 sm:p-10 lg:p-12">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--accent)]/20 blur-3xl" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.34em] theme-accent">404 / Not found</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight theme-text-primary sm:text-7xl">
              This page wandered off the map.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 theme-text-secondary">
              The route does not exist anymore, but the portfolio and project case studies are still right here.
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="relative mt-10 grid gap-4 sm:grid-cols-3">
          <Link
            href="/"
            className="theme-accent-bg rounded-[1.4rem] px-5 py-4 text-sm font-medium"
          >
            Back home
          </Link>
          <Link
            href="/projects"
            className="inset-panel rounded-[1.4rem] px-5 py-4 text-sm font-medium theme-text-primary transition hover:border-[var(--accent)]"
          >
            View projects
          </Link>
          <Link
            href="/#contact"
            className="inset-panel rounded-[1.4rem] px-5 py-4 text-sm font-medium theme-text-primary transition hover:border-[var(--accent)]"
          >
            Contact me
          </Link>
        </div>
      </section>
    </main>
  );
}
