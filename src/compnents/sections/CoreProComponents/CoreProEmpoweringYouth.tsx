import { useTranslation } from "react-i18next";
import empoweringImg from "../../../assets/display/W1.webp"; // adjust path

export default function CoreProEmpoweringYouth() {
    const { t } = useTranslation();

    return (
        <section className="layout-shell py-12 md:py-16 bg-core-surfaceAlt dark:bg-core-surfaceAltDark">
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-[1fr,1.2fr,1.3fr] items-center">
                <h2 className="text-2xl font-semibold text-core-brand dark:text-core-textAccent">
                    {t("coreProPage.empoweringYouth.title")}
                </h2>

                <div className="w-full">
                    <img
                        src={empoweringImg}
                        alt={t("coreProPage.empoweringYouth.imgAlt")}
                        className="w-full rounded-xl object-cover shadow-md"
                    />
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-semibold">
                        {t("coreProPage.empoweringYouth.heading")}
                    </h3>
                    <p className="text-sm md:text-base text-core-textDark dark:text-core-textLight leading-relaxed">
                        {t("coreProPage.empoweringYouth.body")}
                    </p>
                </div>
            </div>
        </section>
    );
}
