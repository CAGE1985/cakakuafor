import { ReactElement } from 'react';

type StatItem = {
  icon: ReactElement;
  value: string;
  label: string;
};

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 3.5l2.81 5.69 6.29.92-4.55 4.43 1.08 6.29L12 17.77l-5.63 2.96 1.08-6.29L2.9 10.11l6.29-.92L12 3.5z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" strokeWidth="1.5" />
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

export default function Stats() {
  const items: StatItem[] = [
    {
      icon: <StarIcon />,
      value: "18+",
      label: "Yıl Deneyim",
    },
    {
      icon: <HeartIcon />,
      value: "1000+",
      label: "Her ay Mutlu Müşteri",
    },
    {
      icon: <UsersIcon />,
      value: "16+",
      label: "Kişilik Ekip",
    },
  ];

  return (
    <div>
      <div className="text-sm font-semibold tracking-wide text-black/70 uppercase">Rakamlarla CAKA</div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-black/10 p-4 text-center hover:shadow-sm transition-shadow"
          >
            <div className="mx-auto mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
              {item.icon}
            </div>
            <div className="text-3xl font-bold leading-none">{item.value}</div>
            <div className="text-xs text-black/60 mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

