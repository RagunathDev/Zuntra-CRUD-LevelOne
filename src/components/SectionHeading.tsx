import { ReactNode } from 'react';

interface SectionHeadingProps {
  overline: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ overline, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.36em] text-cyan-200/60 mb-4">{overline}</p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">{title}</h2>
      {description ? <p className="mt-4 text-slate-300/85 leading-8">{description}</p> : null}
    </div>
  );
}
