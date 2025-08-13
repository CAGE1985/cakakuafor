import { ReactElement } from 'react';

type Props = {
  icon?: ReactElement;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ icon, title, subtitle }: Props) {
  return (
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs text-black/70 bg-white shadow-sm">
        {icon && <span className="text-black/80">{icon}</span>}
        <span className="font-medium tracking-wide uppercase">{title}</span>
      </div>
      {subtitle && <h2 className="mt-3 text-2xl font-bold">{subtitle}</h2>}
    </div>
  );
}

