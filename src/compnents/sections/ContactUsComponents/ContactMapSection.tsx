import { useTranslation } from "react-i18next";

export default function ContactMapSection() {
    const { t } = useTranslation();

    return (
        <section className="layout-shell pb-16 md:pb-20">
            <div className="max-w-6xl mx-auto text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                    {t("contactPage.map.title")}
                </h2>
                <p className="text-base text-core-textMuted dark:text-core-textMutedDark">
                    {t("contactPage.map.subtitle")}
                </p>
            </div>

            <div className="max-w-6xl mx-auto card-surface rounded-2xl overflow-hidden border border-core-border/60">
                <div className="relative w-full pt-[56.25%]">
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={t("contactPage.map.embedUrl")}
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        title={t("contactPage.map.title")}
                    />
                </div>
            </div>
        </section>
    );
}
