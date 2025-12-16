import { useTranslation } from "react-i18next";

// Replace later with real per-news images if you want
import NewsImage from "../../../assets/display/W1.webp";

type NewsCardConfig = {
    id: string;
    titleKey: string;
    bodyKey: string;
};

const News_Cards: NewsCardConfig[] = [
    {
        id: "1",
        titleKey: "homePage.newsSection.cards.card1.title",
        bodyKey: "homePage.newsSection.cards.card1.body",
    },
    {
        id: "2",
        titleKey: "homePage.newsSection.cards.card2.title",
        bodyKey: "homePage.newsSection.cards.card2.body",
    },
    {
        id: "3",
        titleKey: "homePage.newsSection.cards.card3.title",
        bodyKey: "homePage.newsSection.cards.card3.body",
    },
    {
        id: "4",
        titleKey: "homePage.newsSection.cards.card4.title",
        bodyKey: "homePage.newsSection.cards.card4.body",
    },
];

export default function NewsSection() {
    const { t } = useTranslation();

    return (
        <section className="py-12 md:py-16">
            <div className="layout-shell max-w-7xl mx-auto space-y-8">
                {/* Title + More */}
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-core-brand dark:text-core-textAccent">
                        {t("homePage.newsSection.title")}
                    </h2>

                    <button className="text-sm font-medium text-core-textDark dark:text-core-textLight underline underline-offset-4">
                        {t("homePage.newsSection.more")}
                    </button>
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {News_Cards.map((card) => (
                        <article
                            key={card.id}
                            className="
                                card-surface
                                relative
                                overflow-hidden
                                group
                                h-[280px] md:h-[300px]
                            "
                        >
                            {/* Image */}
                            <img
                                src={NewsImage}
                                alt={t(card.titleKey)}
                                className="absolute inset-0 h-full w-full object-cover"
                                draggable={false}
                            />

                            {/* Soft overlay for readability */}
                            <div className="absolute inset-0 bg-black/10" />

                            {/* Bottom purple panel */}
                            <div
                                className="
                                    absolute inset-x-0 bottom-0
                                    bg-core-brand/95 text-white
                                    transition-all duration-500 ease-out
                                    h-[64px] group-hover:h-[170px]
                                    px-4 py-3
                                    flex flex-col
                                "
                            >
                                {/* Title */}
                                <h3 className="text-sm font-semibold leading-snug">
                                    {t(card.titleKey)}
                                </h3>

                                {/* Body (appears on hover) */}
                                <p
                                    className="
                                        mt-2 text-xs leading-relaxed text-white/90
                                        opacity-0 translate-y-2
                                        transition-all duration-500 ease-out
                                        group-hover:opacity-100 group-hover:translate-y-0
                                    "
                                >
                                    {t(card.bodyKey)}
                                </p>

                                {/* Tag */}
                                <div className="mt-auto pt-2">
                                    <span className="inline-block text-[10px] px-2 py-1 rounded-full bg-white/15">
                                        {t("homePage.newsSection.tagNew")}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
