"use client";

import { useEffect, useMemo, useState } from "react";

type Category = {
  title: string;
  rows: string[][];
};

// Google Sheets CSV URL (public)
const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRNZ7MP6g1TlWQjWWax9WFxgArs041ZxyF0iYDoXxn94yDxhLRR5jPwezK_KsVInp1vxAFPmDUOfR-e/pub?output=csv&gid=548912877&single=true";

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

export default function PriceListClient() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
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
        setCategories(grouped);
        setActiveIndex(0);
      } catch {
        setError("Fiyat listesi yüklenirken bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    }
    run();
    return () => {
      mounted = false;
    };
  }, []);

  const active = useMemo(() => categories[activeIndex], [categories, activeIndex]);

  return (
    <div>
      {/* Kategori butonları */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {categories.map((cat, idx) => (
          <button
            key={cat.title + idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              activeIndex === idx
                ? "bg-black text-white border-black"
                : "bg-white text-black border-black hover:bg-black hover:text-white"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* İçerik */}
      <div className="mt-8">
        {loading && <div className="text-sm text-black/60">Yükleniyor…</div>}
        {error && <div className="text-sm text-red-600">{error}</div>}
        {!loading && !error && active && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">{active.title}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-black">
                <tbody>
                  {active.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="border border-black">
                      {row.map((cell, cIdx) => {
                        const Tag = rIdx === 0 ? "th" : "td";
                        return (
                          <Tag
                            key={cIdx}
                            className="text-sm p-2 text-center border border-black"
                          >
                            {cell}
                          </Tag>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

