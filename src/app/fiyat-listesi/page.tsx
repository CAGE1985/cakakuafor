export const metadata = { title: "Fiyat Listesi" };

import PriceListClient from "./PriceListClient";

export default function FiyatListesiPage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Fiyat Listemiz</h1>
      <div className="mt-6">
        <PriceListClient />
      </div>
      <p className="mt-6 text-xs text-black/60">Fiyatlar saç uzunluğu ve hizmet detaylarına göre değişebilir.</p>
    </div>
  );
}

