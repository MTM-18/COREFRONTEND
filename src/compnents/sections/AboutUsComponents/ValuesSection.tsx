import { useTranslation } from "react-i18next";

import CoreProLogo from "../../../assets/sections/corePro2.png";
import CoreAcademyLogo from "../../../assets/sections/coreAcademy.png";
import CoreVenturesLogo from "../../../assets/sections/CoreVenturesLab.png";
import CorePodcastLogo from "../../../assets/sections/corePro2.png";
import CoreInternLogo from "../../../assets/sections/coreIntern.png";
import CoreConsultingLogo from "../../../assets/sections/CoreConsulting.png";

type SectionItem = {
    id: string;
    logo: string;
    altKey: string;
};

const SECTIONS: SectionItem[] = [
    { id: "corePro", logo: CoreProLogo, altKey: "sections.corePro.title" },
    { id: "coreAcademy", logo: CoreAcademyLogo, altKey: "sections.coreAcademy.title" },
    { id: "coreVentures", logo: CoreVenturesLogo, altKey: "sections.coreVentures.title" },
    { id: "corePodcast", logo: CorePodcastLogo, altKey: "sections.corePodcast.title" },
    { id: "coreIntern", logo: CoreInternLogo, altKey: "sections.coreIntern.title" },
    { id: "coreConsulting", logo: CoreConsultingLogo, altKey: "sections.coreConsulting.title" },
];

export default function OurSectionsTable() {
    const { t } = useTranslation();

    return (
        <section className="">
            <div className="layout-shell  mx-auto space-y-8">
                {/* Heading */}
                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-semibold text-core-brand dark:text-core-textAccent">
                        {t("aboutPage.valuesSection.title")}
                    </h2>

                </div>

                {/* Table-like grid */}
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {SECTIONS.map((s) => (
                        <div
                            key={s.id}
                            className="
                group relative overflow-hidden rounded-2xl
                
                bg-white/90 dark:bg-black/60
                shadow-sm dark:shadow-lg
                transition-transform duration-200
                hover:scale-[1.02]
              "
                        >
                            <div className="h-[140px] sm:h-[160px] lg:h-[170px] p-5 sm:p-6 flex items-center justify-center">
                                <img
                                    src={s.logo}
                                    alt={t(s.altKey)}
                                    loading="lazy"
                                    decoding="async"
                                    className="
                    max-h-16 sm:max-h-20 lg:max-h-24 w-auto object-contain
                    opacity-90 dark:opacity-85
                    transition-transform duration-200
                    group-hover:scale-[1.03]
                  "
                                />
                            </div>

                            {/* subtle overlay that adapts to theme */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/0 via-transparent to-black/5 dark:to-white/10" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
