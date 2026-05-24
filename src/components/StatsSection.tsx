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
            <p className="text-sm uppercase tracking-[0.32em] font-bold text-emerald-600">Premium pulse</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Trusted by members who expect flawless clarity.</h2>
            <p className="max-w-xl text-lg leading-8 text-slate-700">Smooth ratings, meaningful numbers, and elegant testimonials anchored in a refined experience.</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7 }}
                  className="rounded-2xl border-2 border-emerald-600 bg-block p-6 text-center shadow-md"
                >
                  <p className="text-3xl font-bold text-emerald-700">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.28em] font-bold text-slate-700">{stat.label}</p>
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
                className="rounded-3xl border-2 border-emerald-600 bg-block p-8 shadow-lg"
              >
                <p className="text-lg leading-8 text-slate-700">"{item.content}"</p>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
                  <div>
                    <p className="font-bold text-slate-900">{item.author}</p>
                    <p>{item.role}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-emerald-100 border border-emerald-300 px-3 py-2 text-slate-700">
                      <FaApple className="h-4 w-4" />
                    </div>
                    <div className="rounded-2xl bg-emerald-100 border border-emerald-300 px-3 py-2 text-slate-700">
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
