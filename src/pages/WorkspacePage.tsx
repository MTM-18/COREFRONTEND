import { useEffect } from "react";
import PageShell from "../compnents/layout/PageShell";
import WorkspaceHero from "../compnents/sections/WorkspaceSection/WorkspaceHero";
import WorkspaceSpaces from "../compnents/sections/WorkspaceSection/WorkspaceSpaces";
import WorkspaceWhyChoose from "../compnents/sections/WorkspaceSection/WorkspaceWhyChoose";
import { fadeUpOnScroll } from "../styles/GsapAnimation";

export default function WorkspacePage() {
    useEffect(() => {
        fadeUpOnScroll(".fade-up");
    }, []);
    return (
        <PageShell>

            <div className="min-h-screen flex items-center justify-center bg-core-bg">
                <main>

                    <WorkspaceHero />
                    <section className="fade-up">
                        <WorkspaceWhyChoose />
                    </section>
                    <section className="fade-up">
                        <WorkspaceSpaces />
                    </section>

                </main>
            </div>
        </PageShell>
    );
}
