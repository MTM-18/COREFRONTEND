import { useTranslation } from "react-i18next";
import {
    FiCamera,
    FiFilm,
    FiMonitor,
    FiTrendingUp,
    FiFileText,
    FiBriefcase,
    FiCode,
    FiVideo,
    FiShoppingCart,
    FiBarChart2,
} from "react-icons/fi";

const FIELDS: {
    key: string;
    icon: React.ComponentType<{ className?: string }>;
}[] = [
        { key: "photography", icon: FiCamera },
        { key: "videoEditing", icon: FiFilm },
        { key: "graphicDesign", icon: FiMonitor },
        { key: "digitalMarketing", icon: FiTrendingUp },
        { key: "financialAccounting", icon: FiFileText },
        { key: "secretarial", icon: FiBriefcase },
        { key: "programming", icon: FiCode },
        { key: "videoShooting", icon: FiVideo },
        { key: "ecommerce", icon: FiShoppingCart },
        { key: "dataAnalysis", icon: FiBarChart2 },
    ];

export default function CoreProTrainingFields() {
    const { t } = useTranslation();

    return (
        <section className="layout-shell py-16 md:py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xl md:text-2xl font-semibold mb-2 text-core-textDark dark:text-core-textLight">
                    {t("coreProPage.trainingFields.title")}
                </h2>
                <p className="text-sm md:text-base text-core-textdark dark:text-core-textLight mb-8">
                    {t("coreProPage.trainingFields.subtitle")}
                </p>

                <div className="grid gap-4 md:grid-cols-5 sm:grid-cols-2">
                    {FIELDS.map(({ key, icon: Icon }) => (
                        <article
                            key={key}
                            className="
                group card-surface border border-core-brand/50
                rounded-xl p-4 flex flex-col items-center justify-center text-center
                hover:bg-core-brand/5 hover:border-core-brand
                transition-all duration-200
              "
                        >
                            <Icon className="text-2xl mb-3 text-core-brand group-hover:scale-110 transition-transform duration-200" />
                            <p className="text-sm font-medium text-core-textDark dark:text-core-textLight">
                                {t(`coreProPage.trainingFields.items.${key}`)}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
