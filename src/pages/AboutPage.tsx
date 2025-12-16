import PageShell from "../compnents/layout/PageShell";
import VisionMissionSection from "../compnents/sections/AboutUsComponents/VisionMissionSection";
import ValuesSection from "../compnents/sections/AboutUsComponents/ValuesSection";
import TeamSection from "../compnents/sections/AboutUsComponents/TeamSection";
import DonorsSection from "../compnents/sections/AboutUsComponents/Dononrs";
import PhotoLibrarySection from "../compnents/sections/AboutUsComponents/PhotoLibrarySection";
import { fadeUpOnScroll } from "../styles/GsapAnimation";
import { useEffect } from "react";



export default function AboutPage() {

    useEffect(() => {
        fadeUpOnScroll(".fade-up");
    }, []);

    return (
        <PageShell>
            <div className="min-h-screen flex items-center justify-center bg-core-bg">
                <main>
                    <VisionMissionSection />
                    <section className="fade-up">

                        <ValuesSection />
                    </section>
                    <section className="fade-up">

                        <TeamSection />
                    </section>
                    <section className="fade-up">

                        <DonorsSection />
                    </section>
                    <section className="fade-up">

                        <PhotoLibrarySection />
                    </section>

                </main>
            </div>
        </PageShell>
    );
}
