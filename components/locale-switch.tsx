"use client";

import { locales } from "@/messages/config";
import { usePathname, useRouter } from "@/messages/navigation";
import { useLocale, useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

const Select = dynamic(() => import("react-select"), { ssr: false });

export default function LocaleSwitch() {
    const t = useTranslations("LocaleSwitch");
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const params = useParams();
    const pathname = usePathname();
    const [currentLocale, setCurrentLocale] = useState(locale);

    const options = locales.map(cur => ({ value: cur, label: t("locale", { locale: cur }) }))

    useEffect(() => {
        if (currentLocale === locale) return;
        changeLocale(currentLocale)
    }, [currentLocale])

    const changeLocale = (newLocale: string) => {
        if (!newLocale || isPending) return;
        const nextLocale = newLocale;
        startTransition(() => {
            router.replace(
                //@ts-ignore
                { pathname, params },
                { locale: nextLocale }
            );
        })
    }

    return (
        <Select
            className="text-sm"
            onChange={option => setCurrentLocale((option as any).value)}
            value={options.find(cur => cur.value === locale)}
            name="locale"
            isDisabled={isPending}
            options={options}
        />
    )
}