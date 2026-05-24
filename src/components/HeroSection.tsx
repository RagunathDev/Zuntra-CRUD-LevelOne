import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { BsFillLightningChargeFill } from 'react-icons/bs';

const heroItems = [
  { label: 'Members-only', value: '120K+' },
  { label: 'Ratings', value: '4.9/5' },
  { label: 'Premium benefits', value: '100+' },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-0 h-72 bg-hero-glow blur-3xl opacity-80" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-100/95 shadow-soft"
          >
            <BsFillLightningChargeFill className="h-4 w-4 text-cyan-300" />
            premium credit unlocks for elite members
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl"
          >
            Credit mastery for the curated few.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-300/90"
          >
            Elevate bill payments, unlock premium rewards, and stay ahead with next-level credit insights designed for members who expect more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-neon shadow-violet-500/30 hover:scale-[1.01]"
            >
              Start your premium journey
              <FiArrowRight className="ml-3 h-5 w-5" />
            </a>
            <a href="#security" className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-4 text-sm text-slate-200 hover:border-cyan-300/30 hover:text-white">
              Explore security details
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-16 flex flex-wrap gap-4"
          >
            {heroItems.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 shadow-soft backdrop-blur-xl">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-slate-400">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto flex max-w-xl flex-col gap-6 rounded-[3rem] border border-white/10 bg-surface2/90 p-5 shadow-neon backdrop-blur-2xl sm:p-8"
        >
          <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute -right-16 bottom-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="rounded-[2.5rem] border border-white/10 bg-surface p-6 shadow-soft">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Premium</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-cyan-200">Member exclusive</span>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-900/50 p-5 shadow-2xl shadow-cyan-500/10">
                <p className="text-sm text-slate-400">Monthly Spends</p>
                <p className="mt-3 text-3xl font-semibold text-white">₹ 98.7K</p>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-900/50 p-5 shadow-2xl shadow-violet-500/5">
                <p className="text-sm text-slate-400">Rewards unlocked</p>
                <p className="mt-3 text-3xl font-semibold text-white">₹ 4.2K</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-white/5 p-5 shadow-soft backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Credit score</p>
              <p className="mt-4 text-4xl font-bold text-white">781</p>
              <p className="mt-2 text-sm text-slate-400">Very good score, ready for premium offers.</p>
            </div>
            <div className="rounded-[2rem] bg-gradient-to-br from-violet-500/20 to-cyan-400/10 p-5 shadow-soft backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Cashback rate</p>
              <p className="mt-4 text-4xl font-bold text-white">5.8%</p>
              <p className="mt-2 text-sm text-slate-400">Earned on select lifestyle and travel partners.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
