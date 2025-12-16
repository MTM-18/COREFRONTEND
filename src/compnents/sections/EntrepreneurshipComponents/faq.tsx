import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function EntrepreneurshipFAQ() {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const FAQ_ITEMS = [
        "whatIsIncubation",
        "youthBenefit",
        "howToRegister",
        "isFree",
        "criteria",
        "balanceStudy",
    ] as const;

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="layout-shell py-16 md:py-20">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <h2 className="text-2xl md:text-3xl font-semibold text-core-brand dark:text-core-textAccent mb-2">
                    {t("entrepreneurshipPage.faq.title")}
                </h2>
                <p className="text-base md:text-lg text-core-textDark dark:text-core-textLight mb-10 max-w-2xl">
                    {t("entrepreneurshipPage.faq.subtitle")}
                </p>

                {/* FAQ List */}
                <div className="space-y-4">
                    {FAQ_ITEMS.map((key, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={key}
                                className={`
                                    border rounded-xl overflow-hidden
                                    transition-all duration-200
                                    ${isOpen
                                        ? "bg-core-brand text-core-textLight border-core-brand"
                                        : "bg-core-surface border-core-border/60"
                                    }
                                `}
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggle(index)}
                                    className="
                                        w-full flex items-center justify-between
                                        text-left px-5 py-4 md:py-5 font-semibold
                                    "
                                >
                                    <span>
                                        {t(`entrepreneurshipPage.faq.items.${key}.q`)}
                                    </span>

                                    {isOpen ? (
                                        <FiChevronUp className="text-xl" />
                                    ) : (
                                        <FiChevronDown className="text-xl" />
                                    )}
                                </button>

                                {/* Answer */}
                                <div
                                    className={`
                                        px-5 pb-5 text-sm md:text-base leading-relaxed
                                        text-core-textMutedLight transition-all duration-300
                                        ${isOpen
                                            ? "max-h-[500px] opacity-100"
                                            : "max-h-0 opacity-0 overflow-hidden"
                                        }
                                    `}
                                >
                                    {t(`entrepreneurshipPage.faq.items.${key}.a`)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
