import { useTranslation } from "react-i18next";
import LogoWhite from "../../../assets/logo/logoWhite.png";

export default function CoreProVocationalIntroBand() {
    const { t } = useTranslation();

    return (
        <section className="layout-shell py-12 md:py-16 bg-core-subtleBg dark:bg-core-subtleBgDark">
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-[auto,1fr] items-center">
                {/* C icon – replace src with your real asset */}
                <img
                    src={LogoWhite}
                    alt="Core"
                    className="w-24 h-24"
                />

                <div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">
                        {t("coreProPage.vocationalIntro.title")}
                    </h2>
                    <p className="text-core-textDark dark:text-core-textLight">
                        {t("coreProPage.vocationalIntro.subtitle")}
                    </p>
                    <p className="mt-2 text-sm md:text-base text-core-textDark dark:text-core-textLight">
                        {t("coreProPage.vocationalIntro.tagline")}
                    </p>
                </div>
            </div>
        </section>
    );
}
