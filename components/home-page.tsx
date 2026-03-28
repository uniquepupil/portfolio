"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";

import {
  aboutParagraphs,
  capabilityBlocks,
  experience,
  featuredCaseStudies,
  heroStats,
  mapEmbed,
  profile,
  socialLinks,
  techStack
} from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

type ContactStatus = "idle" | "sending" | "success" | "error";

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

function statGlyph(label: string) {
  switch (label) {
    case "Core mode":
      return "rocket";
    case "Primary stack":
      return "code";
    case "Focus":
      return "eye";
    case "Current role":
      return "briefcase";
    case "Build style":
      return "edit";
    case "Platforms":
      return "layers";
    case "Domains":
      return "pin";
    case "Projects shipped":
      return "check";
    default:
      return "dot";
  }
}

function Glyph({ kind }: { kind: string }) {
  const className = "h-4 w-4";

  switch (kind) {
    case "rocket":
      return <span className="text-base"></span>;
    case "code":
      return <span className="font-mono text-base theme-accent">{""}</span>;
    case "eye":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M9 6V4h6v2M4 8h16v10H4z" />
          <path d="M4 12h16" />
        </svg>
      );
    case "edit":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M3 17.25V21h3.75L18 9.75 14.25 6 3 17.25Z" />
          <path d="m14.25 6 3.75 3.75" />
        </svg>
      );
    case "layers":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="m12 4 8 4-8 4-8-4 8-4Z" />
          <path d="m4 12 8 4 8-4" />
          <path d="m4 16 8 4 8-4" />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Z" />
          <circle cx="12" cy="11" r="2.5" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8.5 12 2.5 2.5 4.5-5" />
        </svg>
      );
    default:
      return <span className="text-sm theme-accent">•</span>;
  }
}

export function HomePage() {
  const whatsappLink = `https://wa.me/${profile.phone.replace(/\D/g, "")}`;
  const phoneLink = `tel:${profile.phone.replace(/\s+/g, "")}`;
  const featuredStats = heroStats.slice(0, 3);
  const snapshotStats = heroStats.slice(3, 6);
  const supportingStats = heroStats.slice(6, 9);
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: ""
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus("success");
      setStatusMessage(
        data.message || "Thanks. We’ll contact you shortly. For a faster reply, use call or WhatsApp."
      );
      setFormData({ fullname: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : "Something went wrong. Try again."
      );
    }
  };

  return (
    <main className="mx-auto max-w-[1320px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
      <header className="mb-6 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.32em] theme-accent">Parikshit Bhardwaj</p>
         
          
        </div>
        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="theme-soft-bg theme-border inline-flex items-center rounded-full border px-4 py-2 text-sm theme-text-primary transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
      </header>

      <section className="grid gap-5 md:grid-cols-[0.55fr_1.45fr]">
        <aside className="panel relative overflow-hidden rounded-[2rem] p-6 lg:p-8">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[var(--accent)]/15 blur-3xl" />
          <div className="relative">
            <div className="mb-5 overflow-hidden rounded-[1.75rem] bg-[#343437] p-3">
              <Image
                src={profile.avatar}
                alt={profile.fullName}
                width={260}
                height={260}
                className="h-[220px] w-full rounded-[1.2rem] object-contain"
                priority
              />
            </div>
            <h2 className="text-3xl font-semibold theme-text-primary">{profile.fullName}</h2>
            <p className="mt-2 text-base leading-7 theme-text-secondary">{profile.headline}</p>
            <div className="mt-6 grid gap-4 text-sm">
              <InfoRow label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <InfoRow label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s+/g, "")}`} />
              <InfoRow label="Birthday" value={profile.birthday} />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-soft-bg rounded-full px-3 py-2 text-sm theme-text-secondary transition hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </aside>

        <div className="panel overflow-hidden rounded-[2rem] p-6 lg:p-8">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm theme-text-secondary">
            <span className="rounded-full border border-[var(--border-strong)] px-3 py-1">
              {profile.role}
            </span>
            <span className="rounded-full border border-[var(--border-strong)] px-3 py-1">
              {profile.location}
            </span>
          </div>
          <div className="grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
            <div>
              <h2 className="max-w-3xl text-[2.15rem] font-semibold leading-[1.28] theme-text-primary lg:text-[3.2rem]">
                {profile.headline}
              </h2>
             
            </div>

            <div className="inset-panel rounded-[1.7rem] p-6">
              <p className="text-sm uppercase tracking-[0.34em] theme-accent">Snapshot</p>
              <div className="mt-5 space-y-5">
                {snapshotStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={cn(
                      "flex items-start justify-between gap-4",
                      index !== snapshotStats.length - 1 &&
                        "border-b border-[var(--border-soft)] pb-5"
                    )}
                  >
                    <div>
                      <p className="text-[1.05rem] font-semibold leading-8 theme-text-primary">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm theme-text-muted">{stat.label}</p>
                    </div>
                    <div className="theme-accent mt-1 shrink-0">
                      <Glyph kind={statGlyph(stat.label)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 xl:grid-cols-[1.28fr_0.72fr]">
            <div className="grid gap-3 sm:grid-cols-[0.82fr_0.82fr_1fr]">
              {featuredStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "relative flex min-h-[230px] flex-col justify-end overflow-hidden rounded-[1.7rem] p-5",
                    index === 0 ? "theme-accent-bg" : "inset-panel"
                  )}
                >
                  {index > 0 && (
                    <div className="absolute right-5 top-5 theme-accent">
                      <Glyph kind={statGlyph(stat.label)} />
                    </div>
                  )}
                  <p
                    className={cn(
                      index === 2
                        ? "max-w-[12rem] text-[1.15rem] font-semibold leading-[1.12] lg:text-[1.45rem]"
                        : "text-[3rem] font-semibold leading-none",
                      index === 0 ? "text-[var(--accent-contrast)]" : "theme-text-primary"
                    )}
                  >
                    {stat.value}
                  </p>
                  <p
                    className={cn(
                      "mt-3 text-sm",
                      index === 0 ? "text-[var(--accent-contrast)]/85" : "theme-text-muted"
                    )}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {supportingStats.map((stat) => (
                <div
                  key={stat.label}
                  className="inset-panel flex min-h-[108px] items-start justify-between rounded-[1.45rem] p-5"
                >
                  <div>
                    <p className="text-[1.05rem] font-semibold leading-8 theme-text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-4 text-xs uppercase tracking-[0.28em] theme-text-muted">
                      {stat.label}
                    </p>
                  </div>
                  <div className="theme-accent mt-1 shrink-0">
                    <Glyph kind={statGlyph(stat.label)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="panel rounded-[2rem] p-6 lg:p-8">
          <p className="text-sm uppercase tracking-[0.28em] theme-accent">About</p>
          <div className="mt-5 space-y-5 text-base leading-8 theme-text-secondary">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          {capabilityBlocks.map((block) => (
            <article key={block.title} className="panel rounded-[2rem] p-6 lg:p-7">
              <div className="mb-3 text-sm uppercase tracking-[0.28em] theme-accent">
                {block.accent}
              </div>
              <h3 className="text-2xl font-semibold theme-text-primary">{block.title}</h3>
              <p className="mt-3 text-base leading-8 theme-text-secondary">{block.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-5 panel rounded-[2rem] p-6 lg:p-8">
        <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] theme-accent">Selected work</p>
            <h2 className="mt-2 text-3xl font-semibold theme-text-primary sm:text-4xl">
              Case studies, not thumbnails.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 theme-text-muted">
            Each project below has its own page with role, problem framing, approach, outcomes, gallery, and live link.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          {featuredCaseStudies.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={cn(
                "group overflow-hidden rounded-[1.7rem] border border-[var(--border-soft)] transition hover:border-[var(--accent)]/60",
                index === 0 ? "xl:col-span-2" : ""
              )}
            >
              <article className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[260px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="inset-panel flex flex-col justify-between p-6 lg:p-7">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] theme-accent">
                      {project.kicker}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold theme-text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 theme-text-secondary">
                      {project.summary}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2 text-sm">
                    <span className="rounded-full theme-soft-bg px-3 py-1 theme-text-secondary">
                      {project.role}
                    </span>
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

      <section className="mt-5 panel rounded-[2rem] p-6 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
          <p className="text-sm uppercase tracking-[0.28em] theme-accent">Experience</p>
          <div className="mt-6 space-y-6">
            {experience.map((item) => (
              <article key={item.company} className="border-l border-[var(--border-strong)] pl-5">
                <p className="text-sm theme-accent">{item.period}</p>
                <h3 className="mt-1 text-xl font-semibold theme-text-primary">{item.company}</h3>
                <p className="mt-1 text-sm theme-text-muted">{item.role}</p>
                <p className="mt-3 text-base leading-7 theme-text-secondary">{item.summary}</p>
              </article>
            ))}
          </div>
          </div>

          <div className="inset-panel rounded-[1.7rem] p-5 lg:sticky lg:top-6">
            <p className="text-sm uppercase tracking-[0.28em] theme-accent">Tech stack</p>
            <p className="mt-3 text-sm leading-7 theme-text-muted">
              Tools I use most often across frontend, backend, cloud delivery, and product implementation.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border-strong)] px-4 py-2 text-sm theme-text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="panel rounded-[2rem] p-6 lg:p-8">
          <p className="text-sm uppercase tracking-[0.28em] theme-accent">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold theme-text-primary">
            If the work needs both design sense and engineering execution, I can help.
          </h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="fullname"
                type="text"
                required
                value={formData.fullname}
                onChange={handleInputChange}
                placeholder="Full name"
                className="theme-input rounded-[1.25rem] px-5 py-4"
              />
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email address"
                className="theme-input rounded-[1.25rem] px-5 py-4"
              />
            </div>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Project details"
              rows={6}
              className="theme-input min-h-[180px] w-full rounded-[1.25rem] px-5 py-4"
            />
            {status === "sending" && (
              <div className="flex justify-center py-3">
                <div className="flex items-center gap-3 rounded-full border border-[var(--border-strong)] px-4 py-2 text-sm theme-text-secondary">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--accent)] border-t-transparent" />
                  Sending message...
                </div>
              </div>
            )}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <p
                  className={cn(
                    "text-sm",
                    status === "error" && "text-red-500",
                    status === "success" && "text-green-600 dark:text-green-400",
                    status !== "error" && status !== "success" && "theme-text-muted"
                  )}
                >
                  {statusMessage || ""}
                </p>
                {status === "success" && (
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href={phoneLink}
                      className="rounded-full border border-[var(--border-strong)] px-4 py-2 text-sm theme-text-primary transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      Call now
                    </a>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[var(--border-strong)] px-4 py-2 text-sm theme-text-primary transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      WhatsApp
                    </a>
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className={cn(
                  "rounded-full px-5 py-3 text-sm font-medium transition",
                  status === "sending"
                    ? "theme-soft-bg cursor-not-allowed opacity-70"
                    : "theme-accent-bg"
                )}
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
        </div>

        <div className="panel overflow-hidden rounded-[2rem] p-3">
          <iframe
            src={mapEmbed}
            className="theme-map h-full min-h-[420px] w-full rounded-[1.4rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Parikshit location map"
          />
        </div>
      </section>
    </main>
  );
}

function InfoRow({
  label,
  value,
  href
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.24em] theme-text-muted">{label}</p>
      {href ? (
        <a href={href} className="mt-1 block text-sm theme-text-primary transition hover:text-[var(--accent)]">
          {value}
        </a>
      ) : (
        <p className="mt-1 text-sm theme-text-primary">{value}</p>
      )}
    </div>
  );
}
