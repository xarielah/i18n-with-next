"use client";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations('HomePage')
  return (
    <section>
      <h1>{t('title')}</h1>
    </section>
  );
}
