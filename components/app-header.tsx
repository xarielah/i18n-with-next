"use client";

import LocaleSwitch from "@/components/locale-switch";
import { Link } from "@/messages/navigation";
import { useTranslations } from "next-intl";

export default function AppHeader() {
    const t = useTranslations('AppHeader')

    return (
        <header className="p-4 bg-gray-50 backdrop-blur-lg rounded-xl sticky">
            <nav className="flex items-center justify-between">
                <ul className="flex items-center gap-6">
                    <li><Link href="/">{t('home')}</Link></li>
                    <li><Link href="/about">{t('about')}</Link></li>
                    <li><Link href="/developer">{t('developer')}</Link></li>
                </ul>
                <LocaleSwitch />
            </nav>
        </header>
    )
}