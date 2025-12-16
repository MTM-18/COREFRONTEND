import { useTranslation } from "react-i18next";

export default function CoreProVocationalHero() {
    const { t } = useTranslation();

    return (
        <section className="layout-shell py-16 md:py-20">
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                        {t("coreProPage.vocationalHero.title")}
                    </h1>
                    <p className="text-base md:text-lg text-core-textDark dark:text-core-textLight">
                        {t("coreProPage.vocationalHero.subtitle")}
                    </p>
                </div>

                <div className="w-full">
                    <div className="relative w-full pt-[56.25%] card-surface rounded-2xl overflow-hidden">
                        <iframe
                            className="absolute inset-0 h-full w-full rounded-2xl"
                            src={t("coreProPage.vocationalHero.videoUrl")}
                            title={t("coreProPage.vocationalHero.videoTitle")}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
