import { useTranslation } from "react-i18next";

import namaaCharityLogo from "../../../assets/donorsLogos/namaaCharityLogo.webp";
import abdullahNoriCharityLogo from "../../../assets/donorsLogos/abdullahNoriCharityLogo.webp";

import dhiaAcademyLogo from "../../../assets/donorsLogos/dhiaAcademy.png";
import islamicDevelopmentBankLogo from "../../../assets/donorsLogos/islamicDevelopmentBank.jpg";
import qatarAlkhairiahLogo from "../../../assets/donorsLogos/qatarAlkhairiah.svg";
import sparkLogo from "../../../assets/donorsLogos/Spark (2).png";
import unhcrLogo from "../../../assets/donorsLogos/UNHCR (2).png";

type Donor = {
    id: string;
    image: string;
};

const DONORS: Donor[] = [
    { id: "namaa", image: namaaCharityLogo },
    { id: "nouri", image: abdullahNoriCharityLogo },
    { id: "dhiaAcademy", image: dhiaAcademyLogo },
    { id: "islamicDevelopmentBank", image: islamicDevelopmentBankLogo },
    { id: "qatarAlkhairiah", image: qatarAlkhairiahLogo },
    { id: "spark", image: sparkLogo },
    { id: "unhcr", image: unhcrLogo },
];

export default function DonorsSection() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language?.startsWith("ar");

    // ✅ خليها نسختين فقط حتى -50% يكون seamless صح
    const loop = [...DONORS, ...DONORS];

    return (
        <section>
            <style>{`
        .donors-marquee { 
          overflow: hidden; 
          width: 100vw; 
          margin-left: calc(50% - 50vw);
          direction: ltr; /* ✅ مهم: لا تخلي RTL يأثر على flex */
        }

        .donors-track {
          display: flex;
          width: max-content;
          animation: donors-scroll-ltr 26s linear infinite;
          will-change: transform;
        }

        .donors-marquee:hover .donors-track { animation-play-state: paused; }

        @keyframes donors-scroll-ltr {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ✅ بالعربي نعكس الحركة بدون ما نعكس الـ layout */
        .donors-marquee[data-rtl="true"] .donors-track {
          animation-name: donors-scroll-rtl;
        }

        @keyframes donors-scroll-rtl {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .donors-track { animation: none; transform: none; }
        }
      `}</style>

            {/* Heading */}
            <div className="layout-shell  mx-auto space-y-10">
                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-semibold text-core-brand dark:text-core-textAccent">
                        {t("aboutPage.donors.title")}
                    </h2>

                    <p className="text-sm md:text-base text-core-textDark dark:text-core-textLight max-w-xl">
                        {t("aboutPage.donors.subtitle")}
                    </p>
                </div>
            </div>

            {/* Marquee FULL WIDTH */}
            <div
                className="
          donors-marquee mt-6 px-6
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
        "
                data-rtl={isRtl ? "true" : "false"}
            >
                <div className="donors-track gap-12">
                    {loop.map((donor, idx) => (
                        <div key={`${donor.id}-${idx}`} className="flex flex-col items-center">
                            <div
                                className="
                  w-28 h-28 md:w-32 md:h-32
                  rounded-full
                  bg-white/100 dark:bg-white/100
                  border border-black/10 dark:border-white/15
                  shadow-sm transition hover:shadow-md hover:-translate-y-0.5
                  flex items-center justify-center
                  p-5
                "
                            >
                                <img
                                    src={donor.image}
                                    alt={t(`aboutPage.donors.list.${donor.id}.name`)}
                                    className="max-h-full max-w-full object-contain"
                                    loading="lazy"
                                    draggable={false}
                                />
                            </div>

                            <p
                                dir={isRtl ? "rtl" : "ltr"}
                                className="mt-3 text-sm text-core-textblack dark:text-core-textLight text-center whitespace-nowrap"
                            >
                                {t(`aboutPage.donors.list.${donor.id}.name`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
