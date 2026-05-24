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
      <div className="mx-auto max-w-7xl rounded-3xl border-4 border-emerald-600 bg-block p-8 shadow-xl sm:p-12">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.32em] font-bold text-emerald-600">Members-only trust</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Built for members who expect premium protection.</h2>
            <p className="max-w-xl text-lg leading-8 text-slate-700">
              Discover a modern payment experience that pairs curated rewards with secure data controls, inviting members into a refined financial ecosystem.
            </p>
            <div className="space-y-4">
              {textItems.map((item) => (
                <div key={item} className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-5">
                  <p className="text-sm text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border-2 border-emerald-600 bg-emerald-100 px-5 py-3 text-sm text-emerald-700 font-bold shadow-md">
              <HiShieldCheck className="h-5 w-5 text-emerald-600" />
              Verified secure fintech controls
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border-4 border-emerald-600 bg-block p-8 shadow-xl"
          >
            <div className="rounded-2xl border-2 border-emerald-200 bg-surface2 p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.28em] font-bold text-slate-700">Member tier</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs uppercase tracking-[0.3em] font-bold text-emerald-700">Elite</span>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-block border-2 border-emerald-300 p-5 shadow-md">
                  <p className="text-sm font-semibold text-slate-700">Transaction insights</p>
                  <p className="mt-4 text-3xl font-bold text-emerald-700">99.7%</p>
                </div>
                <div className="rounded-2xl bg-emerald-50 border-2 border-emerald-300 p-5 shadow-md">
                  <p className="text-sm font-semibold text-slate-700">Verified payments</p>
                  <p className="mt-4 text-3xl font-bold text-emerald-700">45K+</p>
                </div>
              </div>
            </div>
            <div className="mt-10 rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-6">
              <div className="mb-4 flex items-center justify-between text-sm font-semibold text-slate-700">
                <span>Spending goal</span>
                <span>84%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-emerald-200">
                <div className="h-full w-5/6 rounded-full bg-emerald-600" />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-block border-2 border-emerald-300 p-4 text-slate-700">
                  <p className="text-[0.72rem] uppercase tracking-[0.3em] font-bold text-slate-600">Monthly limit</p>
                  <p className="mt-2 text-xl font-bold text-emerald-700">₹ 2.4L</p>
                </div>
                <div className="rounded-2xl bg-block border-2 border-emerald-300 p-4 text-slate-700">
                  <p className="text-[0.72rem] uppercase tracking-[0.3em] font-bold text-slate-600">Savings goal</p>
                  <p className="mt-2 text-xl font-bold text-emerald-700">₹ 80K</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
