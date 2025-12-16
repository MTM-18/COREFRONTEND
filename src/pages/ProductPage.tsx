import { useEffect } from "react";
import PageShell from "../compnents/layout/PageShell";
import CoreProEmpoweringYouth from "../compnents/sections/CoreProComponents/CoreProEmpoweringYouth";
import CoreProStagesTimeline from "../compnents/sections/CoreProComponents/CoreProStagesTimeline";
import CoreProTrainingFields from "../compnents/sections/CoreProComponents/CoreProTrainingFields";
import CoreProVocationalFAQ from "../compnents/sections/CoreProComponents/CoreProVocationalFAQ";
import CoreProVocationalHero from "../compnents/sections/CoreProComponents/CoreProVocationalHero";
import CoreProVocationalIntroBand from "../compnents/sections/CoreProComponents/CoreProVocationalIntroBand";
import { fadeUpOnScroll } from "../styles/GsapAnimation";



export default function ProductPage() {
    useEffect(() => {
        fadeUpOnScroll(".fade-up");
    }, []);
    return (

        <PageShell>
            <div className="min-h-screen flex items-center justify-center bg-core-bg">
                <main>

                    <CoreProVocationalHero />
                    <section className="fade-up">
                        <CoreProVocationalIntroBand />
                    </section>
                    <section className="fade-up">
                        <CoreProEmpoweringYouth />
                    </section>
                    <section className="fade-up">
                        <CoreProTrainingFields />
                    </section>
                    <section className="fade-up">
                        <CoreProStagesTimeline />
                    </section>
                    <section className="fade-up">
                        <CoreProVocationalFAQ />
                    </section>
                </main>
            </div>
        </PageShell>
    );
}
