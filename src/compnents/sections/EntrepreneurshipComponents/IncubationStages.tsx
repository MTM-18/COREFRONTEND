import { useTranslation } from "react-i18next";

const STAGES = ["application", "camp", "incubation", "judging", "post"] as const;

export default function EntrepreneurshipStages() {
    const { t } = useTranslation();

    return (
        <section className="layout-shell py-16 md:py-20">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-2xl md:text-3xl font-semibold text-core-brand dark:text-core-textAccent mb-3">
                    {t("entrepreneurshipPage.incubationStages.title")}
                </h2>

                <p className="text-base md:text-lg text-core-textDark dark:text-core-textLight mb-10 max-w-2xl">
                    {t("entrepreneurshipPage.incubationStages.subtitle")}
                </p>

                <div className="space-y-10">
                    {STAGES.map((key, index) => {
                        const numberLabel = (index + 1).toString().padStart(2, "0");

                        return (
                            <article
                                key={key}
                                className="
                                    group card-surface border border-core-border/60
                                    p-6 md:p-7 rounded-2xl
                                    hover:border-core-brand hover:bg-core-brand/5
                                    transition-all duration-200
                                "
                            >
                                {/* Step number */}
                                <div
                                    className="
                                        text-2xl md:text-3xl font-semibold mb-2
                                        text-core-brand/40 dark:text-core-textAccent/60
                                        group-hover:text-core-brand group-hover:dark:text-core-textAccent
                                        transition-all duration-200
                                    "
                                >
                                    {numberLabel}
                                </div>

                                <h4 className="text-lg md:text-xl font-semibold mb-2 text-core-textDark dark:text-core-textLight">
                                    {t(`entrepreneurshipPage.incubationStages.steps.${key}.title`)}
                                </h4>

                                <p className="text-sm md:text-base leading-relaxed text-core-textDark dark:text-core-textLight">
                                    {t(`entrepreneurshipPage.incubationStages.steps.${key}.description`)}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
