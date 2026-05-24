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
      <div className="relative mx-auto flex max-w-7xl flex-col gap-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 px-4 py-2 text-sm text-emerald-700 font-medium"
          >
            <BsFillLightningChargeFill className="h-4 w-4 text-emerald-600" />
            premium credit unlocks for elite members
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-5xl font-black tracking-[-0.05em] text-slate-900 sm:text-6xl lg:text-7xl"
          >
            Credit mastery for the curated few.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-700"
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
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 hover:shadow-emerald-600/40 active:scale-95"
            >
              Start your premium journey
              <FiArrowRight className="ml-3 h-5 w-5" />
            </a>
            <a href="#security" className="inline-flex items-center justify-center rounded-2xl border-2 border-emerald-600 px-7 py-4 text-sm text-emerald-600 font-medium hover:bg-emerald-50">
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
              <div key={item.label} className="rounded-2xl border-2 border-emerald-200 bg-block px-5 py-4 text-sm text-slate-700 font-medium shadow-md">
                <p className="text-2xl font-bold text-emerald-700">{item.value}</p>
                <p className="mt-1 text-slate-600">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto flex max-w-xl flex-col gap-6 rounded-3xl border-4 border-emerald-600 bg-block p-8 shadow-xl sm:p-10"
        >
          <div className="rounded-2xl border-2 border-emerald-200 bg-surface2 p-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-slate-700">Premium</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs uppercase tracking-[0.3em] font-bold text-emerald-700">Member exclusive</span>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-block border-2 border-emerald-300 p-5 shadow-md">
                <p className="text-sm font-semibold text-slate-700">Monthly Spends</p>
                <p className="mt-3 text-3xl font-bold text-emerald-700">₹ 98.7K</p>
              </div>
              <div className="rounded-2xl bg-block border-2 border-emerald-300 p-5 shadow-md">
                <p className="text-sm font-semibold text-slate-700">Rewards unlocked</p>
                <p className="mt-3 text-3xl font-bold text-emerald-700">₹ 4.2K</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-emerald-50 border-2 border-emerald-300 p-5">
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-slate-700">Credit score</p>
              <p className="mt-4 text-4xl font-bold text-emerald-700">781</p>
              <p className="mt-2 text-sm text-slate-600">Very good score, ready for premium offers.</p>
            </div>
            <div className="rounded-2xl bg-emerald-100 border-2 border-emerald-400 p-5">
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-slate-700">Cashback rate</p>
              <p className="mt-4 text-4xl font-bold text-emerald-700">5.8%</p>
              <p className="mt-2 text-sm text-slate-600">Earned on select lifestyle and travel partners.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
