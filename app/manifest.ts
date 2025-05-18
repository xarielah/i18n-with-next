import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  // Pick a locale that is representative of the app
  const locale = "en";

  const t = await getTranslations({
    namespace: "Manifest",
    locale,
  });

  return {
    name: t("title"),
    start_url: "/",
    theme_color: "#101E33",
  };
}
