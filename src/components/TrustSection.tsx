import { motion } from 'framer-motion';
import { HiShieldCheck } from 'react-icons/hi';

const textItems = [
  'Invite-only community for high-performing spenders.',
  'Transparent rewards and premium merchant experiences.',
  'A digital vault built for finance-first members.',
];

export default function TrustSection() {
  return (
    <section id="about" className="relative px-6 pb-24 pt-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl sm:p-12">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200/70">Members-only trust</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Built for members who expect premium protection.</h2>
            <p className="max-w-xl text-lg leading-8 text-slate-300/90">
              Discover a modern payment experience that pairs curated rewards with secure data controls, inviting members into a refined financial ecosystem.
            </p>
            <div className="space-y-4">
              {textItems.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-surface2/90 p-5 shadow-soft">
                  <p className="text-sm text-slate-300/85">{item}</p>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/5 px-5 py-3 text-sm text-slate-200 shadow-neon shadow-cyan-500/10">
              <HiShieldCheck className="h-5 w-5 text-cyan-300" />
              Verified secure fintech controls
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950/95 via-surface to-slate-900/80 p-8 shadow-neon"
          >
            <div className="absolute left-5 top-8 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute right-8 bottom-10 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-surface2/90 p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.28em] text-slate-400">Member tier</span>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">Elite</span>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-900/90 to-slate-800/70 p-5 shadow-xl shadow-cyan-500/10">
                  <p className="text-sm text-slate-400">Transaction insights</p>
                  <p className="mt-4 text-3xl font-semibold text-white">99.7%</p>
                </div>
                <div className="rounded-[1.75rem] bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-5 shadow-xl shadow-violet-500/10">
                  <p className="text-sm text-slate-400">Verified payments</p>
                  <p className="mt-4 text-3xl font-semibold text-white">45K+</p>
                </div>
              </div>
            </div>
            <div className="mt-10 rounded-[2rem] border border-white/10 bg-surface p-6 shadow-soft">
              <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                <span>Spending goal</span>
                <span>84%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-5/6 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/5 p-4 text-slate-300">
                  <p className="text-[0.72rem] uppercase tracking-[0.3em] text-slate-500">Monthly limit</p>
                  <p className="mt-2 text-xl font-semibold text-white">₹ 2.4L</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-4 text-slate-300">
                  <p className="text-[0.72rem] uppercase tracking-[0.3em] text-slate-500">Savings goal</p>
                  <p className="mt-2 text-xl font-semibold text-white">₹ 80K</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
