import { useTranslation } from "react-i18next";

export default function VisionMissionSection() {
    const { t } = useTranslation();
    return (
        <section className=" py-12 md:py-16">
            <div className="layout-shell max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
                {/* Vision card */}
                <article className="vm-card">
                    {/* Top circle */}
                    <div className="vm-badge vm-badge-vision">
                        <span className="text-xl">👁️</span>
                    </div>

                    {/* Side arrow circle */}
                    <div className="vm-arrow vm-arrow-vision">
                        <span className="text-lg">➜</span>
                    </div>

                    {/* Content */}
                    <h3 className="mt-2 text-sm font-semibold tracking-[0.2em] uppercase text-core-textMuted">
                        {t("aboutPage.vision.title")}
                    </h3>

                    <p className="mt-3 text-sm md:text-base text-core-textDark dark:text-core-textLight">
                        {t("aboutPage.vision.body")}
                    </p>

                    {/* Bottom pointer + index */}
                    <div className="vm-pointer" />
                    <div className="vm-index">01</div>
                </article>

                {/* Mission card */}
                <article className="vm-card">
                    {/* Top circle */}
                    <div className="vm-badge vm-badge-mission">
                        <span className="text-xl">🎯</span>
                    </div>

                    {/* Side arrow circle */}
                    <div className="vm-arrow vm-arrow-mission">
                        <span className="text-lg">➜</span>
                    </div>

                    {/* Content */}
                    <h3 className="mt-2 text-sm font-semibold tracking-[0.2em] uppercase text-core-textMuted">
                        {t("aboutPage.mission.title")}
                    </h3>

                    <p className="mt-3 text-sm md:text-base text-core-textDark dark:text-core-textLight">
                        {t("aboutPage.mission.body")}
                    </p>

                    {/* Bottom pointer + index */}
                    <div className="vm-pointer" />
                    <div className="vm-index">02</div>
                </article>
            </div>
        </section>
    );
}