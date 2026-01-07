// src/compnents/sections/CoreProComponents/programPage.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import {
    FaTruck,
    FaIndustry,
    FaShoppingCart,
    FaBrain,
    FaLaptopCode,
    FaHeartbeat,
    FaBullhorn,
    FaPenNib,
    FaCamera,
    FaCode,
    FaCalculator,
    FaVideo,
    FaTasks,
    FaCouch,
    FaFeatherAlt
} from "react-icons/fa";


const program1Logos = Object.values(
    import.meta.glob("/src/assets/logo/studentLogos/program1/*.{png,jpg,jpeg,webp,svg}", {
        eager: true,
        import: "default"
    })
) as string[];

const program2Logos = Object.values(
    import.meta.glob("/src/assets/logo/studentLogos/program2/*.{png,jpg,jpeg,webp,svg}", {
        eager: true,
        import: "default"
    })
) as string[];

const program3Logos = Object.values(
    import.meta.glob("/src/assets/logo/studentLogos/program3/*.{png,jpg,jpeg,webp,svg}", {
        eager: true,
        import: "default"
    })
) as string[];


type TabKey = "vocational" | "advanced" | "internship" | "entrepreneurship";

type Stat = { value: string; label: string };
type Quote = { name: string; text: string };
type Stage = { title: string; desc: string };

export default function ProgramsPage() {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language?.startsWith("ar");

    const [active, setActive] = useState<TabKey>("vocational");
    const baseKey = "coreProPage"; // ✅ your JSON is under coreProPage

    // refs for auto-scroll active tab into view on mobile
    const tabRefs = useRef<Record<TabKey, HTMLButtonElement | null>>({
        vocational: null,
        advanced: null,
        internship: null,
        entrepreneurship: null
    });

    useEffect(() => {
        tabRefs.current[active]?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });
    }, [active]);

    // Safe array getter (prevents `.map is not a function` when key missing)
    const getArray = <T,>(key: string): T[] => {
        const v = t(key, { returnObjects: true });
        return Array.isArray(v) ? (v as T[]) : [];
    };

    const tabs = useMemo(
        () =>
            [
                { key: "vocational", label: t(`${baseKey}.tabs.vocational`) },
                { key: "advanced", label: t(`${baseKey}.tabs.advanced`) },
                { key: "internship", label: t(`${baseKey}.tabs.internship`) },
                { key: "entrepreneurship", label: t(`${baseKey}.tabs.entrepreneurship`) }
            ] as { key: TabKey; label: string }[],
        [t]
    );

    return (
        <section dir={isAr ? "rtl" : "ltr"} className="w-full">
            {/* Header */}
            <div className="mb-6 w-full">
                <h1 className="text-3xl font-semibold tracking-tight">
                    {t(`${baseKey}.title`)}
                </h1>
                <p className="mt-2 text-sm opacity-80 max-w-2xl">
                    {t(`${baseKey}.subtitle`)}
                </p>

                {/* ✅ Tabs (mobile-safe + better selector) */}
                <div className="mt-5 w-full flex justify-center">
                    <div
                        role="tablist"
                        aria-label={t(`${baseKey}.title`)}
                        className={[
                            "w-full sm:w-fit",
                            "flex items-center gap-1",
                            "rounded-full border border-black/10 dark:border-white/10",
                            "bg-white/60 dark:bg-white/5 backdrop-blur",
                            "p-1",
                            // ✅ prevents pop-out: scroll horizontally on small screens
                            "overflow-x-auto overflow-y-hidden",
                            "flex-nowrap",
                            "max-w-full",
                            // ✅ hide scrollbar (no plugin needed)
                            "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                        ].join(" ")}
                    >
                        {tabs.map((tab) => {
                            const on = tab.key === active;

                            return (
                                <button
                                    key={tab.key}
                                    ref={(el) => {
                                        tabRefs.current[tab.key] = el;
                                    }}
                                    type="button"
                                    role="tab"
                                    aria-selected={on}
                                    onClick={() => setActive(tab.key)}
                                    className={[
                                        // ✅ do not shrink, keep label in one line
                                        "shrink-0 whitespace-nowrap",
                                        // sizing
                                        "px-4 py-2 text-xs sm:text-sm",
                                        "rounded-full transition",
                                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                                        on
                                            ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                                            : "text-black/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/10"
                                    ].join(" ")}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
                {active === "vocational" && (
                    <Vocational t={t} getArray={getArray} baseKey={baseKey} />
                )}

                {active === "entrepreneurship" && (
                    <Entrepreneurship t={t} getArray={getArray} baseKey={baseKey} />
                )}

                {(active === "advanced" || active === "internship") && (
                    <ComingSoon t={t} baseKey={baseKey} />
                )}
            </div>
        </section>
    );
}

/* ------------------------ UI helpers ------------------------ */

function Card({
    title,
    children
}: {
    title?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-5 shadow-sm">
            {title ? <div className="text-sm font-semibold">{title}</div> : null}
            <div className={title ? "mt-3" : ""}>{children}</div>
        </div>
    );
}

function StatsGrid({ stats }: { stats: Stat[] }) {
    if (!stats.length) return null;

    return (
        <div
            className={[
                "w-full",
                "overflow-x-auto overflow-y-hidden",
                "py-1",
                "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            ].join(" ")}
        >
            <div
                className={[
                    "grid",
                    "grid-flow-col",   // fill columns first
                    "grid-rows-2",     // ✅ two lines
                    "gap-3",
                    "auto-cols-[minmax(160px,1fr)]", // tile width
                    "items-stretch"
                ].join(" ")}
            >
                {stats.map((s, idx) => (
                    <div
                        key={idx}
                        className={[
                            "rounded-xl border border-black/10 dark:border-white/10",
                            "bg-white/60 dark:bg-white/5",
                            "p-3",
                            "min-h-[76px]",
                            "flex flex-col justify-start gap-1"
                        ].join(" ")}
                    >
                        <div className="text-lg font-semibold leading-none">{s.value}</div>
                        <div className="text-xs opacity-80 leading-snug break-words">
                            {s.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


function Chips({ items }: { items: string[] }) {
    if (!items.length) return null;

    return (
        <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            {items.map((it, idx) => (
                <li
                    key={idx}
                    className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2"
                >
                    {it}
                </li>
            ))}
        </ul>
    );
}

/* ------------------------ Tabs content ------------------------ */

function ComingSoon({
    t,
    baseKey
}: {
    t: (k: string, o?: any) => any;
    baseKey: string;
}) {
    return (
        <Card title={t(`${baseKey}.comingSoon.title`)}>
            <p className="text-sm opacity-80">{t(`${baseKey}.comingSoon.desc`)}</p>
        </Card>
    );
}

function Vocational({
    t,
    getArray,
    baseKey
}: {
    t: (k: string, o?: any) => any;
    getArray: <T, >(key: string) => T[];
    baseKey: string;
}) {
    const sectors = getArray<string>(`${baseKey}.vocational.sectors`);
    const stats = getArray<Stat>(`${baseKey}.vocational.stats`);
    const testimonials = getArray<Quote>(`${baseKey}.vocational.testimonials`);

    return (
        <div className="space-y-4">
            <Card>
                <div className="text-xl font-semibold">{t(`${baseKey}.vocational.title`)}</div>

                <p className="mt-2 text-sm opacity-80">
                    <span className="font-semibold">{t(`${baseKey}.vocational.aboutTitle`)}: </span>
                    {t(`${baseKey}.vocational.about`)}
                </p>
            </Card>

            <div className="grid lg:grid-cols-2 gap-4">
                <Card title={t(`${baseKey}.vocational.sectorsTitle`)}>
                    <SectorRail
                        items={sectors}
                        icons={[
                            FaBullhorn,      // Digital Marketing
                            FaShoppingCart,  // E-commerce
                            FaPenNib,        // Graphic Design
                            FaCamera,        // Photography
                            FaCode,          // Programming
                            FaCalculator,    // Financial Accounting
                            FaVideo,         // Video Production
                            FaTasks,         // Project Management
                            FaCouch,         // Interior Design
                            FaFeatherAlt     // Content Creation
                        ]}
                    />
                </Card>

                <Card title={t(`${baseKey}.vocational.achievementsTitle`)}>
                    <StatsGrid stats={stats} />
                </Card>
            </div>

            {!!testimonials.length && (
                <Card title={t(`${baseKey}.vocational.testimonialsTitle`)}>
                    <div className="grid md:grid-cols-2 gap-3">
                        {testimonials.map((q, idx) => (
                            <div
                                key={idx}
                                className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4"
                            >
                                <div className="text-sm font-semibold">{q.name}</div>
                                <div className="mt-2 text-sm opacity-80">“{q.text}”</div>
                            </div>
                        ))}
                    </div>
                </Card>
            )}
        </div>
    );
}

function Entrepreneurship({
    t,
    getArray,
    baseKey
}: {
    t: (k: string, o?: any) => any;
    getArray: <T, >(key: string) => T[];
    baseKey: string;
}) {
    const includes = getArray<string>(`${baseKey}.entrepreneurship.includes`);
    const stats = getArray<Stat>(`${baseKey}.entrepreneurship.stats`);
    const sectors = getArray<string>(`${baseKey}.entrepreneurship.sectors`);
    const cohorts = getArray<string>(`${baseKey}.entrepreneurship.cohorts`);
    const stages = getArray<Stage>(`${baseKey}.entrepreneurship.stages`);

    return (
        <div className="space-y-4">
            <Card>
                <div className="text-xl font-semibold">
                    {t(`${baseKey}.entrepreneurship.title`)}
                </div>

                <p className="mt-2 text-sm opacity-80">
                    <span className="font-semibold">{t(`${baseKey}.entrepreneurship.aboutTitle`)}: </span>
                    {t(`${baseKey}.entrepreneurship.about`)}
                </p>
            </Card>

            <div className="grid lg:grid-cols-2 gap-4">
                <Card title={t(`${baseKey}.entrepreneurship.includesTitle`)}>
                    {includes.length ? (
                        <ul className="space-y-2 text-sm">
                            {includes.map((it, idx) => (
                                <li
                                    key={idx}
                                    className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2"
                                >
                                    {it}
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </Card>

                <Card title={t(`${baseKey}.entrepreneurship.achievementsTitle`)}>
                    <StatsGrid stats={stats} />
                </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
                <Card title={t(`${baseKey}.entrepreneurship.sectorsTitle`)}>
                    <SectorRail
                        items={sectors}
                        icons={[FaTruck, FaIndustry, FaShoppingCart, FaBrain, FaLaptopCode, FaHeartbeat]}
                    />
                </Card>

                <Card title={t(`${baseKey}.entrepreneurship.cohortsTitle`)}>
                    <CohortAccordion
                        cohorts={cohorts}
                        rails={[
                            { titleFallback: "Incubation Cohort 1", logos: program1Logos },
                            { titleFallback: "Incubation Cohort 2", logos: program2Logos },
                            { titleFallback: "Incubation Cohort 3", logos: program3Logos }
                        ]}
                    />
                </Card>
            </div>

            {!!stages.length && (
                <Card title={t(`${baseKey}.entrepreneurship.stagesTitle`)}>
                    <div className="space-y-3">
                        {stages.map((s, idx) => (
                            <div
                                key={idx}
                                className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4"
                            >
                                <div className="text-sm font-semibold">{s.title}</div>
                                <div className="mt-1 text-sm opacity-80">{s.desc}</div>
                            </div>
                        ))}
                    </div>
                </Card>
            )}
        </div>
    );
}

function IconGrid({
    items,
    icons
}: {
    items: string[];
    icons: Array<React.ComponentType<{ className?: string }>>;
}) {
    if (!items.length) return null;

    return (
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {items.map((label, idx) => {
                const Icon = icons[idx] ?? icons[icons.length - 1];

                return (
                    <div
                        key={idx}
                        title={label}
                        className="group grid place-items-center rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4"
                    >
                        <Icon className="text-2xl" />
                        <span className="sr-only">{label}</span>
                    </div>
                );
            })}
        </div>
    );
}


function LogoRail({ logos }: { logos: string[] }) {
    const railRef = useRef<HTMLDivElement | null>(null);
    const drag = useRef({ down: false, startX: 0, startScrollLeft: 0 });

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        const el = railRef.current;
        if (!el) return;

        drag.current.down = true;
        drag.current.startX = e.clientX;
        drag.current.startScrollLeft = el.scrollLeft;

        el.setPointerCapture(e.pointerId);
        el.style.cursor = "grabbing";
    };

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const el = railRef.current;
        if (!el || !drag.current.down) return;

        const dx = e.clientX - drag.current.startX;
        el.scrollLeft = drag.current.startScrollLeft - dx;
    };

    const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
        const el = railRef.current;
        if (!el) return;

        drag.current.down = false;
        try {
            el.releasePointerCapture(e.pointerId);
        } catch { }
        el.style.cursor = "grab";
    };

    if (!logos?.length) return <div className="text-sm opacity-70">No logos yet.</div>;

    return (
        <div className="relative w-full min-w-0 overflow-hidden">
            <div
                ref={railRef}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                className={[

                    "w-full min-w-0", "shrink-0 snap-start",
                    "flex gap-3",
                    "overflow-x-auto overflow-y-hidden",
                    "cursor-grab select-none touch-pan-x",
                    "py-1 px-1",
                    "snap-x snap-mandatory",
                    "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                ].join(" ")}
            >
                {logos.map((src, idx) => (
                    <div
                        key={`${src}-${idx}`}
                        className={[
                            "shrink-0 snap-start",
                            "h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24",
                            "rounded-2xl",
                            "border border-black/10 dark:border-white/10",

                            // ✅ always white background for logos
                            "bg-white",

                            // optional polish
                            "shadow-sm ring-1 ring-black/5",

                            "grid place-items-center",
                            "p-2 sm:p-3",
                            "overflow-hidden"
                        ].join(" ")}
                    >
                        <img
                            src={src}
                            alt={`logo-${idx + 1}`}
                            loading="lazy"
                            draggable={false}
                            className="w-full h-full object-contain max-w-[92%] max-h-[92%]"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

function CohortAccordion({
    cohorts,
    rails
}: {
    cohorts: string[];
    rails: { titleFallback: string; logos: string[] }[];
}) {
    const { i18n } = useTranslation();
    const isAr = i18n.language?.startsWith("ar");

    // ✅ mobile-friendly: start closed
    const [openIdx, setOpenIdx] = useState<number>(-1);

    return (
        <div className="space-y-2 w-full min-w-0">
            {rails.map((r, idx) => {
                const isOpen = openIdx === idx;
                const title = cohorts?.[idx] ?? r.titleFallback;
                const count = r.logos?.length ?? 0;

                return (
                    <div
                        key={idx}
                        className="w-full min-w-0 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 overflow-hidden"
                    >
                        <button
                            type="button"
                            aria-expanded={isOpen}
                            onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                            className={[
                                "w-full px-4 py-3",
                                "flex items-center justify-between gap-3",
                                "text-sm sm:text-base font-semibold",
                                "hover:bg-black/[0.03] dark:hover:bg-white/[0.07]",
                                "transition"
                            ].join(" ")}
                        >
                            <div className="flex items-center gap-2 min-w-0">
                                <span className="truncate">{title}</span>
                                <span className="shrink-0 text-xs font-medium opacity-70">
                                    ({count})
                                </span>
                            </div>

                            <span
                                className={[
                                    "shrink-0 text-lg leading-none opacity-70",
                                    "transition-transform duration-200",
                                    isOpen ? "rotate-180" : "rotate-0",
                                    isAr ? "ml-1" : ""
                                ].join(" ")}
                                aria-hidden="true"
                            >
                                ▾
                            </span>
                        </button>

                        {isOpen && (
                            <div className="px-4 pb-4">
                                <LogoRail logos={r.logos} />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

function SectorRail({
    items,
    icons
}: {
    items: string[];
    icons: Array<React.ComponentType<{ className?: string }>>;
}) {
    if (!items.length) return null;

    return (
        <div
            className={[
                "w-full",
                "overflow-x-auto overflow-y-hidden",
                "py-1",
                "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            ].join(" ")}
        >
            <div
                className={[
                    "grid",
                    "grid-flow-col",
                    "grid-rows-2", // ✅ two lines
                    "gap-3",
                    "auto-cols-[minmax(120px,1fr)]",
                    "items-stretch"
                ].join(" ")}
            >
                {items.map((label, idx) => {
                    const Icon = icons[idx] ?? icons[icons.length - 1];

                    return (
                        <div
                            key={idx}
                            title={label}
                            className={[
                                "rounded-2xl border border-black/10 dark:border-white/10",
                                "bg-white/60 dark:bg-white/5",
                                "p-3",
                                "min-h-[64px]",
                                "flex items-center gap-3"
                            ].join(" ")}
                        >
                            <Icon className="text-lg opacity-90 shrink-0" />
                            <div className="text-sm font-medium opacity-90 truncate">
                                {label}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}