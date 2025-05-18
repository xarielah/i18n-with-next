import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["en", "he"] as const;

type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  "/": "/",
  "/pathnames": "/pathnames",
};

export const localePrefix: LocalePrefix = "always";
