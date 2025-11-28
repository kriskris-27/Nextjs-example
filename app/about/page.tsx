import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900 text-white">
      <div className="max-w-xl space-y-4 rounded-xl bg-slate-800 p-8 shadow-lg">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">About</h1>
          <p className="text-slate-300">
            This is my first Next.js project. I already know MERN, now leveling
            up dY~Z.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-400"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
