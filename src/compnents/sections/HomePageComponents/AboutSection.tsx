import { useTranslation } from "react-i18next";

const ABOUT_VIDEO_ID = "abZAhxDVUwk";

export default function AboutSection() {
    const { t } = useTranslation();

    return (
        <section className="bg-core- py-12 md:py-16">
            <div className="layout-shell max-w-7xl mx-auto space-y-10">
                {/* Title + text */}
                <div className="grid gap-8 md:gap-16 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-start">
                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-core-brand dark:text-core-textAccent">
                        {t("homePage.aboutSection.title")}
                    </h2>

                    {/* Paragraph */}
                    <p className="text-base md:text-lg leading-relaxed text-core-textDark dark:text-core-textLight">
                        {t("homePage.aboutSection.body")}
                    </p>
                </div>

                {/* Video */}
                <div className="flex justify-center">
                    <div className="w-full md:w-3/4 aspect-video">
                        <iframe
                            className="w-full h-full rounded-card shadow-card"
                            src={`https://www.youtube.com/embed/${ABOUT_VIDEO_ID}`}
                            title="Core Istanbul introduction video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
