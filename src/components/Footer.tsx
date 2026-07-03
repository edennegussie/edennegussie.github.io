export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-500 sm:flex-row sm:px-8 dark:text-slate-400">
        <p>© {year} Eden N. Mekuria · Building software that matters</p>
        <p>React · TypeScript · Tailwind CSS · a little help from AI</p>
      </div>
    </footer>
  );
}
