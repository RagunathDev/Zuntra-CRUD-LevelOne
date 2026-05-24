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
      className="group relative overflow-hidden rounded-3xl border-4 border-emerald-600 bg-block p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className={`mb-5 inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-600 shadow-md`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-700 leading-7">{description}</p>
      <div className="pointer-events-none absolute inset-x-5 bottom-5 h-24 rounded-[2rem] bg-gradient-to-t from-emerald-50/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}
