export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl justify-end px-5 text-right text-sm text-slate-500 sm:px-8 dark:text-slate-400">
        <p>© {year} Eden N. Mekuria</p>
      </div>
    </footer>
  );
}
