"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Category = {
  title: string;
  rows: string[][];
};

// Google Sheets CSV URL (public)
const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRNZ7MP6g1TlWQjWWax9WFxgArs041ZxyF0iYDoXxn94yDxhLRR5jPwezK_KsVInp1vxAFPmDUOfR-e/pub?output=csv&gid=548912877&single=true";

// Çeviri anahtarları eşleştirmesi
const TRANSLATION_KEYS = {
  // Kategori başlıkları
  "SAÇ KESİMİ": "prices.categories.haircut",
  "SAÇ BOYAMA": "prices.categories.coloring",
  "SAÇ BAKIMI": "prices.categories.haircare",
  "MAKYAJ": "prices.categories.makeup",
  "MİKRO KAYNAK": "prices.categories.microResource",
  "GELİN SAÇI": "prices.categories.bridal",
  "CİLT BAKIMI": "prices.categories.skincare",
  
  // Hizmet isimleri
  "Kadın Saç Kesimi": "prices.services.womenHaircut",
  "Erkek Saç Kesimi": "prices.services.menHaircut",
  "Çocuk Saç Kesimi": "prices.services.childrenHaircut",
  "Saç Boyama": "prices.services.hairColoring",
  "Saç Açma": "prices.services.hairLightening",
  "Saç Koyulaştırma": "prices.services.hairDarkening",
  "Saç Bakımı": "prices.services.hairCare",
  "Saç Yıkama": "prices.services.hairWashing",
  "Saç Şekillendirme": "prices.services.hairStyling",
  "Makyaj": "prices.services.makeup",
  "Gelin Makyajı": "prices.services.bridalMakeup",
  "Mikro Kaynak": "prices.services.microResource",
  "Gelin Saçı": "prices.services.bridalHair",
  "Cilt Bakımı": "prices.services.skinCare",
  "Yüz Bakımı": "prices.services.facialCare",
  
  // Fiyat kategorileri
  "Kısa": "prices.lengths.short",
  "Orta": "prices.lengths.medium", 
  "Uzun": "prices.lengths.long",
  "Çok Uzun": "prices.lengths.veryLong"
};

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let current: string[] = [];
  let cell = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        // Escaped quote
        cell += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      current.push(cell);
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      // end of row
      if (cell.length > 0 || current.length > 0) {
        current.push(cell);
        rows.push(current);
      }
      current = [];
      cell = "";
      continue;
    }

    cell += char;
  }
  if (cell.length > 0 || current.length > 0) {
    current.push(cell);
    rows.push(current);
  }
  return rows;
}

function groupByCategory(rows: string[][]): Category[] {
  const categories: Category[] = [];
  let current: Category | null = null;

  for (const row of rows) {
    const nonEmpty = row.map((c) => c.trim()).filter(Boolean);
    if (nonEmpty.length === 1) {
      // New category title
      current = { title: nonEmpty[0], rows: [] };
      categories.push(current);
      continue;
    }
    if (current) {
      current.rows.push(row);
    }
  }

  // Clean rows: trim, remove trailing empty columns uniformly
  for (const cat of categories) {
    if (cat.rows.length === 0) continue;
    const maxCols = Math.max(
      ...cat.rows.map((r) => r.map((c) => c.trim()).filter(Boolean).length)
    );
    cat.rows = cat.rows.map((r) => r.slice(0, maxCols).map((c) => c.trim()))
      .filter((r) => r.some((c) => c !== ""));
  }

  return categories;
}

// Çeviri fonksiyonu
function translateText(text: string, t: (key: string) => any): string {
  const trimmedText = text.trim();
  
  // Çeviri anahtarı varsa kullan
  if (TRANSLATION_KEYS[trimmedText as keyof typeof TRANSLATION_KEYS]) {
    const translation = t(TRANSLATION_KEYS[trimmedText as keyof typeof TRANSLATION_KEYS]);
    return translation || trimmedText; // Çeviri bulunamazsa orijinal metni döndür
  }
  
  // Fiyat ise çevirme
  if (trimmedText.match(/^\d+/) || trimmedText.includes('₺')) {
    return trimmedText;
  }
  
  // Çeviri anahtarı yoksa orijinal metni döndür
  return trimmedText;
}

export default function PriceListClient() {
  const { t, language } = useLanguage();
  const [categories, setCategories] = useState<Category[]>([]);
  const [openCategories, setOpenCategories] = useState<Set<number>>(new Set([0]));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function run() {
      try {
        setLoading(true);
        const res = await fetch(CSV_URL, { cache: "no-store" });
        const text = await res.text();
        const parsed = parseCsv(text);
        const grouped = groupByCategory(parsed);
        
        if (!mounted) return;
        
        // Verileri çevir
        const translatedCategories = grouped.map(category => ({
          ...category,
          title: translateText(category.title, t),
          rows: category.rows.map(row => 
            row.map(cell => translateText(cell, t))
          )
        }));
        
        setCategories(translatedCategories);
        setOpenCategories(new Set([0]));
      } catch {
        setError(t('prices.error'));
      } finally {
        setLoading(false);
      }
    }
    run();
    return () => {
      mounted = false;
    };
  }, [t, language]); // language değiştiğinde de yeniden yükle

  const toggleCategory = (index: number) => {
    const newOpenCategories = new Set(openCategories);
    if (newOpenCategories.has(index)) {
      newOpenCategories.delete(index);
    } else {
      newOpenCategories.clear();
      newOpenCategories.add(index);
    }
    setOpenCategories(newOpenCategories);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto mb-4"></div>
          <p className="text-gray-600">{t('prices.loading')}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md mx-auto">
          <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-red-600 font-medium">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Kategori Accordion */}
      {categories.map((category, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Kategori Başlığı */}
          <button
            onClick={() => toggleCategory(index)}
            className="w-full px-6 py-4 bg-gradient-to-r from-gray-800 to-black text-white font-semibold text-left flex items-center justify-between hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
          >
            <span className="text-lg">{category.title}</span>
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${
                openCategories.has(index) ? 'rotate-180' : ''
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Kategori İçeriği */}
          <div className={`transition-all duration-300 ease-in-out ${
            openCategories.has(index) ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      {category.rows[0]?.map((header, idx) => (
                        <th key={idx} className="px-4 py-3 text-left font-semibold text-gray-700 text-sm">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {category.rows.slice(1).map((row, rIdx) => (
                      <tr 
                        key={rIdx} 
                        className={`border-b border-gray-100 transition-colors duration-200 hover:bg-gray-50 ${
                          rIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }`}
                      >
                        {row.map((cell, cIdx) => {
                          const isPrice = cIdx > 0 && cell.match(/[0-9]/);
                          const isService = cIdx === 0;
                          
                          return (
                            <td key={cIdx} className={`px-4 py-3 text-sm ${
                              isService ? 'font-medium text-gray-800' : 'text-gray-600'
                            }`}>
                              {isPrice ? (
                                <span className="font-semibold text-gray-800">
                                  {cell.includes('₺') ? cell : `${cell} ₺`}
                                </span>
                              ) : (
                                cell
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Bilgi notu */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
        <p className="text-blue-700 text-sm">
          {t('prices.note')}
        </p>
      </div>
    </div>
  );
}

