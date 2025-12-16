import PageShell from "../compnents/layout/PageShell";
import EntrepreneurshipHero from "../compnents/sections/EntrepreneurshipComponents/Hero";
import EntrepreneurshipIntro from "../compnents/sections/EntrepreneurshipComponents/IncubationIntro";
import EntrepreneurshipStages from "../compnents/sections/EntrepreneurshipComponents/IncubationStages";
import EntrepreneurshipApplication from "../compnents/sections/EntrepreneurshipComponents/IncubationApplication";
import EntrepreneurshipFAQ from "../compnents/sections/EntrepreneurshipComponents/faq";
import { useEffect } from "react";
import { fadeUpOnScroll } from "../styles/GsapAnimation";

export default function Entrepreneurship() {
    useEffect(() => {
        fadeUpOnScroll(".fade-up");
    }, []);
    return (
        <PageShell>

            <div className="min-h-screen flex items-center justify-center bg-core-bg">
                <main>
                    <EntrepreneurshipHero />
                    <section className="fade-up">
                        <EntrepreneurshipIntro />
                    </section>
                    <section className="fade-up">
                        <EntrepreneurshipStages />
                    </section>
                    <section className="fade-up">
                        <EntrepreneurshipApplication />
                    </section>
                    <section className="fade-up">

                        <EntrepreneurshipFAQ />
                    </section>
                </main>
            </div>
        </PageShell>
    );
}
