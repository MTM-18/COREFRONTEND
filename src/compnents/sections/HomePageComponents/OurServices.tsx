import { useTranslation } from "react-i18next";

// ✅ Replace with your real photos
import ProgramImg from "../../../assets/display/1.webp";
import CoreProImg from "../../../assets/display/2.webp";
import WorkspaceImg from "../../../assets/display/3.webp";

type ServiceCardConfig = {
    id: string;
    titleKey: string;
    bodyKey: string;
    imageSrc: string;
};

const SERVICE_CARDS: ServiceCardConfig[] = [
    {
        id: "program",
        titleKey: "homePage.servicesSection.cards.program.title",
        bodyKey: "homePage.servicesSection.cards.program.body",
        imageSrc: ProgramImg,
    },
    {
        id: "corePro",
        titleKey: "homePage.servicesSection.cards.corePro.title",
        bodyKey: "homePage.servicesSection.cards.corePro.body",
        imageSrc: CoreProImg,
    },
    {
        id: "workspace",
        titleKey: "homePage.servicesSection.cards.workspace.title",
        bodyKey: "homePage.servicesSection.cards.workspace.body",
        imageSrc: WorkspaceImg,
    },
];

export default function ServiceSection() {
    const { t, i18n } = useTranslation();
    const isRTL = (i18n.dir?.() || "ltr") === "rtl";

    return (
        <section className="py-12 md:py-16">
            <div className="layout-shell max-w-7xl mx-auto space-y-10">
                {/* Heading + subtitle */}
                <div className={`space-y-3 text-center ${isRTL ? "md:text-right" : "md:text-left"}`}>
                    <h2 className="text-2xl md:text-3xl font-semibold text-core-brand dark:text-core-textAccent">
                        {t("homePage.servicesSection.title")}
                    </h2>
                    <p
                        className={`text-sm md:text-base max-w-2xl text-core-textDark dark:text-core-textLight ${isRTL ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
                            } mx-auto`}
                    >
                        {t("homePage.servicesSection.subtitle")}
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:gap-8 md:grid-cols-3">
                    {SERVICE_CARDS.map((card) => (
                        <article
                            key={card.id}
                            className="card-surface overflow-hidden group relative h-[420px] md:h-[460px]"
                        >
                            {/* Image */}
                            <img
                                src={card.imageSrc}
                                alt={t(card.titleKey)}
                                className="absolute inset-0 h-full w-full object-cover"
                                draggable={false}
                            />

                            {/* Optional soft dark overlay to keep text premium */}
                            <div className="absolute inset-0 bg-black/10" />

                            {/* Bottom purple panel (expands on hover) */}
                            <div
                                className={`
                  absolute inset-x-0 bottom-0
                  bg-core-brand/95 text-white
                  transition-all duration-500 ease-out
                  h-[86px] group-hover:h-[220px]
                  px-6 py-5
                `}
                            >
                                <h3 className="text-lg md:text-xl font-semibold">
                                    {t(card.titleKey)}
                                </h3>

                                {/* Body appears smoothly */}
                                <p
                                    className={`
                    mt-3 text-sm leading-relaxed text-white/90
                    transition-all duration-500 ease-out
                    opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                  `}
                                >
                                    {t(card.bodyKey)}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
