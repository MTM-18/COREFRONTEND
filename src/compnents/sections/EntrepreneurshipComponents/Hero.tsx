import { useTranslation } from "react-i18next";

export default function EntrepreneurshipHero() {
    const ITEMS = ["incubation", "acceleration", "investors", "events"] as const;

    const { t } = useTranslation();
    return (
        <section className="layout-shell py-12 md:py-16">
            {/* Top: text + video */}
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        {t("entrepreneurshipPage.entrepreneurship.title")}
                    </h2>
                    <p className="text-base text-core-textDarl dark:text-core-textLight">
                        {t("entrepreneurshipPage.entrepreneurship.description")}
                    </p>
                </div>

                <div className="w-full">
                    <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden card-surface">
                        <iframe
                            className="absolute inset-0 h-full w-full rounded-2xl"
                            src={t("entrepreneurshipPage.entrepreneurship.videoUrl")}
                            title={t("entrepreneurshipPage.entrepreneurship.videoTitle")}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>

            {/* Bottom: program includes */}
            <div className="max-w-6xl mx-auto mt-12">
                <h3 className="text-xl md:text-2xl font-semibold text-core-brand dark:text-core-textAccent mb-6">
                    {t("entrepreneurshipPage.entrepreneurship.includesTitle")}
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                    {ITEMS.map((key, index) => {
                        const numberLabel = (index + 1).toString().padStart(2, "0");

                        return (
                            <article
                                key={key}
                                className="
                                    group card-surface flex gap-4 items-stretch p-5 md:p-6
                                    border border-core-border/60
                                    hover:border-core-brand hover:bg-core-brand/5
                                    transition-all duration-200 rounded-xl
                                "
                            >
                                {/* Number Box */}
                                <div
                                    className="
                                        flex items-center justify-center px-4 md:px-5 py-3 rounded-xl
                                        text-2xl md:text-3xl font-semibold border
                                        border-core-border/60 text-core-brand/40 bg-core-subtleBg dark:bg-core-subtleBgDark
                                        group-hover:text-core-brand group-hover:border-core-brand
                                        transition-all duration-200
                                    "
                                >
                                    {numberLabel}
                                </div>

                                {/* Description */}
                                <p className="text-sm md:text-base text-core-textDark dark:text-core-textLight leading-relaxed">
                                    {t(`entrepreneurshipPage.entrepreneurship.items.${key}.description`)}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}