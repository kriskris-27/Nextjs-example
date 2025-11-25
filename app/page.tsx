
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-slate-100">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-12 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-lg font-semibold text-white shadow-inner shadow-white/10">
              N
            </span>
            <div>
              <p className="text-sm text-slate-300">Next.js + Tailwind</p>
              <h1 className="text-xl font-semibold text-white">Starter Example</h1>
            </div>
          </div>
          <button className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-lg hover:shadow-indigo-500/20">
            Get Started
          </button>
        </header>

        <section className="mt-12 grid flex-1 gap-8 md:grid-cols-[1.6fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-300/80">
              Hero
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Build fast, modern apps with zero config styling.
            </h2>
            <p className="mt-4 text-slate-300">
              This page is rendered by a Server Component and styled entirely
              with Tailwind utility classes. Tweak the classes to see instant
              changes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-2xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:-translate-y-0.5 hover:bg-indigo-400">
                View Docs
              </button>
              <button className="rounded-2xl border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10">
                See Components
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Utility-first",
                text: "Compose UI quickly with readable class names that bundle layout, spacing, and color.",
              },
              {
                title: "Dark-ready",
                text: "Tailwind v4 dark tokens are built in. Toggle your system theme to preview.",
              },
              {
                title: "Responsive by design",
                text: "Use breakpoint prefixes like md: or lg: to adapt layouts effortlessly.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/30 backdrop-blur"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
