import { getTranslations } from "next-intl/server"

export default async function AboutPage() {
    const t = await getTranslations('AboutPage')
    return (
        <section>
            <h1>{t('israel')}</h1>
        </section>
    )
}