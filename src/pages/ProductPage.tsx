import { useEffect } from "react";
import PageShell from "../compnents/layout/PageShell";

import { fadeUpOnScroll } from "../styles/GsapAnimation";
import ProgramsPage from "../compnents/sections/CoreProComponents/programPage";

export default function ProductPage() {
    useEffect(() => {
        fadeUpOnScroll(".fade-up");
    }, []);
    return (

        <PageShell>
            <div className="min-h-screen bg-core-bg">
                <main className="mx-auto max-w-6xl px-4 py-10">

                    <ProgramsPage />

                    {/* <CoreProVocationalHero />
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
                    </section> */}
                </main>
            </div>
        </PageShell>
    );
}
