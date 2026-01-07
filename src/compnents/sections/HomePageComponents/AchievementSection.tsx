import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

type Metric = {
    key: string;
    value: number;
    suffixKey?: string; // optional suffix like "مليون دولار"
};

function formatNumber(n: number, locale: string) {
    return new Intl.NumberFormat(locale).format(n);
}

function useCountUpOnView(target: number, inView: boolean, durationMs = 1200) {
    const [val, setVal] = useState(0);
    const started = useRef(false);

    useEffect(() => {
        if (!inView || started.current) return;
        started.current = true;

        const start = performance.now();
        const from = 0;
        const to = target;

        const tick = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - t, 3);
            const next = Math.round(from + (to - from) * eased);
            setVal(next);
            if (t < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
    }, [inView, target, durationMs]);

    return val;
}

export default function AchievementsSection() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language?.startsWith("ar") ? "ar" : "en";
    const locale = lang === "ar" ? "ar" : "en";

    const rootRef = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true);
            },
            { threshold: 0.25 }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const METRICS: Metric[] = useMemo(
        () => [
            { key: "beneficiaries", value: 5000 },
            { key: "programs", value: 27 },
            { key: "donors", value: 10 },
            { key: "partners", value: 60 },
            { key: "experts", value: 100 },
            { key: "graduates", value: 600 },
            { key: "startups", value: 67 },
            { key: "investments", value: 5, suffixKey: "millionUsd" }, // 5 مليون دولار
        ],
        []
    );

    return (
        <section ref={rootRef} className="py-5 md:py-10" dir={lang === "ar" ? "rtl" : "ltr"}>
            <div className="layout-shell  mx-auto">
                <div className="card-surface p-6 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-semibold text-core-brand dark:text-core-textAccent">
                        {t("homePage.achievements.title")}
                    </h2>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {METRICS.map((m) => (
                            <MetricCard
                                key={m.key}
                                title={t(`homePage.achievements.items.${m.key}`)}
                                value={m.value}
                                suffix={m.suffixKey ? t(`homePage.achievements.suffix.${m.suffixKey}`) : ""}
                                inView={inView}
                                locale={locale}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function MetricCard({
    title,
    value,
    suffix,
    inView,
    locale,
}: {
    title: string;
    value: number;
    suffix?: string;
    inView: boolean;
    locale: string;
}) {
    const current = useCountUpOnView(value, inView, 1200);

    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-2xl md:text-3xl font-semibold text-core-textDark dark:text-core-textLight">
                {formatNumber(current, locale)}
                {suffix ? <span className="text-sm md:text-base font-medium text-core-textMuted ms-2">{suffix}</span> : null}
            </div>
            <div className="mt-2 text-sm text-core-textMuted leading-snug">{title}</div>
        </div>
    );
}
