import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Zuntra</p>
          <p className="mt-4 max-w-md text-sm text-slate-400">A premium fintech landing experience with secure member-first design and elegant digital polish.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <a href="#about" className="text-sm text-slate-300 hover:text-white">About</a>
          <a href="#careers" className="text-sm text-slate-300 hover:text-white">Careers</a>
          <a href="#privacy" className="text-sm text-slate-300 hover:text-white">Privacy Policy</a>
          <a href="#terms" className="text-sm text-slate-300 hover:text-white">Terms</a>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <a href="#" aria-label="Twitter" className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 hover:border-cyan-400/30 hover:text-white"><FaTwitter className="h-4 w-4" /></a>
          <a href="#" aria-label="Instagram" className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 hover:border-violet-400/30 hover:text-white"><FaInstagram className="h-4 w-4" /></a>
          <a href="#" aria-label="LinkedIn" className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 hover:border-sky-400/30 hover:text-white"><FaLinkedin className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
