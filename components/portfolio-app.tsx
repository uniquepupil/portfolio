"use client";

import Image from "next/image";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

import {
  aboutParagraphs,
  education,
  experience,
  mapEmbed,
  profile,
  projects,
  services,
  socialLinks,
  tabs,
  techStack,
  type TabKey
} from "@/lib/data";

type Theme = "dark" | "light";
type ContactStatus = "idle" | "sending" | "success" | "error";

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="section-title text-3xl font-semibold tracking-tight theme-text-primary sm:text-4xl">
      {title}
    </h2>
  );
}

function Icon({
  name,
  className
}: {
  name:
    | "mail"
    | "phone"
    | "calendar"
    | "location"
    | "code"
    | "brain"
    | "mobile"
    | "camera"
    | "book"
    | "briefcase"
    | "send"
    | "download"
    | "external"
    | "sun"
    | "moon";
  className?: string;
}) {
  const common = `h-5 w-5 ${className ?? ""}`;

  switch (name) {
    case "mail":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M4 6h16v12H4z" /><path d="m4 8 8 6 8-6" /></svg>;
    case "phone":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M8 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path d="M11 17h2" /></svg>;
    case "calendar":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" /><path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01" /></svg>;
    case "location":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Z" /><circle cx="12" cy="11" r="2.5" /></svg>;
    case "code":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></svg>;
    case "brain":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M9.5 4a3.5 3.5 0 0 0-3.37 4.44A3.5 3.5 0 0 0 6 15a3 3 0 0 0 3 5h1v-8H8M14.5 4a3.5 3.5 0 0 1 3.37 4.44A3.5 3.5 0 0 1 18 15a3 3 0 0 1-3 5h-1v-8h2" /><path d="M10 8a3 3 0 0 1 4 0M10 12a3 3 0 0 0 4 0" /></svg>;
    case "mobile":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><rect x="7" y="2.5" width="10" height="19" rx="2" /><path d="M11 18h2" /></svg>;
    case "camera":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></svg>;
    case "book":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" /><path d="M8 7h8" /></svg>;
    case "briefcase":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M9 6V4h6v2M4 8h16v10H4z" /><path d="M4 12h16" /></svg>;
    case "send":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M3 11.5 21 3l-8.5 18-2.5-7L3 11.5Z" /></svg>;
    case "download":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M12 4v10" /><path d="m8 10 4 4 4-4" /><path d="M4 19h16" /></svg>;
    case "external":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M14 5h5v5" /><path d="M10 14 19 5" /><path d="M19 14v5H5V5h5" /></svg>;
    case "sun":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><circle cx="12" cy="12" r="4" /><path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" /></svg>;
    case "moon":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z" /></svg>;
  }
}

function SidebarItem({
  icon,
  label,
  value,
  href
}: {
  icon: "mail" | "phone" | "calendar" | "location";
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="theme-soft-bg theme-border-soft theme-accent flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border">
        <Icon name={icon} />
      </div>
      <div className="min-w-0">
        <p className="mb-1 text-xs uppercase tracking-[0.2em] theme-text-muted">{label}</p>
        {href ? (
          <a href={href} className="text-sm theme-text-primary transition hover:theme-accent">
            {value}
          </a>
        ) : (
          <p className="text-sm theme-text-primary">{value}</p>
        )}
      </div>
    </div>
  );
}

export function PortfolioApp() {
  const [activeTab, setActiveTab] = useState<TabKey>("about");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "") as TabKey;
      if (tabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    const preferredTheme =
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

    setTheme(preferredTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
  };

  const handleThemeToggle = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

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
      setStatusMessage(data.message || "Message sent successfully.");
      setFormData({ fullname: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : "Something went wrong. Try again."
      );
    }
  };

  const isSubmitting = status === "sending";

  return (
    <main className="mx-auto min-h-screen max-w-[1280px] px-4 pb-24 pt-5 sm:px-5 lg:px-8 lg:py-8">
      <div className="grid gap-5 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
        <aside className="panel rounded-[1.75rem] p-5 lg:sticky lg:top-6 lg:p-8">
          <div className="mb-4 flex items-start justify-between gap-3">
            <button
              type="button"
              onClick={handleThemeToggle}
              className="theme-soft-bg theme-border inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm theme-text-primary transition hover:theme-accent"
            >
              <Icon name={theme === "dark" ? "sun" : "moon"} className="h-4 w-4" />
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <button
              type="button"
              onClick={() => setSidebarOpen((value) => !value)}
              className="theme-soft-bg theme-border theme-accent rounded-2xl border px-4 py-2 text-sm lg:hidden"
            >
              {sidebarOpen ? "Hide" : "Contacts"}
            </button>
          </div>

          <div className="flex items-center gap-4 lg:block">
            <div className="mx-auto overflow-hidden rounded-[1.75rem] bg-[#343437] p-3 shadow-panel lg:mb-6 lg:w-fit">
              <Image
                src={profile.avatar}
                alt={profile.fullName}
                width={170}
                height={170}
                className="h-24 w-24 rounded-[1.35rem] object-cover sm:h-28 sm:w-28 lg:h-[150px] lg:w-[150px]"
                priority
              />
            </div>
            <div className="min-w-0 flex-1 lg:text-center">
              <h1 className="text-3xl font-semibold theme-text-primary lg:text-[2.55rem]">
                {profile.name}
              </h1>
              <p className="theme-soft-bg mt-3 inline-flex rounded-xl px-4 py-2 text-sm theme-text-secondary">
                {profile.role}
              </p>
            </div>
          </div>

          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              sidebarOpen
                ? "mt-7 max-h-[800px] opacity-100"
                : "max-h-0 opacity-0 lg:mt-7 lg:max-h-none lg:opacity-100"
            )}
          >
            <div className="my-7 h-px bg-[var(--border-strong)]" />
            <div className="space-y-5">
              <SidebarItem
                icon="mail"
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <SidebarItem
                icon="phone"
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              />
              <SidebarItem icon="calendar" label="Birthday" value={profile.birthday} />
              <SidebarItem icon="location" label="Location" value={profile.location} />
            </div>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-soft-bg theme-border-soft rounded-full border px-3 py-2 text-sm theme-text-secondary transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </aside>

        <section className="panel relative rounded-[1.75rem] p-5 sm:p-7 lg:min-h-[820px] lg:p-8">
          <nav className="inset-panel mb-8 hidden rounded-[1.5rem] border lg:absolute lg:right-0 lg:top-0 lg:block lg:rounded-bl-[1.5rem] lg:rounded-tr-[1.5rem]">
            <div className="flex gap-1 px-5 py-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabChange(tab)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium capitalize transition",
                    activeTab === tab
                      ? "theme-accent"
                      : "theme-text-secondary hover:text-[var(--text-primary)]"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </nav>

          <div className="lg:pt-14">
            {activeTab === "about" && (
              <div className="space-y-10">
                <section>
                  <SectionHeading title="About Me" />
                  <div className="mt-7 space-y-6 text-base leading-8 theme-text-secondary sm:text-lg">
                    {aboutParagraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-3xl font-semibold theme-text-primary">What I Do</h3>
                  <div className="mt-7 grid gap-5 xl:grid-cols-2">
                    {services.map((service) => (
                      <article key={service.title} className="inset-panel rounded-[1.5rem] p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 text-[var(--accent)]">
                          <Icon name={service.icon as "code" | "brain" | "mobile" | "camera"} />
                        </div>
                        <h4 className="text-[1.7rem] font-semibold theme-text-primary">
                          {service.title}
                        </h4>
                        <p className="mt-3 text-base leading-8 theme-text-secondary">
                          {service.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === "resume" && (
              <div className="space-y-9">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <SectionHeading title="Resume" />
                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 px-5 py-3 text-sm font-medium theme-accent transition hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]"
                  >
                    <Icon name="download" className="h-4 w-4" />
                    Download CV
                  </a>
                </div>

                <div className="space-y-9">
                  <TimelineBlock title="Education" icon="book" items={education} />
                  <TimelineBlock title="Experience" icon="briefcase" items={experience} />
                </div>

                <section>
                  <h3 className="text-3xl font-semibold theme-text-primary">Tech Stack Used</h3>
                  <div className="inset-panel mt-5 grid grid-cols-2 gap-3 rounded-[1.5rem] p-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {techStack.map((item) => (
                      <div
                        key={item}
                        className="theme-border-soft rounded-2xl border bg-black/5 px-4 py-4 text-center text-sm font-medium theme-text-secondary"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === "portfolio" && (
              <div>
                <SectionHeading title="Portfolio" />
                <div className="mt-7 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {projects.map((project) => (
                    <a
                      key={project.title}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group block"
                    >
                      <div className="theme-border-soft overflow-hidden rounded-[1.3rem] border theme-soft-bg">
                        <div className="relative">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={500}
                            height={320}
                            className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
                            <span className="rounded-2xl border border-[color:var(--accent)]/30 bg-black/60 px-4 py-3 text-[var(--accent)] opacity-0 transition group-hover:opacity-100">
                              <Icon name="external" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-3 text-lg font-medium theme-text-primary">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm theme-text-muted">{project.category}</p>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-7">
                <SectionHeading title="Contact" />
                <section>
                  <h3 className="text-3xl font-semibold theme-text-primary">Contact Form</h3>
                  <form onSubmit={handleSubmit} className="mt-5 space-y-5">
                    <div className="grid gap-4 md:grid-cols-2">
                      <input
                        name="fullname"
                        type="text"
                        required
                        value={formData.fullname}
                        onChange={handleInputChange}
                        placeholder="Full name"
                        className="theme-input rounded-2xl px-5 py-4"
                      />
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email address"
                        className="theme-input rounded-2xl px-5 py-4"
                      />
                    </div>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows={5}
                      className="theme-input min-h-[180px] w-full rounded-2xl px-5 py-4"
                    />
                    <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                      <p
                        className={cn(
                          "text-sm",
                          status === "error" && "text-red-500",
                          status === "success" && "text-green-600 dark:text-green-400",
                          status !== "error" && status !== "success" && "theme-text-muted"
                        )}
                      >
                        {statusMessage || "Use SMTP env vars to receive emails directly in your inbox."}
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "inline-flex items-center gap-3 rounded-2xl px-6 py-4 font-medium transition",
                          isSubmitting
                            ? "cursor-not-allowed opacity-70 theme-soft-bg theme-text-secondary"
                            : "border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 theme-accent hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]"
                        )}
                      >
                        <Icon name="send" className="h-4 w-4" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                </section>

                <section className="theme-border overflow-hidden rounded-[1.5rem] border">
                  <iframe
                    src={mapEmbed}
                    className="theme-map h-[320px] w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Parikshit location map"
                  />
                </section>
              </div>
            )}
          </div>
        </section>
      </div>

      <nav className="panel fixed bottom-0 left-0 right-0 z-50 mx-auto flex max-w-full justify-center rounded-t-[1.35rem] px-2 py-3 lg:hidden">
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => handleTabChange(tab)}
              className={cn(
                "rounded-xl px-4 py-3 text-sm font-medium capitalize transition",
                activeTab === tab
                  ? "theme-accent-bg"
                  : "theme-text-secondary theme-soft-bg"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>
    </main>
  );
}

function TimelineBlock({
  title,
  icon,
  items
}: {
  title: string;
  icon: "book" | "briefcase";
  items: Array<{
    title: string;
    period: string;
    description: string | string[];
  }>;
}) {
  return (
    <section>
      <div className="mb-7 flex items-center gap-4">
        <div className="theme-soft-bg theme-border-soft theme-accent flex h-12 w-12 items-center justify-center rounded-2xl border">
          <Icon name={icon} />
        </div>
        <h3 className="text-3xl font-semibold theme-text-primary">{title}</h3>
      </div>

      <ol className="ml-3 border-l border-[var(--border-strong)] pl-8">
        {items.map((item, index) => (
          <li key={`${item.title}-${index}`} className="relative pb-9 last:pb-0">
            <span className="absolute -left-[2.55rem] top-1 h-3 w-3 rounded-full border-4 border-[var(--bg-tertiary)] bg-[var(--accent)]" />
            <h4 className="text-lg font-semibold theme-text-primary">{item.title}</h4>
            <p className="mt-2 font-medium theme-accent">{item.period}</p>
            {Array.isArray(item.description) ? (
              <div className="mt-3 space-y-2 text-sm leading-7 theme-text-secondary sm:text-base">
                {item.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-sm leading-7 theme-text-secondary sm:text-base">
                {item.description}
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
