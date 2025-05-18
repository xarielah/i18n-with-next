import { defineRouting } from "next-intl/routing";
import { localePrefix, locales, pathnames } from "./config";

export const routing = defineRouting({
  locales: locales,
  defaultLocale: "en",
  pathnames: pathnames,
  localePrefix: localePrefix,
});
