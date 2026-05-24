import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const stats = [
  { label: 'Elite members', value: '120K+' },
  { label: 'App store rating', value: '4.9/5' },
  { label: 'Daily activations', value: '24K+' },
];

const testimonials = [
  {
    content: 'A premium experience that feels effortless and secure—every payment, every reward, every insight feels elevated.',
    author: 'Ananya M.',
    role: 'Product Lead',
  },
  {
    content: 'The app feels polished like a private club. Rewards flow naturally, and the design makes finance feel premium.',
    author: 'Rohit S.',
    role: 'Growth Strategist',
  },
];

export default function StatsSection() {
  return (
    <section id="testimonials" className="px-6 pb-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200/70">Premium pulse</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Trusted by members who expect flawless clarity.</h2>
            <p className="max-w-xl text-lg leading-8 text-slate-300/90">Smooth ratings, meaningful numbers, and elegant testimonials anchored in a refined experience.</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7 }}
                  className="rounded-[2rem] bg-white/5 p-6 text-center shadow-soft"
                >
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.author}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="rounded-[2.5rem] border border-white/10 bg-surface2/90 p-8 shadow-soft"
              >
                <p className="text-lg leading-8 text-slate-200">“{item.content}”</p>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
                  <div>
                    <p className="font-semibold text-white">{item.author}</p>
                    <p>{item.role}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-white/5 px-3 py-2 text-slate-200">
                      <FaApple className="h-4 w-4" />
                    </div>
                    <div className="rounded-2xl bg-white/5 px-3 py-2 text-slate-200">
                      <FaGooglePlay className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
