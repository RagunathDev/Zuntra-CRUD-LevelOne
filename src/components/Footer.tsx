import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t-4 border-emerald-600 bg-block px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] font-bold text-emerald-600">Zuntra</p>
          <p className="mt-4 max-w-md text-sm text-slate-700">A premium fintech landing experience with secure member-first design and elegant digital polish.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <a href="#about" className="text-sm font-semibold text-slate-700 hover:text-emerald-600">About</a>
          <a href="#careers" className="text-sm font-semibold text-slate-700 hover:text-emerald-600">Careers</a>
          <a href="#privacy" className="text-sm font-semibold text-slate-700 hover:text-emerald-600">Privacy Policy</a>
          <a href="#terms" className="text-sm font-semibold text-slate-700 hover:text-emerald-600">Terms</a>
        </div>
        <div className="flex items-center gap-4 text-slate-700">
          <a href="#" aria-label="Twitter" className="rounded-full border-2 border-emerald-600 bg-emerald-50 p-3 text-emerald-600 hover:bg-emerald-100"><FaTwitter className="h-4 w-4" /></a>
          <a href="#" aria-label="Instagram" className="rounded-full border-2 border-emerald-600 bg-emerald-50 p-3 text-emerald-600 hover:bg-emerald-100"><FaInstagram className="h-4 w-4" /></a>
          <a href="#" aria-label="LinkedIn" className="rounded-full border-2 border-emerald-600 bg-emerald-50 p-3 text-emerald-600 hover:bg-emerald-100"><FaLinkedin className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
