import { motion } from 'framer-motion';
import { HiLockClosed, HiShieldCheck, HiSparkles } from 'react-icons/hi';

const cards = [
  {
    title: 'Data encryption',
    text: 'End-to-end encryption protects personal finance details on every transaction.',
    icon: <HiLockClosed className="h-6 w-6 text-cyan-300" />,
  },
  {
    title: 'Secure approvals',
    text: 'Multi-layer authentication for premium access and payment authorizations.',
    icon: <HiShieldCheck className="h-6 w-6 text-violet-300" />,
  },
  {
    title: 'Protected insights',
    text: 'Analytics and credit signals are guarded in a secure member dashboard.',
    icon: <HiSparkles className="h-6 w-6 text-sky-300" />,
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="px-6 pb-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-slate-950/90 to-surface2/90 p-8 shadow-neon backdrop-blur-xl sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200/70">Security first</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Built on encryption, visibility, and premium control.</h2>
            <p className="max-w-xl text-lg leading-8 text-slate-300/90">
              Secure every interaction with a fintech-grade foundation and trust signals that reassure members from first tap to final checkout.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            {cards.map((card, index) => (
              <div key={card.title} className="group rounded-[2rem] border border-white/10 bg-surface p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-300/20">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-800/70 text-white shadow-lg shadow-cyan-500/10">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-slate-300/85 leading-7">{card.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
