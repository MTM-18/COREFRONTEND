// src/components/layout/Footer.tsx
import { useTranslation } from "react-i18next";
import LogoWhite from "../../assets/logo/fullWhiteLogo.svg";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="mt-16 pl-10">
            <div className="footer-surface">
                <div className="footer-inner">
                    {/* Column 1 – Logo + description */}
                    <div>
                        <img
                            src={LogoWhite}
                            alt={t("footer.logoAlt")}
                            className="h-16 mb-0"
                        />
                        <p className="footer-text mt-3">
                            {t("footer.officeEmail")}
                        </p>
                        <p className="footer-text mt-1">
                            {t("footer.officePhone")}
                        </p>
                    </div>

                    {/* Column 2 – Office info */}
                    <div>
                        <h3 className="footer-heading">
                            {t("footer.locationTitle")}
                        </h3>
                        <p className="footer-text">
                            {t("footer.location.line1")}<br />
                            {t("footer.location.line2")}<br />
                            {t("footer.location.line3")}<br />
                        </p>

                    </div>



                    {/* Column 4 – Newsletter + socials */}
                    <div>
                        <h3 className="footer-heading">
                            {t("footer.newsletterTitle")}
                        </h3>
                        <p className="footer-text">
                            {t("footer.newsletterDescription")}
                        </p>

                        <div className="footer-newsletter-row">
                            <input
                                type="email"
                                className="footer-email-input"
                                placeholder={t("footer.newsletterPlaceholder")}
                            />
                            <button className="btn-primary">
                                {t("footer.newsletterButton")}
                            </button>
                        </div>

                        {/* <div className="mt-6 flex gap-3 text-xl">
                            <FaFacebookF className="cursor-pointer" />
                            <FaInstagram className="cursor-pointer" />
                            <FaYoutube className="cursor-pointer" />
                            <FaLinkedinIn className="cursor-pointer" />
                        </div> */}
                    </div>
                </div>

                {/* Bottom row */}
                {/* <div className="footer-bottom">
                    <span>{t("footer.copyright")}</span>
                    <span>{t("footer.bottomRightNote")}</span>
                </div> */}
            </div>
        </footer>
    );
}
