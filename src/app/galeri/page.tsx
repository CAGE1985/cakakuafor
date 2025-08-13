export const metadata = { title: "Galeri" };

export default function GaleriPage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Galeri</h1>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {Array.from({ length: 30 }).map((_, idx) => (
          <div key={idx} className="aspect-square rounded-lg bg-black/10" />
        ))}
      </div>
    </div>
  );
}

