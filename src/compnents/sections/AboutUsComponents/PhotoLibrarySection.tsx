import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react";

import programmingImg from "../../../assets/display/accounting.webp";
import ecommerceImg from "../../../assets/display/ecommerce.webp";
import marketing1Img from "../../../assets/display/marketing1.webp";
import marketing2Img from "../../../assets/display/marketing2.webp";
import designImg from "../../../assets/display//design.webp";
import interiorImg from "../../../assets/display/interior.webp";
import accountingImg from "../../../assets/display/accounting.webp";
import coworkingImg from "../../../assets/display/coworking.webp";
import vocationalImg from "../../../assets/display/vocaltional.webp";
import entrepreneurshipImg from "../../../assets/display/entrepreneurship.webp";

type GalleryItem = {
    id: string;
    image: string;
};

const GALLERY: GalleryItem[] = [
    { id: "programming", image: programmingImg },
    { id: "ecommerce", image: ecommerceImg },
    { id: "marketing1", image: marketing1Img },
    { id: "marketing2", image: marketing2Img },
    { id: "design", image: designImg },
    { id: "interior", image: interiorImg },
    { id: "accounting", image: accountingImg },
    { id: "coworking", image: coworkingImg },
    { id: "vocational", image: vocationalImg },
    { id: "entrepreneurship", image: entrepreneurshipImg },
];

export default function PhotoLibrarySection() {
    const { t } = useTranslation();
    const [activeId, setActiveId] = useState<string>(GALLERY[0]?.id ?? "programming");

    const activeItem = useMemo(
        () => GALLERY.find((x) => x.id === activeId) ?? GALLERY[0],
        [activeId]
    );

    return (
        <section className="py-10 md:py-10">
            <div className="layout-shell mx-auto space-y-8">
                {/* Heading */}
                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-semibold text-core-brand dark:text-core-textAccent">
                        {t("aboutPage.gallery.title")}
                    </h2>

                    <p className="text-sm md:text-base text-core-textDark dark:text-core-textLight max-w-xl">
                        {t("aboutPage.gallery.subtitle")}
                    </p>
                </div>

                {/* Big selected */}
                {activeItem && (
                    <figure className="card-surface overflow-hidden rounded-2xl">
                        <img
                            src={activeItem.image}
                            alt={t(`aboutPage.gallery.items.${activeItem.id}.label`)}
                            className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover"
                            draggable={false}
                        />
                        <figcaption className="px-4 py-3 text-xs md:text-sm text-core-textMuted">
                            {t(`aboutPage.gallery.items.${activeItem.id}.label`)}
                        </figcaption>
                    </figure>
                )}

                {/* Grid */}
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {GALLERY.map((item) => {
                        const isActive = item.id === activeId;

                        return (
                            <figure
                                key={item.id}
                                role="button"
                                tabIndex={0}
                                onClick={() => setActiveId(item.id)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") setActiveId(item.id);
                                }}
                                className={[
                                    "card-surface overflow-hidden group cursor-pointer outline-none",
                                    "focus-visible:ring-2 focus-visible:ring-core-textAccent",
                                    isActive ? "ring-2 ring-core-textAccent/70" : "",
                                ].join(" ")}
                            >
                                <img
                                    src={item.image}
                                    alt={t(`aboutPage.gallery.items.${item.id}.label`)}
                                    className={[
                                        "w-full h-52 object-cover transition-transform duration-300",
                                        isActive ? "scale-[1.02]" : "group-hover:scale-105",
                                    ].join(" ")}
                                    draggable={false}
                                />
                                <figcaption className="px-4 py-3 text-xs md:text-sm text-core-textMuted">
                                    {t(`aboutPage.gallery.items.${item.id}.label`)}
                                </figcaption>
                            </figure>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
