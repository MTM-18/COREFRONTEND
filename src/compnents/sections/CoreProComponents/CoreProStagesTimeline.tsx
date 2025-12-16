import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
    "recruitTrainers",
    "recruitYouth",
    "implementProgram",
    "employment",
] as const;

export default function CoreProStagesTimeline() {
    const { t } = useTranslation();

    const sectionRef = useRef<HTMLElement | null>(null);
    const lineRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<HTMLDivElement[]>([]);

    // helper to collect refs
    const setItemRef = (el: HTMLDivElement | null, i: number) => {
        if (!el) return;
        itemRefs.current[i] = el;
    };

    useLayoutEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Only touch our elements (no global selectors)
            gsap.set(itemRefs.current, { y: 18, autoAlpha: 0 });
            if (lineRef.current) gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            if (lineRef.current) {
                tl.to(lineRef.current, { scaleX: 1, duration: 0.9, ease: "power2.out" }, 0);
            }

            tl.to(
                itemRefs.current,
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.7,
                    ease: "power3.out",
                    stagger: 0.12,
                },
                0.05
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="layout-shell py-16 md:py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                    {t("coreProPage.vocationalStages.title")}
                </h2>

                <p className="text-sm md:text-base text-core-textDark dark:text-core-textLight mb-10 max-w-2xl">
                    {t("coreProPage.vocationalStages.subtitle")}
                </p>

                {/* Desktop connector line */}
                <div className="relative hidden md:block mb-8">
                    <div className="h-px bg-core-border/40" />
                    <div ref={lineRef} className="absolute inset-0 h-px bg-core-brand" />
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
                    {STAGES.map((key, index) => {
                        const numberLabel = (index + 1).toString().padStart(2, "0");

                        return (
                            <div
                                key={key}
                                ref={(el) => setItemRef(el, index)}
                                className="
                                    card-surface
                                    border border-core-border/60
                                    rounded-2xl
                                    p-6 md:p-7
                                    hover:border-core-brand
                                    hover:bg-core-brand/5
                                    transition-all duration-200
                                "
                            >
                                {/* Step badge */}
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="
                                        w-10 h-10 rounded-full
                                        flex items-center justify-center
                                        border border-core-border/60
                                        text-core-textAccent font-semibold
                                        bg-white/5
                                    ">
                                        {numberLabel}
                                    </div>

                                    <div className="h-px flex-1 bg-core-border/30 md:hidden" />
                                </div>

                                <h3 className="text-base md:text-lg font-semibold mb-2">
                                    {t(`coreProPage.vocationalStages.steps.${key}.title`)}
                                </h3>

                                <p className="text-sm md:text-base text-core-textDark dark:text-core-textLight leading-relaxed">
                                    {t(`coreProPage.vocationalStages.steps.${key}.description`)}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
