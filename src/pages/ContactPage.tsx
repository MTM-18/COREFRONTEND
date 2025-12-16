import PageShell from "../compnents/layout/PageShell";
// import ContactForm from "../compnents/sections/ContactUsComponents/ContactFormSection";
import ContactIntroCards from "../compnents/sections/ContactUsComponents/ContanctIntroCards";
import ContactMapSection from "../compnents/sections/ContactUsComponents/ContactMapSection";
import ContactForm from "../compnents/sections/ContactUsComponents/ContactFormSection";
export default function ContactPage() {
    return (
        <PageShell>
            <main>
                <ContactIntroCards />
                <ContactMapSection />
                <ContactForm />
            </main>
        </PageShell>
    );
}
