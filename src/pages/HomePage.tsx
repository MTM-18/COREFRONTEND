import { useEffect } from "react";

import PageShell from "../compnents/layout/PageShell";
import Hero from "../compnents/sections/HomePageComponents/Hero";
import AboutSection from "../compnents/sections/HomePageComponents/AboutSection";
import ServiceSection from "../compnents/sections/HomePageComponents/OurServices";
import NewsSection from "../compnents/sections/HomePageComponents/NewsSection";
import TestimonialsSection from "../compnents/sections/HomePageComponents/TestimonialsSection";

import { fadeUpOnScroll } from "../styles/GsapAnimation";

export default function HomePage() {
    useEffect(() => {
        fadeUpOnScroll(".fade-up");
    }, []);

    return (
        <PageShell>
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <main>
                    {/* HERO: always visible, no fade-up */}
                    <Hero />

                    {/* These will fade on scroll */}
                    <section className="fade-up">
                        <AboutSection />
                    </section>

                    <section className="fade-up">
                        <ServiceSection />
                    </section>

                    <section className="fade-up">
                        <NewsSection />
                    </section>

                    <section className="fade-up">
                        <TestimonialsSection />
                    </section>
                </main>
            </div>
        </PageShell>
    );
}
