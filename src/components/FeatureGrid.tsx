import { motion } from 'framer-motion';
import { features } from '../data/features';
import GlassCard from './GlassCard';

export default function FeatureGrid() {
  return (
    <section id="features" className="px-6 pb-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] font-bold text-emerald-600">Feature spotlight</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Modern tools for credit, rewards, and control.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">A premium suite crafted for crisp interactions, effortless payments, and intelligent insights that feel polished at every touch.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <GlassCard
                title={item.title}
                description={item.description}
                accent={item.accent}
                icon={<item.icon className="h-6 w-6" />}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
