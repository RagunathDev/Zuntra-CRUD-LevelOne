import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps extends MotionProps {
  title: string;
  description: string;
  accent: string;
  icon: ReactNode;
}

export default function GlassCard({ title, description, accent, icon, ...props }: GlassCardProps) {
  return (
    <motion.article
      {...props}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-neon"
    >
      <div className={`mb-5 inline-flex rounded-3xl bg-gradient-to-br ${accent} p-4 text-white shadow-lg shadow-${accent.replace('from-', '').replace('to-', '')}/15`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-300/85 leading-7">{description}</p>
      <div className="pointer-events-none absolute inset-x-5 bottom-5 h-24 rounded-[2rem] bg-gradient-to-t from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}
