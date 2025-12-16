import { useTranslation } from "react-i18next";

const PROGRAMS = ["one", "two", "three"] as const;

export default function EntrepreneurshipApplication() {
    const { t } = useTranslation();

    return (
        <section className="layout-shell py-16 md:py-20">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-2xl md:text-3xl font-semibold text-core-brand dark:text-core-textAccent mb-3">
                    {t("entrepreneurshipPage.applicationPrograms.title")}
                </h2>

                <p className="text-base md:text-lg text-core-textDark dark:text-core-textLight mb-10 max-w-2xl">
                    {t("entrepreneurshipPage.applicationPrograms.subtitle")}
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                    {PROGRAMS.map((key) => (
                        <article
                            key={key}
                            className="
                                group card-surface border border-core-border/60
                                rounded-2xl p-6 md:p-7
                                hover:border-core-brand hover:bg-core-brand/5
                                transition-all duration-200
                            "
                        >
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-core-textDark dark:text-core-textLight">
                                {t(`entrepreneurshipPage.applicationPrograms.items.${key}.title`)}
                            </h3>

                            <p className="text-sm md:text-base leading-relaxed text-core-textDark dark:text-core-textLight">
                                {t(`entrepreneurshipPage.applicationPrograms.items.${key}.description`)}
                            </p>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}
