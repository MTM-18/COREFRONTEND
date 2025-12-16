import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import all the assets
import abdullahImg from "../../../assets/testimonials/abdullah.webp";
import gassanImg from "../../../assets/testimonials/gassan.webp";
import jammalImg from "../../../assets/testimonials/jammal.webp";
import saadImg from "../../../assets/testimonials/saad.webp";
import yassenImg from "../../../assets/testimonials/yassen.webp";

gsap.registerPlugin(ScrollTrigger);

type TestimonialConfig = {
    id: "yassen" | "saad" | "jammal" | "gassan" | "abdullah";
    image: string;
    quoteKey: string;
    nameKey: string;
    roleKey: string;
};

const Testimonials: TestimonialConfig[] = [
    {
        id: "yassen",
        image: yassenImg,
        quoteKey: "homePage.testimonials.items.yassen.quote",
        nameKey: "homePage.testimonials.items.yassen.name",
        roleKey: "homePage.testimonials.items.yassen.role",
    },
    {
        id: "saad",
        image: saadImg,
        quoteKey: "homePage.testimonials.items.saad.quote",
        nameKey: "homePage.testimonials.items.saad.name",
        roleKey: "homePage.testimonials.items.saad.role",
    },
    {
        id: "jammal",
        image: jammalImg,
        quoteKey: "homePage.testimonials.items.jammal.quote",
        nameKey: "homePage.testimonials.items.jammal.name",
        roleKey: "homePage.testimonials.items.jammal.role",
    },
    {
        id: "gassan",
        image: gassanImg,
        quoteKey: "homePage.testimonials.items.gassan.quote",
        nameKey: "homePage.testimonials.items.gassan.name",
        roleKey: "homePage.testimonials.items.gassan.role",
    },
    {
        id: "abdullah",
        image: abdullahImg,
        quoteKey: "homePage.testimonials.items.abdullah.quote",
        nameKey: "homePage.testimonials.items.abdullah.name",
        roleKey: "homePage.testimonials.items.abdullah.role",
    },
];

export default function TestimonialsSection() {
    const { t } = useTranslation();
    const root = useRef<HTMLElement | null>(null);

    useLayoutEffect(() => {
        if (!root.current) return;

        const prefersReduced =
            window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>("[data-t-card]");
            const headerBits = gsap.utils.toArray<HTMLElement>("[data-t-head]");

            // Initial states
            gsap.set(headerBits, { opacity: 0, y: 18 });
            gsap.set(cards, { opacity: 0, y: 26, scale: 0.985 });
            gsap.set("[data-t-quote]", { opacity: 0, scale: 0.6, rotate: -8 });

            if (prefersReduced) {
                gsap.set([...headerBits, ...cards, "[data-t-quote]"], {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                });
                return;
            }

            // Scroll reveal timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: root.current,
                    start: "top 75%",
                },
                defaults: { ease: "power3.out" },
            });

            tl.to(headerBits, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 })
                .to(
                    cards,
                    { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.12 },
                    "-=0.2"
                )
                .to(
                    "[data-t-quote]",
                    { opacity: 1, scale: 1, rotate: 0, duration: 0.5, stagger: 0.12 },
                    "-=0.55"
                );

            // Hover tilt (per card) — smooth and premium
            cards.forEach((card) => {
                const onEnter = () => {
                    gsap.to(card, {
                        y: -6,
                        rotateX: 3,
                        rotateY: -3,
                        transformPerspective: 900,
                        transformOrigin: "50% 50%",
                        duration: 0.35,
                        ease: "power2.out",
                    });
                    gsap.to(card, {
                        boxShadow: "0 18px 50px rgba(0,0,0,0.22)",
                        duration: 0.35,
                        ease: "power2.out",
                    });
                };

                const onLeave = () => {
                    gsap.to(card, {
                        y: 0,
                        rotateX: 0,
                        rotateY: 0,
                        duration: 0.45,
                        ease: "power3.out",
                    });
                    gsap.to(card, {
                        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                        duration: 0.45,
                        ease: "power3.out",
                    });
                };

                card.addEventListener("mouseenter", onEnter);
                card.addEventListener("mouseleave", onLeave);

                // Cleanup for each listener
                ScrollTrigger.addEventListener("refreshInit", () => { });
                (card as any).__cleanup = () => {
                    card.removeEventListener("mouseenter", onEnter);
                    card.removeEventListener("mouseleave", onLeave);
                };
            });

            // cleanup all hover listeners on revert
            return () => {
                cards.forEach((c) => (c as any).__cleanup?.());
            };
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={root} className="py-12 md:py-16">
            <div className="layout-shell max-w-7xl mx-auto space-y-10">
                {/* Heading */}
                <div className="space-y-3">
                    <h2
                        data-t-head
                        className="text-2xl md:text-3xl font-semibold text-core-brand dark:text-core-textAccent"
                    >
                        {t("homePage.testimonials.title")}
                    </h2>
                    <p
                        data-t-head
                        className="text-sm md:text-base max-w-2xl text-core-textDark dark:text-core-textLight"
                    >
                        {t("homePage.testimonials.subtitle")}
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {Testimonials.map((item) => (
                        <article
                            key={item.id}
                            data-t-card
                            className="card-surface flex flex-col gap-6 p-6 md:p-8"
                            style={{
                                willChange: "transform, box-shadow",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                            }}
                        >
                            <div data-t-quote className="text-core-brand text-3xl">
                                “
                            </div>

                            <p className="text-sm leading-relaxed text-core-textDark dark:text-core-textLight flex-1">
                                {t(item.quoteKey)}
                            </p>

                            <div className="flex items-center gap-3">
                                <img
                                    src={item.image}
                                    alt={t(item.nameKey)}
                                    className="h-12 w-12 rounded-full object-cover"
                                />
                                <div>
                                    <div className="text-sm font-semibold text-core-textDark dark:text-core-textLight">
                                        {t(item.nameKey)}
                                    </div>
                                    <div className="text-xs text-core-textMuted">
                                        {t(item.roleKey)}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
