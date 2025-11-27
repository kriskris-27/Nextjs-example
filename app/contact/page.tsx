export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black px-6 py-12 text-slate-100 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-300/80">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Get in touch</h1>
          <p className="mt-3 text-slate-300">
            Have a question or want to collaborate? Drop a note below.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-indigo-200/70">
              Email
            </p>
            <p className="mt-1 font-semibold text-white">hello@example.com</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-indigo-200/70">
              Location
            </p>
            <p className="mt-1 font-semibold text-white">Remote / Worldwide</p>
          </div>
        </div>
      </section>
    </main>
  );
}
