"use client";

import AnketClient from "./AnketClient";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AnketPage() {
  const { t } = useLanguage();
  
  return <AnketClient />;
}

