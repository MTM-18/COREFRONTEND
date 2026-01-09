import { useLayoutEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroPhoto from "../../../assets/display/11.webp";
import HeroPhoto2 from "../../../assets/display/22.webp";
import HeroPhoto3 from "../../../assets/display/33.webp";
import HeroPhoto4 from "../../../assets/display/44.webp";
import HeroPhoto5 from "../../../assets/display/55.webp";

import Vector1 from "../../../assets/icons/PatternCard6 1.svg";

const LEFT_PAD = 10;

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const { t, i18n } = useTranslation();
    const root = useRef<HTMLElement | null>(null);
    const headlineRef = useRef<HTMLHeadingElement | null>(null);

    // ✅ refs for the SVG <image> nodes (one per tile)
    const tileImageRefs = useRef<(SVGImageElement | null)[]>([]);

    // ✅ your 5 hero photos (synced with titles)
    const HERO_PHOTOS = useMemo(
        () => [HeroPhoto, HeroPhoto2, HeroPhoto3, HeroPhoto4, HeroPhoto5],
        []
    );

    const TITLES = useMemo(
        () => [
            t("hero.title1"),
            t("hero.title2"),
            t("hero.title3"),
            t("hero.title4"),
        ],
        [i18n.language, t]
    );

    // ====== TILE LOOK ======
    const STEPS = 5;
    const GAP = 10;
    const RX = 28;

    const VB_W = 1000;

    const topY = 55;
    const stepH = 100;
    const stepRise = stepH + GAP;

    const rightX = 930;
    const startW = 420;
    const growW = 135;
    const maxW = 980;

    const isRTL = (i18n.dir?.() || "ltr") === "rtl";
    const mirror = isRTL;

    const baseTiles = useMemo(() => {
        return Array.from({ length: STEPS }).map((_, i) => {
            const y = topY + i * stepRise;
            const rawW = Math.min(startW + i * growW, maxW);

            const w = Math.min(rawW, rightX - LEFT_PAD);
            const x = rightX - w;

            const isLast = i === STEPS - 1;
            return {
                x,
                y,
                w,
                h: isLast ? stepH + 30 : stepH,
                rx: isLast ? RX + 14 : RX,
            };
        });
    }, []);

    const VB_H = useMemo(() => {
        const bottom = Math.max(...baseTiles.map((r) => r.y + r.h));
        return Math.ceil(bottom + 30);
    }, [baseTiles]);

    const tiles = useMemo(() => {
        return baseTiles.map((r) => (mirror ? { ...r, x: VB_W - (r.x + r.w) } : r));
    }, [baseTiles, mirror]);

    // ✅ helper: set ALL tile images to a new photo (keeps shape/layout untouched)
    const setHeroPhotoForAllTiles = (src: string) => {
        tileImageRefs.current.forEach((node) => {
            if (!node) return;
            // modern
            node.setAttribute("href", src);
            // compatibility
            node.setAttributeNS("http://www.w3.org/1999/xlink", "href", src);
        });
    };

    // Reveal + scroll motion
    useLayoutEffect(() => {
        if (!root.current) return;

        const prefersReduced =
            window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                "[data-hero-text]",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
            );

            if (prefersReduced) return;

            const signX = mirror ? -1 : 1;

            gsap.to(".tile-g", {
                scrollTrigger: {
                    trigger: root.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true,
                },
                x: (i) => signX * (i % 2 ? 180 : -180),
                y: (i) => (i % 2 ? 100 : -100),
                rotation: (i) => (i % 2 ? 5 : -5),
                transformOrigin: "50% 50%",
                ease: "none",
                immediateRender: false,
            });

            gsap.to("[data-floating-vector]", {
                y: -18,
                duration: 4,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
            });
        }, root);

        return () => ctx.revert();
    }, [i18n.language, mirror]);

    // ✅ headline + hero image shuffle AT THE SAME TIME
    useLayoutEffect(() => {
        const el = headlineRef.current;
        if (!el) return;

        const prefersReduced =
            window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

        const CYCLE_LEN = Math.min(TITLES.length, HERO_PHOTOS.length);

        let i = 0;

        // set initial
        el.textContent = TITLES[0] ?? "";
        setHeroPhotoForAllTiles(HERO_PHOTOS[0] ?? "");

        if (prefersReduced || CYCLE_LEN <= 1) return;

        const tileImgs = tileImageRefs.current.filter(Boolean) as SVGImageElement[];

        const tl = gsap.timeline({ repeat: -1 });

        const FADE_OUT = 0.35;
        const FADE_IN = 0.45;
        const HOLD = 2.2;

        tl.to([el, ...tileImgs], { opacity: 0, duration: FADE_OUT, ease: "power2.inOut" })
            .add(() => {
                i = (i + 1) % CYCLE_LEN;

                // ✅ swap BOTH while hidden (same instant)
                el.textContent = TITLES[i] ?? "";
                setHeroPhotoForAllTiles(HERO_PHOTOS[i] ?? HERO_PHOTOS[0]);
            })
            .to([el, ...tileImgs], { opacity: 1, duration: FADE_IN, ease: "power2.inOut" })
            .to({}, { duration: HOLD });

        return () => {
            tl.kill();
        };
    }, [TITLES, HERO_PHOTOS, mirror]);

    return (
        <section
            ref={root}
            className="relative mx-auto w-full px-6 pt-15 h-[100dvh] flex items-center overflow-hidden"
        >
            <div className="grid md:grid-cols-2 gap-16 items-center w-full">
                {/* LEFT */}
                <div className="space-y-6 relative z-10">
                    <span
                        data-hero-text
                        className="inline-block rounded-full border px-3 py-1 text-xs uppercase text-core-textMuted"
                    >
                        {t("hero.eyebrow")}
                    </span>

                    <h1
                        ref={headlineRef}
                        data-hero-text
                        className="block w-full  min-h-[3.2em] text-4xl md:text-5xl font-semibold text-white leading-tight"
                    />

                    {/* <p data-hero-text className="max-w-xl text-core-textMuted">
            {t("hero.subtitle")}
          </p> */}
                </div>

                {/* floating vector */}
                <div
                    data-floating-vector
                    className="
            pointer-events-none absolute left-1/2 top-1/4
            -translate-x-1/2 -translate-y-1/2
            opacity-10 z-0
          "
                >
                    <img src={Vector1} alt="" className="w-48 md:w-64 lg:w-72" draggable={false} />
                </div>

                {/* RIGHT – TILES */}
                <div className=" md:block relative h-[600px] md:h-[680px] rounded-2xl overflow-visible">
                    <svg
                        className="absolute inset-0 h-full w-full"
                        viewBox={`0 0 ${VB_W} ${VB_H}`}
                        preserveAspectRatio="xMidYMid slice"
                        shapeRendering="geometricPrecision"
                        overflow="visible"
                    >
                        <defs>
                            {tiles.map((r, i) => (
                                <clipPath key={i} id={`clip-${i}`} clipPathUnits="userSpaceOnUse">
                                    <rect x={r.x} y={r.y} width={r.w} height={r.h} rx={r.rx} ry={r.rx} />
                                </clipPath>
                            ))}
                        </defs>

                        {tiles.map((_, i) => (
                            <g key={i} className="tile-g" clipPath={`url(#clip-${i})`}>
                                <image
                                    ref={(node) => {
                                        tileImageRefs.current[i] = node;
                                    }}
                                    href={HeroPhoto} // initial (will be swapped by GSAP at the same time as text)
                                    x="0"
                                    y="0"
                                    width={VB_W}
                                    height={VB_H}
                                    preserveAspectRatio="xMidYMid slice"
                                />
                            </g>
                        ))}
                    </svg>
                </div>
            </div>
        </section>
    );
}
