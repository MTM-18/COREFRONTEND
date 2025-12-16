import { useTranslation } from "react-i18next";

import namaaCharityLogo from "../../../assets/logo/CharitySocietyLogo.webp";
import abdullahNoriCharityLogo from "../../../assets/logo/CharitySocietyLogo2.webp";

type Donor = {
    id: string;
    image: string;
}

const DONORS: Donor[] = [
    { id: "namaa", image: namaaCharityLogo },
    { id: "nouri", image: abdullahNoriCharityLogo }
];

export default function DonorsSection() {
    const { t } = useTranslation();

    return (
        <section className=" py-12 md:py-16">
            <div className="layout-shell max-w-7xl mx-auto space-y-10">

                {/* Heading */}
                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-semibold text-core-brand dark:text-core-textAccent">
                        {t("aboutPage.donors.title")}
                    </h2>

                    <p className="text-sm md:text-base text-core-textDark dark:text-core-textLight max-w-xl">
                        {t("aboutPage.donors.subtitle")}
                    </p>
                </div>

                {/* Logos */}
                <div className="flex flex-wrap justify-start md:justify-start gap-12 mt-6">
                    {DONORS.map((donor) => (
                        <div key={donor.id} className="flex flex-col items-center">
                            <img
                                src={donor.image}
                                alt={t(`aboutPage.donors.list.${donor.id}.name`)}
                                className="h-24 object-contain"
                            />

                            <p className="mt-3 text-sm text-core-textMuted text-center">
                                {t(`aboutPage.donors.list.${donor.id}.name`)}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}