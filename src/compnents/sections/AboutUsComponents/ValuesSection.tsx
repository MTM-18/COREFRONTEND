import { useTranslation } from "react-i18next";

// import your patterns
import Pattern1 from "../../../assets/icons/Pattern 1.svg";
import Pattern2 from "../../../assets/icons/PatternCard2 1.svg";
import Pattern3 from "../../../assets/icons/PatternCard3 1.svg";
import Pattern4 from "../../../assets/icons/PatternCard4 1.svg";
import Pattern5 from "../../../assets/icons/PatternCard5 1.svg";
import Pattern6 from "../../../assets/icons/PatternCard6 1.svg";


type ValueItem = {
    id:
    | "partnership"
    | "quality"
    | "innovation"
    | "institutionalism"
    | "trust"
    | "efficiency";
    icon: string;
    titleKey: string;
    bodyKey: string;
}

const VALUES: ValueItem[] = [
    {
        id: "partnership",
        icon: Pattern1,
        titleKey: "aboutPage.valuesSection.items.partnership.title",
        bodyKey: "aboutPage.valuesSection.items.partnership.body",
    },
    {
        id: "quality",
        icon: Pattern2,
        titleKey: "aboutPage.valuesSection.items.quality.title",
        bodyKey: "aboutPage.valuesSection.items.quality.body",
    },
    {
        id: "innovation",
        icon: Pattern3,
        titleKey: "aboutPage.valuesSection.items.innovation.title",
        bodyKey: "aboutPage.valuesSection.items.innovation.body",
    },
    {
        id: "institutionalism",
        icon: Pattern4,
        titleKey: "aboutPage.valuesSection.items.institutionalism.title",
        bodyKey: "aboutPage.valuesSection.items.institutionalism.body",
    },
    {
        id: "trust",
        icon: Pattern5,
        titleKey: "aboutPage.valuesSection.items.trust.title",
        bodyKey: "aboutPage.valuesSection.items.trust.body",
    },
    {
        id: "efficiency",
        icon: Pattern6,
        titleKey: "aboutPage.valuesSection.items.efficiency.title",
        bodyKey: "aboutPage.valuesSection.items.efficiency.body",
    },
];


export default function ValuesSection() {
    const { t } = useTranslation();

    return (
        <section className=" py-12 md:py-16">
            <div className="layout-shell max-w-7xl mx-auto space-y-10">

                {/* Heading */}
                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-semibold text-core-brand dark:text-core-textAccent">
                        {t("aboutPage.valuesSection.title")}
                    </h2>

                    <p className="text-sm md:text-base text-core-textDark dark:text-core-textLight max-w-xl">
                        {t("aboutPage.valuesSection.subtitle")}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 md:gap-8 md:grid-cols-3">
                    {VALUES.map((values) => (
                        <article
                            key={values.id}
                            className="card-surface p-6 md:p-8 flex flex-col justify-between"
                        >
                            {/* Text */}
                            <div>
                                <h3 className="text-base font-semibold text-core-textDark dark:text-core-textLight">
                                    {t(values.titleKey)}
                                </h3>

                                <p className="text-sm mt-2 text-core-textMuted leading-relaxed">
                                    {t(values.bodyKey)}
                                </p>
                            </div>

                            {/* Icon */}
                            <div className="mt-6 flex justify-start">
                                <img
                                    src={values.icon}
                                    className="h-20 w-auto"
                                    alt={t(values.titleKey)}
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>

    );

}