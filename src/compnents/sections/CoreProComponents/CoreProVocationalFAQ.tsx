import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ_KEYS = [
    "whatIsProgram",
    "youthBenefit",
    "howToRegister",
    "isFree",
    "criteria",
    "balance",
] as const;

export default function CoreProVocationalFAQ() {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="layout-shell py-16 md:py-20">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h2 className="text-2xl md:text-3xl font-semibold text-core-brand dark:text-core-textAccent mb-2">
                    {t("coreProPage.vocationalFaq.title")}
                </h2>
                <p className="text-base md:text-lg text-core-textDark dark:text-core-textLight mb-10 max-w-2xl">
                    {t("coreProPage.vocationalFaq.subtitle")}
                </p>

                {/* FAQ list */}
                <div className="space-y-0 border border-core-border/60 rounded-xl overflow-hidden">
                    {FAQ_KEYS.map((key, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={key}
                                className={`
                  border-b last:border-b-0
                  transition-colors duration-200
                  ${isOpen ? "bg-core-brand text-core-textLight" : "bg-core-surface"}
                `}
                            >
                                <button
                                    type="button"
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between px-5 py-4 md:py-5 text-left font-semibold"
                                >
                                    <span>
                                        {t(`coreProPage.vocationalFaq.items.${key}.q`)}
                                    </span>
                                    {isOpen ? (
                                        <FiChevronUp className="text-xl" />
                                    ) : (
                                        <FiChevronDown className="text-xl" />
                                    )}
                                </button>

                                <div
                                    className={`
                    px-5 pb-5 text-sm md:text-base leading-relaxed
                    transition-all duration-300
                    ${isOpen
                                            ? "max-h-[500px] opacity-100"
                                            : "max-h-0 opacity-0 overflow-hidden"
                                        }
                  `}
                                >
                                    <p
                                        className={
                                            isOpen
                                                ? "text-core-textMutedLight"
                                                : "text-core-textMuted dark:text-core-textMutedDark"
                                        }
                                    >
                                        {t(`coreProPage.vocationalFaq.items.${key}.a`)}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA bar */}
                {/* <div className="mt-6 rounded-xl bg-core-brand text-core-textLight px-5 py-4 md:py-5 flex items-center justify-between">
                    <span className="font-semibold">
                        {t("coreProPage.vocationalFaq.ctaText")}
                    </span>
                    <FiChevronUp className="text-xl" />
                </div> */}
            </div>
        </section>
    );
}
