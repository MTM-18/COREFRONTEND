import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import incubationImg from "../../../assets/display/6.webp";
import PurpleOutlinedLogo from "../../../assets/logo/lwhiteLogoPurpleOutline.png";
import IncubationVector from "../../../assets/icons/PatternCard5 2.svg";

export default function EntrepreneurshipIntro() {
    const { t } = useTranslation();
    const vectorRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (!vectorRef.current) return;

        const tween = gsap.to(vectorRef.current, {
            y: -14,
            duration: 2.6,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
        });

        return () => {
            tween.kill();
        };
    }, []);

    return (
        <section className="layout-shell py-16 md:py-20">
            {/* Top paragraph + icon */}
            <div className="max-w-5xl mx-auto mb-16 grid gap-6 md:grid-cols-[auto,1fr] items-start">
                <img
                    src={PurpleOutlinedLogo}
                    alt="Core Istanbul icon"
                    className="w-20 h-20"
                />

                <p className="text-lg md:text-xl leading-relaxed text-core-textDark dark:text-core-textLight">
                    {t("entrepreneurshipPage.incubation.intro")}
                </p>
            </div>

            {/* Bottom section */}
            <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
                {/* LEFT: title + animated vector */}
                <div className="relative flex flex-col gap-20">
                    <h3 className="text-2xl md:text-3xl font-semibold text-core-brand dark:text-core-textAccent">
                        {t("entrepreneurshipPage.incubation.title")}
                    </h3>

                    <img
                        ref={vectorRef}
                        src={IncubationVector}
                        alt=""
                        aria-hidden
                        className="w-full max-w-xs ml-2 opacity-85 dark:opacity-80"
                    />
                </div>

                {/* RIGHT: image + text */}
                <div className="flex flex-col gap-6">
                    <img
                        src={incubationImg}
                        alt={t("entrepreneurshipPage.incubation.imgAlt")}
                        className="w-full rounded-xl shadow-md object-cover"
                    />

                    <p className="text-base md:text-lg leading-relaxed text-core-textDark dark:text-core-textLight">
                        {t("entrepreneurshipPage.incubation.description")}
                    </p>
                </div>
            </div>
        </section>
    );
}
